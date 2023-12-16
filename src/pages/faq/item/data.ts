import { asText, isFilled } from "@prismicio/client";

import { Locale } from "lib/languages";
import { AllDocumentTypes, FaqCategoryDocument, FaqItemDocument } from "lib/types.generated";

export const getFaqItemData = (
  results: AllDocumentTypes[],
  doc: FaqItemDocument,
  locale: Locale
) => {
  const categoryUid = isFilled.contentRelationship(doc.data.category)
    ? doc.data.category.uid
    : null;
  const itemCategory = results.find(
    (r): r is FaqCategoryDocument =>
      r.uid === categoryUid && r.lang === locale.ietf && r.type === "faq_category"
  );

  if (!itemCategory) {
    throw new Error(`Couldn't find category with uid ${categoryUid}`);
  }

  const faqItemCategory = {
    label: asText(itemCategory.data.title),
    link: {
      uid: itemCategory.uid ?? "",
      url: itemCategory.url ?? "",
      lang: itemCategory.lang ?? ""
    }
  };

  const faqItemRelatedItems = results
    .filter(
      (r): r is FaqItemDocument =>
        r.uid !== doc?.uid &&
        r.lang === locale.ietf &&
        r.type === "faq_item" &&
        isFilled.contentRelationship(r.data.category) &&
        r.data.category.uid === categoryUid
    )
    .map((r) => ({
      label: asText(r.data.question),
      link: {
        uid: r.uid ?? "",
        url: r.url ?? "",
        lang: r.lang
      }
    }));

  return { faqItemCategory, faqItemRelatedItems };
};
