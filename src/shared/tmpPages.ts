import { Client } from "@prismicio/client";
import fs from "fs";
import path from "path";

import { fetchPages } from "src/shared/data";

import { AllDocumentTypes } from "lib/types.generated";

const TMP_FILE = "tmpPages.json";

/**
 * We store the results on the file system so that we don't have to unnecessarily fetch
 * the very same data again in getStaticProps
 */
export const writePagesToFs = (results: AllDocumentTypes[]) => {
  fs.writeFileSync(path.join(process.cwd(), TMP_FILE), JSON.stringify(results), "utf-8");
};

export const readPagesFromFs = (client: Client) => {
  /**
   * For some reason Vercel rerenders the static pages for bots.
   * In this case (and when there is no tmp file present) we fetch the pages directly from Prismic.
   */
  try {
    throw Error("NO CACHE TODAY")
  } catch (err) {
    console.error(
      `Couldn't read from file system. Falling back to querying prismic data directly.`
    );
    return fetchPages(client);
  }
};