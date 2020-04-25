import React from "react";
import Navigation from "./Navbar";
import SimpleFooter from "./Footer";

import {
  Anchor,
  Heading,
  Grommet,
  Main,
  Box,
  Paragraph,
} from "grommet";
import { grommet } from "grommet/themes";

const GridLayout = () => {
  return (
    <div>
      <Box background="light-2" gridArea="info" align="center">
        <Heading>Stay home, stay safe.</Heading>
        <Heading size="large" level="3" margin="none" color="#8F1701">
            How Do I Avoid COVID-19?
        </Heading>
      </Box>
    </div>
  );
};

const MainContent = () => (
  <Grommet theme={grommet}>
    <Main pad="small" top="small">
      <GridLayout />
    </Main>
  </Grommet>
);

export default function Avoid() {
  return (
    <div>
      <Navigation />
      <MainContent />
      <SimpleFooter />
    </div>
  );
}