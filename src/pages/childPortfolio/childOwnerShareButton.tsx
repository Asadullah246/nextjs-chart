import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@true-wealth/ui-core";
import { FC, ReactNode } from "react";

import { Icon } from "src/core/icon";
import { useTranslation } from "src/shared/translations";

export const ChildOwnerShareButton: FC<{ label: ReactNode }> = ({ label }) => {
  const { t } = useTranslation();
  const nativeShareSupported = !!window.navigator.share;
  const url = window.location.href;
  const socialShares = [
    {
      label: t("childPortfolio.share.email"),
      url: `mailto:?subject=${t("childPortfolio.share.mail.subject")}&body=${encodeURIComponent(
        t("childPortfolio.share.mail.body", { url })
      )}`,
      icon: <Icon icon="email" />
    },
    {
      label: t("childPortfolio.share.whatsapp"),
      url: `https://web.whatsapp.com/send?text=${url}`,
      icon: <Icon icon="whatsApp" className="-mt-0.5" />
    },
    {
      label: t("childPortfolio.share.facebook"),
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: <Icon icon="facebook" />
    },
    {
      label: t("childPortfolio.share.twitter"),
      url: `https://twitter.com/intent/tweet?text=${url}`,
      icon: <Icon icon="twitter" />
    },
    {
      label: t("childPortfolio.share.linkedIn"),
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=&summary=&source=`,
      icon: <Icon icon="linkedin" className="-mt-1" />
    }
  ];
  return (
    <>
      {nativeShareSupported ? (
        <Button
          onClick={() => {
            try {
              navigator.share({
                url,
                title: t("childPortfolio.share.mail.subject"),
                text: t("childPortfolio.share.mail.body", { url })
              });
            } catch (_) {}
          }}
        >
          {label} <Icon icon="share" className="w-4 h-4" />
        </Button>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              {label} <Icon icon="share" className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {socialShares.map((socialShare) => (
              <DropdownMenuItem key={socialShare.label} asChild>
                <a
                  target="_blank"
                  href={socialShare.url}
                  rel="noopener noreferrer"
                  className="no-underline flex gap-2 items-center focus-visible:!ring-0 focus-visible:!ring-offset-0"
                >
                  {socialShare.icon} {socialShare.label}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};
