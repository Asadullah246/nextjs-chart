import { Client } from "@prismicio/client";

import { Locale } from "lib/languages";
import { AllDocumentTypes } from "lib/types.generated";

export const getKnowledgeNavigation = async (client: Client<AllDocumentTypes>, locale: Locale) =>
  client.getSingle("knowledge_navigation", {
    lang: locale.ietf
  });
