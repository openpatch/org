import { PatchesProvider } from "@openpatch/patches";
import { DefaultSeo } from "next-seo";
import "typeface-rubik";
import "typeface-ubuntu-mono";
import { Link } from "../components/Link";

function MyApp({ Component, pageProps }) {
  return (
    <PatchesProvider linkComponent={Link}>
      <DefaultSeo
        titleTemplate="OpenPatch | %s"
        defaultTitle="OpenPatch"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://openpatch.org",
          site_name: "OpenPatch",
          images: [
            {
              url: "https://og.openpatch.org/**OpenPatch**%3Cbr%20%2F%3E%20Assessment%20of%20Programming%20Competencies.png?md=1&fontSize=100px",
              alt: "OpenPatch",
            },
          ],
        }}
        twitter={{
          site: "@openpatchorg",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </PatchesProvider>
  );
}

export default MyApp;
