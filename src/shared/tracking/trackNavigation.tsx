import { useRouter } from "next/router";
import { FC, useEffect } from "react";

import {
  DoubleclickTrackers,
  facebookPixelTrack,
  twitterPixelTrack
} from "src/shared/tracking/trackers";

export const TrackNavigation: FC = () => {
  const { events } = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.PAGE_NAVIGATED = true;
      facebookPixelTrack();
      twitterPixelTrack();
    };

    events.on("routeChangeComplete", handleRouteChange);

    return () => {
      events.off("routeChangeComplete", handleRouteChange);
    };
  }, [events]);

  return <DoubleclickTrackers />;
};
