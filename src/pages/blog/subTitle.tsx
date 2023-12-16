import { FC } from "react";

import { useTranslation } from "src/shared/translations";

import { AuthorsDocument, BlogPostDocument } from "lib/types.generated";
import { swissFormattedDate } from "lib/utils";

export const SubTitle: FC<{
  author: AuthorsDocument | null | undefined;
  post: BlogPostDocument;
}> = ({ author, post }) => {
  const { publishing_date: publishingDate, guests } = post.data;
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 text-sm text-dark-100 font-bold">
      <div className="flex flex-wrap divide-light-300 divide-x leading-none">
        {publishingDate && (
          <div className="pr-3">{swissFormattedDate(new Date(publishingDate))}</div>
        )}
        {author && <div className="px-3">{author.data.name}</div>}
      </div>
      {guests.length > 0 ? (
        <div>
          {guests.length === 1 ? t("blog.guest") : t("blog.guests")}
          {guests.map((guest) => guest.name).join(", ")}
        </div>
      ) : null}
    </div>
  );
};
