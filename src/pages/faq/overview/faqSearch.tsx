import { asText, isFilled, LinkType } from "@prismicio/client";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";

import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import { LoadingIndicator } from "src/core/loadingIndicator";
import styles from "src/pages/faq/overview/faqSearch.module.scss";
import { FAQOverviewCategory } from "src/pages/faq/overview/types";
import { useTranslation } from "src/shared/translations";

import { createClient } from "lib/prismic/config";
import { FaqItemDocument } from "lib/types.generated";

interface Props {
  faqCategories?: FAQOverviewCategory[];
}

export const FAQSearch: FC<PropsWithChildren<Props>> = ({ faqCategories, children }) => {
  const { t } = useTranslation();
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [allFaqItems, setAllFaqItems] = useState<FaqItemDocument[]>([]);
  const [searchResults, setSearchResults] = useState<Map<string, FaqItemDocument[]> | null>(null);
  const client = createClient();

  const fetchAllFaqItems = async () =>
    client.getAllByType("faq_item", {
      lang: faqCategories?.[0].link.lang
    });

  const filterResults = (items: FaqItemDocument[]) => {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    const filteredItems = items.filter(
      (item) =>
        asText(item.data.question).toLowerCase().includes(normalizedSearchTerm) ||
        asText(item.data.answer).toLowerCase().includes(normalizedSearchTerm)
    );
    const filteredFaqItemsByCategory = new Map<string, FaqItemDocument[]>();

    faqCategories?.forEach((category) => {
      const categoryItems = filteredItems.filter(
        (item) =>
          isFilled.contentRelationship(item.data.category) &&
          item.data.category.uid === category.link.uid
      );

      if (categoryItems.length > 0) {
        filteredFaqItemsByCategory.set(category.title, categoryItems);
      }
    });

    setSearchResults(filteredFaqItemsByCategory);
  };

  useEffect(() => {
    if (searchTerm.length > 1) {
      setIsSearching(true);
      if (allFaqItems.length) {
        filterResults(allFaqItems);
        setIsSearching(false);
      } else {
        fetchAllFaqItems().then((items) => {
          setAllFaqItems(items);
          filterResults(items);
          setIsSearching(false);
        });
      }
    } else {
      setIsSearching(false);
      setSearchResults(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, allFaqItems]);

  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          type="search"
          value={searchTerm}
          onChange={(ev) => setSearchTerm(ev.target.value)}
          placeholder={t("faq.search.placeholder")}
          aria-label="Search FAQ"
        />
        <Icon icon="search" />
        {isSearching && (
          <div className={styles.loader}>
            <LoadingIndicator />
          </div>
        )}
      </div>
      <div>
        {searchResults ? (
          searchResults.size > 0 ? (
            <div className={styles.items}>
              {Array.from(searchResults.keys()).map((key) => {
                const items = searchResults.get(key);

                return (
                  <div key={key}>
                    <h2>{key}</h2>

                    {items?.map((item) => (
                      <Link key={item.uid} link={{ link_type: LinkType.Document, ...item }}>
                        {asText(item.data.question)}
                      </Link>
                    ))}
                  </div>
                );
              })}
            </div>
          ) : (
            <div>{t("faq.search.noResults")}</div>
          )
        ) : (
          children
        )}
      </div>
    </>
  );
};
