import { PatchesProvider } from "@openpatch/patches";
import "typeface-rubik";
import "typeface-ubuntu-mono";
import { Link } from "../components/Link";

function MyApp({ Component, pageProps }) {
  return (
    <PatchesProvider linkComponent={Link}>
      <Component {...pageProps} />
    </PatchesProvider>
  );
}

export default MyApp;
