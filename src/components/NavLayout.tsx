import { Box, Footer, Logo, Nav, TextLink } from "@openpatch/patches";
import { FC, Fragment, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export type NavLayoutProps = { children: ReactNode };

export const NavLayout: FC<NavLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Nav
        logo={
          <TextLink href="/" title="Homepage">
            <Logo height="40px" width="40px" color="currentColor" />
          </TextLink>
        }
        links={[
          {
            label: "Projects",
            href: "/projects",
          },
          {
            label: "Team",
            href: "/team",
          },
          {
            label: "Matrix (Chat)",
            href: "https://matrix.to/#/#openpatch:matrix.org",
          },
        ]}
      />
      {children}
      <Footer
        links={[
          {
            href: "mailto:contact@openpatch.org",
            label: "Contact",
          },
          {
            href: "/imprint",
            label: "Imprint",
          },
          {
            href: "https://fosstodon.org/@openpatch",
            label: "Mastodon",
          },
          {
            href: "https://matrix.to/#/#openpatch:matrix.org",
            label: "Matrix",
          },
          {
            href: "https://github.com/openpatch",
            label: "GitHub",
          },
        ]}
      ></Footer>
    </Fragment>
  );
};
