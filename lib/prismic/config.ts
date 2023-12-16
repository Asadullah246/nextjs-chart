import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import { NextApiRequest } from "next";
import { PreviewData } from "pages/api/preview";

const API_ENDPOINT = "https://truewealth.cdn.prismic.io/api/v2";
const API_TOKEN = process.env.PRISMIC_API_TOKEN;

export const REPOSITORY_NAME = prismic.getRepositoryName(API_ENDPOINT);

interface Config extends prismic.ClientConfig {
  previewData?: PreviewData;
  req?: NextApiRequest;
}

export const createClient = (config: Config = {}) => {
  const client = prismic.createClient(API_ENDPOINT, {
    ...config,
    accessToken: API_TOKEN,
    // TODO we should use this new functionality for press and blog as well
    routes: [
      {
        type: "faq_item",
        resolvers: {
          category: "category"
        },
        path: "/faq/:category/:uid"
      },
      {
        type: "faq_category",
        path: "/faq/:uid"
      }
    ]
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  });

  return client;
};
