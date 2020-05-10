import React from "react";
import { Heading, Grommet, Main, Box, Button, WorldMap } from "grommet";
import { grommet } from "grommet/themes";
import WhatCovid from "./HomeWhat";
import HowCovid from "./HomeHow";

const GridLayout = () => {
  return (
    <div>
      <Box background="light-2" gridArea="info" align="center">
        <div>
          <WorldMap color="#8e1600" height="auto" />
        </div>
        <Heading>Stay home, stay safe.</Heading>
        <WhatCovid />
        <HowCovid />
        <div>
          <Button
            label="Learn more"
            href="/learn"
            color="#000000"
            margin="small"
          />
        </div>
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

export default function Home() {
  return (
    <div>
      <MainContent />
    </div>
  );
}
