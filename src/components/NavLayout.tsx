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
      <Box mb="medium" textAlign="center">
        <Link href="https://vercel.com?utm_source=openpatch&utm_campaign=oss">
          <a>
            <Image
              src="/static/powered-by-vercel-black.svg"
              width={212}
              height={44}
            />
          </a>
        </Link>
      </Box>
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
            href: "https://twitter.com/openpatchorg",
            label: "Twitter",
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
