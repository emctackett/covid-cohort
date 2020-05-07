import React from "react";
import Navigation from "./Navbar";
import SimpleFooter from "./Footer";
import Quiz from "./Quiz";

import {
  Anchor,
  Heading,
  Grommet,
  Main,
  Box,
  Paragraph,
} from "grommet";
import { grommet } from "grommet/themes";

const MainContent = () => (
  <Grommet theme={grommet}>
    <Main pad="small" top="small">
      <Quiz />
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
