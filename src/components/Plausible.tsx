import Script from "next/script";
import { Fragment } from "react";

const isProduction = process.env.NODE_ENV === "production";

const PlausibleScript = () => {
  return (
    <Fragment>
      {isProduction && (
        <Fragment>
          <Script
            strategy="lazyOnload"
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/plausible.js"
          />
          <Script strategy="lazyOnload" id="plausible-script">
            {`
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `}
          </Script>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PlausibleScript;

// https://plausible.io/docs/custom-event-goals
export const logEvent = (eventName, ...rest) => {
  //@ts-ignore
  return window.plausible?.(eventName, ...rest);
};
