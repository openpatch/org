import Script from "next/script";

const isProduction = process.env.NODE_ENV === "production";

const PlausibleScript = () => {
  return (
    <>
      {isProduction && (
        <>
          <Script
            strategy="lazyOnload"
            data-domain={
              process.env.NEXT_PUBLIC_URL || process.env.NEXT_PUBLIC_VERCEL_URL
            }
            src="https://plausible.io/js/plausible.js"
          />
          <Script strategy="lazyOnload" id="plausible-script">
            {`
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `}
          </Script>
        </>
      )}
    </>
  );
};

export default PlausibleScript;

// https://plausible.io/docs/custom-event-goals
export const logEvent = (eventName, ...rest) => {
  //@ts-ignore
  return window.plausible?.(eventName, ...rest);
};
