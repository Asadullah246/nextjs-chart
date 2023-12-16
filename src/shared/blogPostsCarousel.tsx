import { asText, LinkType } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { FC } from "react";
import Carousel from "react-slick";

import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import { SectionContainer } from "src/core/section/sectionContainer";
import { BlogOverviewPagePost } from "src/pages/blog/overview/types";
import { SubTitle } from "src/pages/blog/subTitle";
import { VideoTag } from "src/pages/blog/videoTag";
import styles from "src/shared/blogPostsCarousel.module.scss";
import { useTranslation } from "src/shared/translations";

import { defaultCarouselProps } from "lib/carousel";
import { htmlSerializer } from "lib/prismic/htmlSerializer";

interface Props {
  posts: BlogOverviewPagePost[];
}

export const BlogPostsCarousel: FC<Props> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <Carousel
      {...defaultCarouselProps}
      autoplay={false}
      className={classNames(styles.carousel, {
        [styles.noSwipe]: posts.length === 1
      })}
    >
      {posts.map(({ post, author }) => (
        <BlogPost key={post.id} post={post} author={author} />
      ))}
    </Carousel>
  );
};

export const BlogPost: FC<BlogOverviewPagePost> = ({ post, author }) => {
  const {
    uid,
    data: { cover_image, cover_image_text, headline, excerpt, embed }
  } = post;
  const { t } = useTranslation();
  const { locale: localeIso } = useRouter();

  return (
    <SectionContainer
      className={styles.container}
      imagePosition="right"
      image={cover_image?.preview2x}
      imageAfter={embed.embed_url && <VideoTag />}
      imageText={
        cover_image_text && <PrismicRichText field={cover_image_text} components={htmlSerializer} />
      }
    >
      {headline && <h2>{asText(headline)}</h2>}
      <div className="mb-6">
        <SubTitle author={author} post={post} />
      </div>
      <PrismicRichText field={excerpt} components={htmlSerializer} />

      <Link
        className="text-xl"
        icon={<Icon icon="chevronRight" />}
        link={{
          link_type: LinkType.Document,
          type: "blog_post",
          lang: localeIso,
          uid
        }}
      >
        {t("global.readMore")}
      </Link>
    </SectionContainer>
  );
};
