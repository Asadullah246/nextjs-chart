import { asText, LinkType } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { Author } from "src/pages/blog/detailView/author";
import styles from "src/pages/blog/detailView/blogDetailView.module.scss";
import { CoverImage } from "src/pages/blog/detailView/coverImage";
import { Seo } from "src/pages/blog/detailView/seo";
import { Slices } from "src/pages/blog/detailView/slices";
import { SubTitle } from "src/pages/blog/subTitle";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { AuthorsDocument, BlogPostDocument } from "lib/types.generated";

import { Share } from "./share";

export interface BlogDetailViewProps {
  doc: BlogPostDocument;
  authorDoc?: AuthorsDocument | null;
}

export const BlogDetailView: FC<BlogDetailViewProps> = ({ doc, authorDoc }) => {
  const {
    body: slices,
    cover_image,
    cover_image_text,
    show_text_bellow_image,
    embed,
    type,
    seo_description,
    seo_title
  } = doc.data;
  const authorName = authorDoc?.data.name ?? "";
  const isPodcast = type === "Podcast";
  const { t } = useTranslation();

  return (
    <>
      <Section variant="light">
        <SectionContainer>
          <Card className={styles.block}>
            <Seo doc={doc} authorName={authorName} />

            {embed.html ? (
              <div
                className="mb-8 lg:mb-16 [&>iframe]:w-full [&>iframe]:aspect-video [&>iframe]:h-auto"
                dangerouslySetInnerHTML={{ __html: embed.html }}
              />
            ) : cover_image ? (
              <CoverImage
                authorName={authorName}
                coverImage={cover_image}
                coverImageText={cover_image_text}
                showTextBellowImage={show_text_bellow_image}
              />
            ) : null}

            <div className={styles.content}>
              {isPodcast && (
                <div className="flex space-x-6 mb-8 lg:mb-12">
                  <Link
                    link={{
                      link_type: LinkType.Web,
                      url: "https://open.spotify.com/show/35vXTHOibDPZqHQIYVS9r3"
                    }}
                  >
                    <Image src="/assets/img/spotify.svg" alt="Spotify" width={24} height={25} />
                  </Link>
                  <Link
                    link={{
                      link_type: LinkType.Web,
                      url: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9lNzVlOWJmMC9wb2RjYXN0L3Jzcw"
                    }}
                  >
                    <Image
                      src="/assets/img/google-podcasts.svg"
                      alt="Google Podcasts"
                      width={24}
                      height={25}
                    />
                  </Link>
                  <Link
                    link={{
                      link_type: LinkType.Web,
                      url: "https://www.youtube.com/channel/UCdHOWeWsS0c4gy4OFppnxGQ"
                    }}
                  >
                    <Image src="/assets/img/youtube.svg" alt="YouTube" width={25} height={25} />
                  </Link>
                  <Link
                    link={{
                      link_type: LinkType.Web,
                      url: "https://podcasts.apple.com/us/podcast/true-wealth-podcast/id1704972316"
                    }}
                  >
                    <Image
                      src="/assets/img/apple-podcasts.svg"
                      alt="Apple Podcasts"
                      width={25}
                      height={25}
                    />
                  </Link>
                </div>
              )}

              {doc.data.headline && (
                <div className={styles.headline}>
                  <h1>{asText(doc.data.headline)}</h1>
                </div>
              )}
              <div className="mb-4 md:mb-8 flex items-center">
                <Share
                  seoTitle={seo_title ?? undefined}
                  seoDescription={seo_description ?? undefined}
                />
                <div className="ml-4">
                  <SubTitle author={authorDoc} post={doc} />
                </div>
              </div>
              <div className={styles.excerpt}>
                <PrismicRichText field={doc.data.excerpt} components={htmlSerializer} />
              </div>
              {slices && <Slices slices={slices} />}
              <div className={styles.disclaimer}>{t("blog.disclaimer")}</div>
              {authorDoc && <Author doc={authorDoc} />}
            </div>
          </Card>
        </SectionContainer>
      </Section>

      <ReadyToInvest />
    </>
  );
};
