import { redirectToPreviewURL } from "@prismicio/next";
import { NextApiRequest, NextApiResponse } from "next/types";

import { createClient } from "lib/prismic/config";
import { hrefResolver } from "lib/routes";

export interface PreviewData {
  id: string;
  ref: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token: ref, documentId } = req.query;
  const client = createClient({ req });
  res.setPreviewData({
    id: documentId,
    ref
  });
  await redirectToPreviewURL({ req, res, client, linkResolver: hrefResolver as any });
};

export default handler;
