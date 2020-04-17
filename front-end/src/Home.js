import React from "react";

import { Grommet, Header, Main, Text } from "grommet";
import { grommet } from "grommet/themes";

const MainContent = () => (
  <Grommet theme={grommet}>
    <Header background="dark-1" pad="xxsmall"></Header>
    <Main pad="small">
      I am Main! Main is a good place to place your content.
    </Main>
  </Grommet>
);

export default function Home() {
  return (
    <div>
      <MainContent />
    </div>
  );
}
