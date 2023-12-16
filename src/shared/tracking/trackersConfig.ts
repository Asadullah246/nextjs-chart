const GTM_CONTAINER_ID = "GTM-KWPPTC5";
export const FBP_TRACKING_ID = "674580265976206";
export const TP_TRACKING_ID = "ntmnn";
export const DOUBLECLICK_ID = "6679905";
export const GENERIC_DOUBLECLICK_TYPE_AND_CAT = "genera";

export const FACEBOOK_PIXEL_SCRIPT = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FBP_TRACKING_ID}');
fbq('track', 'PageView');
`;

export const TWITTER_PIXEL_SCRIPT = `
twttr.conversion.trackPid("${TP_TRACKING_ID}",
{ tw_sale_amount: 0, tw_order_quantity: 0 });
`;

export const GOOGLE_TAG_MANAGER_SCRIPT = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://analytics.truewealth.ch/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
`;
