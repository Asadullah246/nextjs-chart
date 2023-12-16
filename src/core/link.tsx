import {
  FilledContentRelationshipField,
  FilledLinkToMediaField,
  FilledLinkToWebField,
  LinkField,
  LinkType
} from "@prismicio/client";
import classNames from "classnames";
import NextLink from "next/link";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";

import styles from "src/core/link.module.scss";

import { hrefResolver } from "lib/routes";
import { AllDocumentTypes } from "lib/types.generated";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  link: LinkField<AllDocumentTypes["type"]>;
  external?: boolean;
  scroll?: boolean;
  icon?: ReactNode;
  locale?: string;
  iconPosition?: "left" | "right";
}

export const Link: FC<LinkProps> = ({
  children,
  link,
  scroll,
  icon,
  locale,
  iconPosition = "right",
  className: initialClassName,
  external: initialExternal,
  ...rest
}) => {
  const isExternal =
    initialExternal !== undefined
      ? initialExternal
      : isWebLink(link) && link.url.includes("www.truewealth.ch")
        ? false
        : true;
  const hasIcon = !!icon;
  const className = classNames(styles.link, initialClassName, {
    [styles.iconLeft]: hasIcon && iconPosition === "left",
    [styles.iconRight]: hasIcon && iconPosition === "right",
    [styles.icon]: hasIcon
  });

  if (isDocumentLink(link)) {
    return (
      <NextLink
        href={hrefResolver(link)}
        scroll={scroll}
        locale={locale}
        className={className}
        {...rest}
      >
        {icon}
        <span>{children}</span>
      </NextLink>
    );
  } else if (link.link_type === LinkType.Any) {
    return (
      <span className={className} {...rest}>
        {icon}
        <span>{children}</span>
      </span>
    );
  } else if (isWebLink(link) || isMediaLink(link)) {
    return (
      <a
        href={link.url}
        className={className}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {icon}
        <span>{children}</span>
      </a>
    );
  }

  return null;
};

const isWebLink = (link: LinkField<AllDocumentTypes["type"]>): link is FilledLinkToWebField =>
  link.link_type === LinkType.Web;

const isMediaLink = (link: LinkField<AllDocumentTypes["type"]>): link is FilledLinkToMediaField =>
  link.link_type === LinkType.Media;

const isDocumentLink = (
  link: LinkField<AllDocumentTypes["type"]>
): link is FilledContentRelationshipField<AllDocumentTypes["type"]> =>
  link.link_type === LinkType.Document;
