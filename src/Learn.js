import React from "react";
import Navigation from "./Navbar";
import SimpleFooter from "./Footer";
import ResizedIframe from "./EmbedPlayer.js";

import {Anchor, Heading, Grommet, Main, Box, Paragraph} from "grommet";
import { grommet } from "grommet/themes";

const GridLayout = () => {
  return (
    <div>
      <Box background="light-2" gridArea="info" align="center">
        <Heading margin={{ bottom: "large" }}>Stay home, stay safe.</Heading>{" "}
        <Box justify="center" pad="large" align="center">
          <Heading size="large" level="3" margin="none" color="#8F1701">
            Learn More About COVID-19
          </Heading>
          <Box pad={{ top: "small" }} align="center">
            <ResizedIframe src="https://www.youtube.com/embed/BtN-goy9VOY"/>
            <Paragraph fill={true} margin={{ left: "xlarge", right: "xlarge" }} size="large">
              Citations for the information presented in this video are presented{" "}
              <Anchor href="https://sites.google.com/view/sourcescorona" color="#000000">here.</Anchor>{" "}
            </Paragraph>
          </Box>
        </Box>
        <Heading size="large" level="3" margin={{ bottom: "0" }} color="#8F1701">
          What are the Symptoms of COVID-19?
        </Heading>
        <br />
        <Box alignContent="start" width="xlarge">
        <Paragraph fill={true} margin={{ left: "xlarge", right: "xlarge" }} size="large">
          According to the{" "}
          <Anchor href="https://www.cdc.gov/coronavirus" color="#000000">
            Centers for Disease Control and Prevention
          </Anchor>
          , the following are known symptoms of COVID-19. Symptoms can range from mild (or no symptoms) to severe ilness.
          <br /><br />
          Note that symptoms can appear up to two weeks after exposure to the virus.
        </Paragraph>
        </Box>
        <Box alignContent="start" width="xlarge" pad={{ left: "large", right: "large" }} alignSelf="center">
          <Paragraph fill={true} margin={{ left: "xlarge", right: "xlarge" }} size="large">
            <ul class="wide-spaced-list">
              <li>
                Fever
              </li>
              <li>
                Cough
              </li>
              <li>
                Shortness of breath
              </li>
              <li>
                Chills
              </li>
              <li>
                Muscle pain
              </li>
              <li>
                Headache
              </li>
              <li>
                Sore throat
              </li>
              <li>
                Sudden loss of taste or smell
              </li>
            </ul>
          </Paragraph>
        </Box>
        <Heading size="large" color="#8F1701" level="3" margin={{ bottom: "none" }}>
          What to do if You Have Symptoms
        </Heading>
        <br />
        <Box alignContent="start" width="xlarge">
          <Paragraph fill={true} margin={{ left: "xlarge", right: "xlarge" }} size="large">
            According to the{" "}
            <Anchor href="https://www.cdc.gov/coronavirus" color="#000000">
              CDC
            </Anchor>
            , most people will be able to recover from COVID-19 at home. Follow the below guidelines if you experience symptoms.
          </Paragraph>
        </Box>
        <Box alignContent="start" width="xlarge" pad={{ left: "large", right: "large" }} alignSelf="center">
        <Paragraph fill={true} margin={{ left: "xlarge", right: "xlarge" }} size="large">
            <ul class="wide-spaced-list">
              <li>
                Stay at home if you are sick; leave your home only to seek medical attention, if necessary
              </li>
              <li>
                Avoid public transportation
              </li>
              <li>
                Wear a face covering if you must leave your home
              </li>
              <li>
                Separate yourself from other people and pets that live within your home
              </li>
              <li>
                Cover coughs and sneezes
              </li>
              <li>
                Wash your hands often
              </li>
              <li>
                Do not share personal household items
              </li>
              <li>
                Monitor and track your symptoms
              </li>
              <li>
                Stay hydrated
              </li>
              <li>
                Sanitize frequently touched surfaces in your home daily
              </li>
              <li>
                If you need medical attention, call ahead
              </li>
            </ul>
          </Paragraph>
        </Box>
        <Heading size="large" color="#8F1701" level="3" margin={{ bottom: "none" }}>
          When to Seek Medical Attention
        </Heading>
        <br />
        <Box alignContent="start" width="xlarge">
          <Paragraph fill={true} margin={{ left: "xlarge", right: "xlarge" }} size="large">
            If you are unsure whether or not you need medical attention, call your primary care provider or local health department.{" "}
            <Anchor href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html" color="#000000">
              Per the CDC,
            </Anchor>{" "}seek medical attention immediately if you experience any of the below symptoms.
          </Paragraph>
        </Box>
        <Box alignContent="start" width="xlarge" pad={{ left: "large", right: "large" }} alignSelf="center">
        <Paragraph fill={true} margin={{ left: "xlarge", right: "xlarge" }} size="large">
            <ul class="wide-spaced-list">
              <li>
                Trouble breathing
              </li>
              <li>
                Persistent pain or pressure in the chest
              </li>
              <li>
                Confusion or lethargy
              </li>
              <li>
                Bluish lips or face
              </li>
              <li>
                <strong>
                  Call 911 if you are having a medical emergency
                </strong>
              </li>
            </ul>
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

export default function Learn() {
  return (
    <div>
      <Navigation />
      <MainContent />
      <SimpleFooter />
    </div>
  );
}
