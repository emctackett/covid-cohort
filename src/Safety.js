import React from "react";
import Navigation from "./Navbar";
import SimpleFooter from "./Footer";
import UserQuiz from "./Quiz";

import {
  Main,
  Heading,
  Box,
  Grommet
} from "grommet";
import { grommet } from "grommet/themes";

const MainContent = () => (
  <Grommet theme={grommet}>
    <Main pad="small" top="small">
      <Box background="light-2" gridArea="info" align="center">
      <Heading>Stay home, stay safe.</Heading>
      <UserQuiz />
      </Box>
    </Main>
  </Grommet>
);

export default function Safety() {
  return (
    <div>
      <Navigation />
      <MainContent />
      <SimpleFooter />
    </div>
  );
}
