import React from "react";
import {
  Anchor,
  Box,
  Grommet,
  Header,
  Heading,
  Nav,
  Menu,
  ResponsiveContext,
} from "grommet";
import theme from "./Theme";

const items = [
  { label: "about", href: "/about" },
  { label: "learn", href: "/learn" },
  { label: "safety", href: "/safety" },
  { label: "remind", href: "/remind" },
  { label: "help", href: "/help" },
];

const CollapsableNav = () => (
  <Grommet theme={theme}>
    <Header background="light-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        <Anchor
          color="dark-2"
          size="xxlarge"
          href={"/"}
          label={"covidcoach"}
          key={"home"}
        />
      </Box>
      <ResponsiveContext.Consumer>
        {(responsive) =>
          responsive === "small" ? (
            <Menu
              label="Navigate"
              items={[
                { label: "This is", onClick: () => {} },
                { label: "The Menu", onClick: () => {} },
                { label: "Component", onClick: () => {} },
              ]}
            />
          ) : (
            <Nav direction="row">
              {items.map((item) => (
                <Anchor
                  color="dark-2"
                  size="large"
                  href={item.href}
                  label={item.label}
                  key={item.label}
                />
              ))}
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Grommet>
);

export default function Navigation() {
  return <CollapsableNav />;
}
