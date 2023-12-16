import { Client } from "@prismicio/client";

import { ACTIVE_DOC_TYPES } from "src/shared/page/slugsPage";

import { AllDocumentTypes } from "lib/types.generated";

export const fetchPages = async (client: Client<AllDocumentTypes>) =>
  (
    await Promise.all<AllDocumentTypes[]>(
      ACTIVE_DOC_TYPES.map((docType) =>
        client.getAllByType(docType, {
          lang: "*"
        })
      )
    )
  ).flat();
