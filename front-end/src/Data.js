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
  WorldMap,
} from "grommet";
import { grommet } from "grommet/themes";

const GridLayout = () => {
  return (
    <div>
      <Box background="light-2" gridArea="info" align="center">
        <div>
          <WorldMap color="#8e1600" height="100%" />
        </div>
        <Heading>Stay home, stay safe.</Heading>
        <Heading size="xlarge">XXX,XXX,XXX</Heading>
        <Heading level="3" margin="none">
          Global cases of COVID-19
        </Heading>
        <br />
=
        <br />
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
          textAlign="center"
        >
          Data on this page comes from {" "}
          <Anchor
            href="https://www.cdc.gov/coronavirus"
            color="#000000"
          >
            The Centers for Disease Control
          </Anchor>{" "}and
          <Anchor
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            color="#000000"
          >
            The World Health Organization
          </Anchor>
          .
        </Paragraph>
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

export default function Learn() {
  return (
    <div>
      <Navigation />
      <MainContent />
      <SimpleFooter />
    </div>
  );
}
