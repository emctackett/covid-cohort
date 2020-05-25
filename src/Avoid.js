import React from "react";
import Navigation from "./Navbar";
import SimpleFooter from "./Footer";

import { Anchor, Heading, Grommet, Main, Box, Paragraph } from "grommet";
import { grommet } from "grommet/themes";
import TipsSocialDist from "./AvoidSocialDist";

const GridLayout = () => {
  return (
    <div>
      <Box background="light-2" gridArea="info" align="center">
        <Heading margin={{ bottom: "large" }}>Stay home, stay safe.</Heading>{" "}
        <Box alignContent="start" width="xlarge">
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
            color="#8F1701"
          >
            <blockquote>
              <p>"COVID-19 is thought to spread mainly through close contact from
              person-to-person in respiratory droplets from someone who is
              infected."</p>
              <footer>-CDC</footer>
            </blockquote>
            <br />
          </Paragraph>
        </Box>
        <Heading size="large" level="3" margin="none" color="#8F1701">
          How Do I Avoid COVID-19?
        </Heading>
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
              According to the Centers for Disease Control and Prevention
            </Anchor>
            , the following are some guidelines you can follow to avoid
            contracting COVID-19
          </Paragraph>
        </Box>
        <strong>
          <em>
            It is important to note that one can have COVID-19, be contagious,
            and feel no symptoms.
          </em>
        </strong>
        <Box alignContent="start" width="xlarge">
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="medium"
          >
            <ul class="wide-spaced-list">
              <li>
                <strong>
                  The best way to prevent getting COVD-19 is to avoid being exposed
                  to the virus;
                </strong> in other words, stay home and stay safe.
              </li>
              <li>
                Wash your hands often with soap and water for at least 20 seconds
              </li>
              <li>
                If you do not have access to soap and water, use a hand sanitizer that contains at least 60% alcohol
              </li>
              <li>
                Avoid touching your face, especially your eyes, nose, and mouth, with unwashed hands
              </li>
              <li>
                Avoid close contact with people who are sick
              </li>
              <li>
                Keep distance from others
              </li>
              <li>
                Cover you mouth and nose with a face cover / mask when around others
              </li>
              <li>
                Clean and disinfect frequently touched surfaces daily
              </li>
            </ul>
          </Paragraph>
        </Box>

        <Heading
          size="large"
          color="#8F1701"
          level="3"
          margin={{ bottom: "none" }}
        >
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
            , limiting face-to-face contact with others is the best way to
            reduce the spread of COVID-19
          </Paragraph>

          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="medium"
          >
            <ul class="wide-spaced-list">
              <li>
                Stay at least 6 feet from other people
              </li>
              <li>
                Do not gather in groups
              </li>
              <li>
                Stay out of crowded places and avoid mass gatherings
              </li>
              <li>
                Stay home when possible
              </li>
            </ul>
          </Paragraph>
          <TipsSocialDist />
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
