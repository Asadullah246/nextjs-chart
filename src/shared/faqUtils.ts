import { asText, isFilled } from "@prismicio/client";

import { FaqItem } from "src/shared/faqItems";

import {
  AllDocumentTypes,
  FaqItemDocument,
  PricingDocumentDataBodyFaqSliceItem
} from "lib/types.generated";

export const convertFaqSliceItems = (
  results: AllDocumentTypes[],
  faqItems: PricingDocumentDataBodyFaqSliceItem[] = []
) => {
  const items: FaqItem[] = [];

  faqItems.forEach(({ faq_item }) => {
    const faqItem = isFilled.contentRelationship(faq_item)
      ? results.find((f): f is FaqItemDocument => f.uid === faq_item?.uid)
      : null;

    if (faqItem) {
      items.push({
        uid: faqItem.uid,
        question: asText(faqItem.data.question),
        answer: faqItem.data.answer
      });
    }
  });

  return items;
};
