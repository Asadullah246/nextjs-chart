/* eslint-disable jsx-a11y/alt-text,  @next/next/no-img-element */
import Script from "next/script";
import { FC, memo, useContext, useEffect, useState } from "react";

import { PagePropsContext } from "src/shared/pageContext";
import {
  DOUBLECLICK_ID,
  FACEBOOK_PIXEL_SCRIPT,
  FBP_TRACKING_ID,
  GENERIC_DOUBLECLICK_TYPE_AND_CAT,
  GOOGLE_TAG_MANAGER_SCRIPT,
  TP_TRACKING_ID,
  TWITTER_PIXEL_SCRIPT
} from "src/shared/tracking/trackersConfig";

const GoogleTagManager: FC = () => (
  <Script
    id="googleTagManager"
    dangerouslySetInnerHTML={{
      __html: GOOGLE_TAG_MANAGER_SCRIPT
    }}
  />
);

const FacebookPixel: FC = () => (
  <>
    <Script
      id="facebookPixel"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: FACEBOOK_PIXEL_SCRIPT
      }}
    />
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${FBP_TRACKING_ID}&ev=PageView&noscript=1`}
      />
    </noscript>
  </>
);

const TwitterPixel: FC = () => (
  <>
    <Script src="//static.ads-twitter.com/oct.js" strategy="afterInteractive" />
    <Script
      id="twitterPixel"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: TWITTER_PIXEL_SCRIPT
      }}
    />
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        alt=""
        src={`https://analytics.twitter.com/i/adsct?txn_id=${TP_TRACKING_ID}&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0`}
      />
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        alt=""
        src={`//t.co/i/adsct?txn_id=${TP_TRACKING_ID}&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0`}
      />
    </noscript>
  </>
);

/* We use "memo" to avoid multiple trackings of a page visit. While at the moment "PagePropsContext" that is used to
 * extract "type" and "cat" values in <DoubleclickTrackers /> component below gets updated only once per route change,
 * that might not always be the case. "memo" will then rerender the component (and thus, track a page visit) only if
 * values of "type" or "cat" have changed. */

// eslint-disable-next-line react/display-name
const DoubleClickTracker: FC<{ type: string; cat: string }> = memo(({ type, cat }) => {
  const path = `https://${DOUBLECLICK_ID}.fls.doubleclick.net/activityi`;
  const randomOrd = (Math.random() * 10000000000000).toString();
  const url = `${path};src=${DOUBLECLICK_ID};type=${type};cat=${cat};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=${randomOrd}?`;
  const style = { display: "none" };
  return <iframe src={url} width="1" height="1" frameBorder="0" style={style} />;
});

export const ExternalTrackers: FC = () => (
  <>
    <GoogleTagManager />
    <FacebookPixel />
    <TwitterPixel />
  </>
);

export const DoubleclickTrackers: FC = () => {
  const { doc } = useContext(PagePropsContext);
  const [mounted, setMounted] = useState(false);
  // @ts-ignore
  const type = doc?.data.doubleclick_type;
  // @ts-ignore
  const cat = doc?.data.doubleclick_cat;
  const docUid = doc?.uid;

  useEffect(() => {
    setMounted(true);
  }, []);

  /* We use a key prop on <DoubleClickTracker /> components below to guarantee a render every time
   * "docUid" (unique per page / locale) changes. */

  return mounted && type && cat ? (
    <>
      <DoubleClickTracker key={docUid + "_track_per_page"} type={type} cat={cat} />
      <DoubleClickTracker
        key={docUid + "_track_generic"}
        type={GENERIC_DOUBLECLICK_TYPE_AND_CAT}
        cat={GENERIC_DOUBLECLICK_TYPE_AND_CAT}
      />
    </>
  ) : null;
};

export const facebookPixelTrack = () =>
  typeof window.fbq === "function" && window.fbq("track", "PageView");

export const twitterPixelTrack = () =>
  typeof window.twttr?.conversion?.trackPid === "function" &&
  window.twttr.conversion.trackPid(`${TP_TRACKING_ID}`, {
    tw_sale_amount: 0,
    tw_order_quantity: 0
  });
