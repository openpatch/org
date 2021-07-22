import { Footer, Logo, Nav, TextLink } from "@openpatch/patches";
import { FC, Fragment } from "react";

export type NavLayoutProps = {};

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
            label: "About",
            href: "/about",
          },
          {
            label: "Blog",
            href: "/blog",
          },
          {
            label: "Discord",
            href: "https://discord.gg/dCMM4kV",
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
