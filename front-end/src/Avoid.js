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
        <br />
        <Box alignContent="start" width="xlarge">
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
        >
          <Anchor
            href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"
            color="#000000"
          >
            According to the Centers for Disease Control and Prevention,{" "}
          </Anchor>
          the following are some guidelines you can follow to avoid contracting COVID-19
        </Paragraph>
        <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac efficitur tortor. Morbi eu
            mi sit amet quam vestibulum lacinia. Duis vel turpis non metus scelerisque eleifend in fringilla
            diam. Duis vitae quam nibh. Donec ultrices viverra arcu, id vestibulum nibh accumsan eu. Cras at
            porta urna, quis facilisis orci. Cras vitae odio iaculis felis malesuada accumsan ultrices ultricies
            ante. Vivamus commodo, risus quis iaculis ultrices, augue odio auctor velit, id rhoncus risus odio
            et ipsum.  
        </Paragraph>
        </Box>

        <Heading size="large" color="#8F1701" level="3" margin={{ bottom: "none" }}>
            Social Distancing
        </Heading>
        <br />
        <Box alignContent="start" width="xlarge">
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
          >
            <Anchor
              href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html"
              color="#000000"
            >
              According to the CDC
            </Anchor>
            {" "}, limiting face-to-face contact with others is the best way to reduce the spread of COVID-19
          </Paragraph>

          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac efficitur tortor. Morbi eu
            mi sit amet quam vestibulum lacinia. Duis vel turpis non metus scelerisque eleifend in fringilla
            diam. Duis vitae quam nibh. Donec ultrices viverra arcu, id vestibulum nibh accumsan eu. Cras at
            porta urna, quis facilisis orci. Cras vitae odio iaculis felis malesuada accumsan ultrices ultricies
            ante. Vivamus commodo, risus quis iaculis ultrices, augue odio auctor velit, id rhoncus risus odio
            et ipsum.  
          </Paragraph>
        </Box>
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