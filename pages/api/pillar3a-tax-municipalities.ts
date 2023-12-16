import { NextApiRequest, NextApiResponse } from "next";

import { getMunicipalitiesByBfsId } from "lib/pillar3a/taxTotalMultiplier";

const handler = (_: NextApiRequest, response: NextApiResponse) => {
  const municipalities = getMunicipalitiesByBfsId();
  response.status(200).json(municipalities);
};

export default handler;
