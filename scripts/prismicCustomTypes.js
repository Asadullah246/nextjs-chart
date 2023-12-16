const fs = require("fs");
const https = require("https");
const path = require("path");
const { execSync } = require("child_process");

/**
 * This script has two modes:
 * 1) Default mode (absence of CHECK_TYPES env variable), that fetches all current custom prismic types from
 * prismic and saves them in lib/prismic/customTypes (this mode applies changes to the code base).
 *
 * 2) Check types mode, that checks if current custom types that are in the code base match the types that are in the
 * prismic repository.
 *
 * Environment variables:
 *
 * @REQUIRED
 * PRISMIC_CUSTOM_TYPES_API_TOKEN - bearer token that is needed to fetch custom prismic types. This script will not
 * work if this env variable is not set.
 *
 * @OPTIONAL
 * CHECK_TYPES - this env variable is optional. By default, it is unset. GitHub workflow checkPrismicCustomTypes
 * passes this env variable to this script.
 *
 * @OPTIONAL
 * AUTHOR - this env variable is optional. It only adds logic for dependabot pull requests, where we instantly exit
 * the script with 0 (success). The reason we do this, is that we do not want to expose our SECRETS to the
 * dependabot, which makes this script not functional in such case.
 */

const PRISMIC_CUSTOM_TYPES_DIR = "lib/prismic/customTypes";
const TMP_PRISMIC_CUSTOM_TYPES_DIR = "lib/prismic/tmpCustomTypes";

if (process.env.AUTHOR && process.env.AUTHOR.toString().includes("dependabot")) {
  console.log(
    "Prismic custom types check is ignored for dependabot, as we do not expose our secrets to it. Script exits with 0 (success)."
  );
  process.exit(0);
}

// If env variable PRISMIC_CUSTOM_TYPES_API_TOKEN is not set, try to load it from .env.local file.
// GitHub workflow checkPrismicCustomTypes passes the PRISMIC_CUSTOM_TYPES_API_TOKEN secret as env. variable,
// and this loading is needed only for local usages.
if (!process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN) {
  require("dotenv").config({ path: ".env.local" });
  if (!process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN) {
    throw Error('The environment variable "PRISMIC_CUSTOM_TYPES_API_TOKEN" is not set.');
  }
}

// Prismic Custom Types API:
// https://prismic.io/docs/technologies/custom-types-api
const API_REQUEST_OPTIONS = {
  hostname: "customtypes.prismic.io",
  method: "GET",
  path: "/customtypes",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN}`,
    repository: "truewealth"
  }
};

console.log("Requesting custom types from Prismic Custom Types API ...");

const req = https.request(API_REQUEST_OPTIONS, (res) => {
  console.log(`Request status code: ${res.statusCode}`);
  console.log(`Request status message: ${res.statusMessage}`);
  let data = "";
  /**
   @param {string} chunk
   @return void
   */
  const combineChunks = (chunk) => {
    data += chunk;
  };
  res.on("data", combineChunks);
  res.on("end", () => processData(data));
});

/**
 @param {string} data
 @return void
 */
const processData = (data) => {
  if (process.env.CHECK_TYPES) {
    checkPrismicCustomTypes(data);
  } else {
    getPrismicCustomTypes(data);
    console.log("Script finished successfully.");
  }
};

/**
 @param {string} data
 @return void
 */
const checkPrismicCustomTypes = (data) => {
  fs.mkdirSync(TMP_PRISMIC_CUSTOM_TYPES_DIR, { recursive: true });
  getPrismicCustomTypes(data, TMP_PRISMIC_CUSTOM_TYPES_DIR);
  let failed = false;
  console.log("Checking if Prismic Custom Types are up-to-date ...");
  try {
    execSync(`diff -r ${PRISMIC_CUSTOM_TYPES_DIR} ${TMP_PRISMIC_CUSTOM_TYPES_DIR}`, {
      encoding: "ascii"
    });
    console.log("Prismic Custom Types Check was successful.");
  } catch (err) {
    failed = true;
    console.error("Prismic Custom Types Check has failed:\n");
    console.error(err.output.filter((item) => item).toString());
    console.error(
      "While you were working on your change, somebody changed custom types in prismic repository.\n" +
        'Please update prismic custom types (run "node ./scripts/prismicTypes" locally), and correctly\n' +
        "update the corresponding TypeScript types in lib/prismic/types.\n" +
        "Feel free to do that in a separate change, and rebase this change on top of it."
    );
  } finally {
    console.log("Cleaning up ...");
    fs.rmSync(TMP_PRISMIC_CUSTOM_TYPES_DIR, { recursive: true, force: true });
    if (failed) {
      process.exit(1);
    }
  }
};

/**
 @param {string} data
 @param {string} dir
 @return void
 */
const getPrismicCustomTypes = (data, dir = PRISMIC_CUSTOM_TYPES_DIR) => {
  fs.mkdirSync(dir, { recursive: true });
  const customTypes = JSON.parse(data);
  console.log(`Starting to save custom types in ${dir} ...`);
  customTypes.forEach((customType) => {
    const customTypeName = `${customType.id}.json`;
    console.log(`Saving custom type ${customTypeName} ...`);
    fs.writeFileSync(
      path.join(process.cwd(), dir, customTypeName),
      JSON.stringify(customType),
      "utf-8"
    );
  });
  console.log("Formatting new custom types ...");
  execSync(`yarn prettier --write ${dir}`);
};

req.on("error", (error) => {
  console.error(`Error has occurred: \n${error.message}`);
  process.exit(1);
});

req.end();
