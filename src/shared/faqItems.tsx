import { asText, filter, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@true-wealth/ui-core";
import { useRouter } from "next/router";
import { FC, useState } from "react";

import { getLocaleFromString } from "lib/languages";
import { createClient } from "lib/prismic/config";
import { htmlSerializer } from "lib/prismic/htmlSerializer";

export interface FaqItem {
  uid: string | null;
  question: string;
  answer: RichTextField;
}

interface Props {
  items: FaqItem[];
}

export const FaqItems: FC<Props> = ({ items }) => (
  <Accordion collapsible type="single">
    {items.map((item) => (
      <AccordionItem key={item.uid} value={item.uid ?? item.question}>
        <AccordionTrigger className="text-2xl font-bold text-left">
          {item.question}
        </AccordionTrigger>
        <AccordionContent className="text-dark-100 text-lg leading-7">
          <PrismicRichText field={item.answer} components={htmlSerializer} />
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export const useFetchAllFaqCategoryItems = ({
  cagegoryId,
  initialItems = []
}: {
  cagegoryId: string;
  initialItems?: FaqItem[];
}) => {
  const { locale } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [items, setItems] = useState(initialItems);
  const client = createClient();
  const fetchAll = async () => {
    if (locale) {
      setIsLoading(true);
      const existingFaqItemUids = items.map((f) => f.uid);
      const allCategoryFaqItems = await client.getAllByType("faq_item", {
        predicates: [filter.at("my.faq_item.category", cagegoryId)],
        lang: getLocaleFromString(locale).ietf
      });
      const remainingFaqItems = allCategoryFaqItems
        .filter((item) => !existingFaqItemUids.includes(item.uid ?? ""))
        .map((f) => ({
          uid: f.uid,
          question: asText(f.data.question),
          answer: f.data.answer
        }));
      setItems([...items, ...remainingFaqItems]);
      setIsLoading(false);
      setIsFetched(true);
    }
  };

  return { items, isLoading, isFetched, fetchAll };
};
