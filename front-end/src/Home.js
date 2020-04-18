import React from "react";
import banner from "./stayhome.jpg";
import {
  Heading,
  Grommet,
  Grid,
  Main,
  Box,
  Paragraph,
  Button,
  WorldMap,
} from "grommet";
import { grommet } from "grommet/themes";

const GridLayout = () => {
  return (
    <div>
      <Box background="light-2" gridArea="info" align="center">
        {/* <img src={banner} width="100%" height="auto" /> */}
        <div>
          <WorldMap color="#8e1600" height="auto" />
        </div>
        <Heading>Stay home, stay safe.</Heading>
        <Button
          label="Learn more"
          href="/learn"
          color="#000000"
          margin="small"
        />
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
