import { exitPreview } from "@prismicio/next";
import { NextApiRequest, NextApiResponse } from "next/types";

const handler = async function exit(req: NextApiRequest, res: NextApiResponse) {
  exitPreview({ res, req });
};

export default handler;
