import { NextApiRequest, NextApiResponse } from "next";
import { NextApiHandler } from "next/dist/shared/lib/utils";

import { calculateGeneralSavings } from "lib/pillar3a/taxSavingCalculator";
import {
  Children,
  CivilStatus,
  Gender,
  Municipality,
  Pillar3aTaxInfo,
  Religion
} from "lib/pillar3a/taxSavingDomain";
import { getMunicipalitiesByBfsId } from "lib/pillar3a/taxTotalMultiplier";

type NextApiQueryParam = string | string[] | undefined;

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  const { query } = request;

  const info: Pillar3aTaxInfo = {
    age: validateNumber(query.age),
    municipality: validateMunicipality(query.municipalityBfsId),
    gender: query.gender as Gender,
    civilStatus: validateEnum(query.civilStatus, CivilStatus) as CivilStatus,
    children: validateEnum(query.children, Children) as Children,
    religion: validateEnum(query.religion, Religion) as Religion,
    taxableIncome: validateNumber(query.taxableIncome),
    pillar3aAssets: validateNumber(query.pillar3aAssets),
    pillar3aContribution: validateNumber(query.pillar3aContribution),
    missedYears: validateNumber(query.missedYears)
  };

  const savings = calculateGeneralSavings(info);

  response.status(200).json(savings);
};

class ValidationError extends Error {}

const validateSingleRequired = (param: NextApiQueryParam): string => {
  if (!param) {
    throw new ValidationError("Parameter is missing.");
  }
  if (Array.isArray(param)) {
    throw new ValidationError(`Parameter=${param} is an array.`);
  }
  return param;
};

const validateNumber = (param: NextApiQueryParam) => {
  const singleParam = validateSingleRequired(param);
  if (isNaN(+singleParam)) {
    throw new ValidationError(`${singleParam} is not a number.`);
  }
  return +singleParam;
};

const validateEnum = (param: NextApiQueryParam, enumType: any): string => {
  const singleParam = validateSingleRequired(param);
  if (!Object.values(enumType).includes(singleParam)) {
    throw new ValidationError(
      `Literal ${singleParam} is not present in enum ${JSON.stringify(enumType)}`
    );
  }
  return singleParam;
};

const validateMunicipality = (param: NextApiQueryParam): Municipality => {
  const municipalityBfsId = validateNumber(param);
  const municipality = getMunicipalitiesByBfsId()[municipalityBfsId];
  if (!municipality) {
    throw new ValidationError(`${municipalityBfsId} is not a valid municipality bfs id.`);
  }
  return municipality;
};

const httpWrapper = (wrappedHandler: NextApiHandler): NextApiHandler => {
  return (req, res) => {
    try {
      wrappedHandler(req, res);
    } catch (e) {
      throw new Error(`API exception while serving ${req.method} ${req.url}.`, { cause: e });
    }
  };
};

export default httpWrapper(handler);
