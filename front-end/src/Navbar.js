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
    <Header
      background="#FFFFFF"
      pad="small"
      border={{ side: "bottom", size: "small", color: "#000000" }}
    >
      <Box direction="row" align="center" gap="small">
        <Anchor
          margin={{ left: "medium" }}
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
                  margin={{ left: "small", right: "medium" }}
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
