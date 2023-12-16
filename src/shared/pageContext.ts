import { createContext } from "react";

import { PageProps } from "src/shared/types";

import { AllDocumentTypes } from "lib/types.generated";

/**
 * We have to make "doc" optional here because there are pages that don't return
 * a doc, like "styleguide" or "no-translation".
 */
export type PagePropsContextType = Omit<PageProps, "doc"> & {
  doc: AllDocumentTypes | undefined;
};

export const PagePropsContext = createContext<PagePropsContextType>({
  doc: undefined,
  languageAlternates: []
});
