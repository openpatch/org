import { Footer, Logo, Nav, TextLink } from "@openpatch/patches";
import { FC, Fragment, ReactNode } from "react";

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
