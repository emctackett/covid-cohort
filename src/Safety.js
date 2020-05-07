import React from "react";
import Navigation from "./Navbar";
import SimpleFooter from "./Footer";
import UserQuiz from "./Quiz";

import {
  Main,
  Grommet
} from "grommet";
import { grommet } from "grommet/themes";

const MainContent = () => (
  <Grommet theme={grommet}>
    <Main pad="small" top="small">
      <UserQuiz />
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
