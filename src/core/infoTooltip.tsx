import Tippy from "@tippyjs/react";
import { Button } from "@true-wealth/ui-core";
import React, { FC, ReactNode } from "react";

import { Icon } from "src/core/icon";

interface Props {
  tooltip: ReactNode;
}

export const InfoTooltip: FC<Props> = ({ tooltip }) => (
  <Tippy content={tooltip}>
    <span>
      <Button look="link" aria-label="Tooltip" className="!cursor-help relative top-px">
        <Icon icon="info" className="!w-[13px] !h-[13px] mx-1" />
      </Button>
    </span>
  </Tippy>
);
