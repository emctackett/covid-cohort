import React from "react";
import { Anchor, Header, Nav, Box, Grommet } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const items = [
  { label: "About", href: "#" },
  { label: "Learn", href: "#" },
  { label: "Safety", href: "#" },
  { label: "Remind", href: "#" },
];

const NavBar = () => (
  <Grommet theme={theme}>
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        <Anchor color="white" href="#">
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

export default function App() {
  return <NavBar />;
}
