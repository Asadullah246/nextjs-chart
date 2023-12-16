import classNames from "classnames";
import React, { FC, useCallback, useEffect, useState } from "react";

import iFrameStyles from "src/shared/iFrame.module.scss";

interface Props {
  src: string;
  title: string;
}

export const IFrame: FC<Props> = ({ src, title }) => {
  const [loaded, setLoaded] = useState(false);
  const [height, setHeight] = useState<number>();
  const onLoad = useCallback(() => setLoaded(true), []);
  const onMessage = useCallback((ev: MessageEvent) => {
    const message = ev.data;
    if (message && message.type === "resize") {
      setHeight(message.payload.height - 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, [onMessage]);

  return (
    <iframe
      title={title}
      loading="lazy"
      onLoad={onLoad}
      className={classNames(iFrameStyles.iframe, {
        [iFrameStyles.loaded]: loaded
      })}
      src={src}
      frameBorder="0"
      scrolling="no"
      sandbox="allow-scripts allow-same-origin allow-top-navigation"
      style={{ height }}
    />
  );
};
