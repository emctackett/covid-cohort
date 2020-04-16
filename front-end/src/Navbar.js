import React from "react";
import { Anchor, Header, Nav, Box, Grommet } from "grommet";
import theme from "./Theme";

const items = [
  { label: "About", href: "/about" },
  { label: "Learn", href: "/learn" },
  { label: "Safety", href: "/safety" },
  { label: "Remind", href: "/remind" },
];

const NavBar = () => (
  <Grommet theme={theme}>
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        <Anchor color="white" href="/">
          COVIDCoach
        </Anchor>
      </Box>
      <Nav direction="row">
        {items.map((item) => (
          <Anchor href={item.href} label={item.label} key={item.label} />
        ))}
      </Nav>
    </Header>
  </Grommet>
);

export default function Navigation() {
  return <NavBar />;
}
