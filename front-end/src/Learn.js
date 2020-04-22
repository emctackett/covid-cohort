import React from "react";
import Navigation from "./Navbar";
import SimpleFooter from "./Footer";

import {
  Anchor,
  Heading,
  Grommet,
  Main,
  Box,
  List,
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
        <Heading level="3" margin="none">
          What are the Symptoms of COVID-19?
        </Heading>
        <br />
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
          textAlign="center"
        >
          <Anchor
            href="https://www.cdc.gov/coronavirus"
            color="#000000"
          >
            According to the Centers for Disease Control and Prevention,{" "}
          </Anchor>
          the following are known symptoms of COVID-19. Symptoms can range from mild (or no symptoms) to severe ilness.
          <br /><br />
          Note that symptoms can appear up to two weeks after exposure to the virus.
        </Paragraph>
        <Box align="center" pad="large">
          <List
            data={[
              'Fever',
              'Cough',
              'Shortness of breath',
              'Chills',
              'Muscle pain',
              'Headache',
              'Sore throat',
              'Sudden loss of taste or smell'
            ]}
          />
        </Box>
        <Heading level="3" margin={{ bottom: "none" }}>
          What to do if You Have Symptoms
        </Heading>
        <br />
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
          textAlign="center"
        >
          <Anchor
            href="https://www.cdc.gov/coronavirus"
            color="#000000"
          >
            According to the CDC
          </Anchor>
          {" "}, most people will be able to recover from COVID-19 at home.  Follow the below guidelines if you experience symptoms.
        </Paragraph>
        <Box align="center" pad="large">
          <List
            data={[
              'Stay at home if you are sick. Leave your home only to seek medical attention, if necessary.',
              'Avoid public transportation.',
              'Wear a face covering if you  must leave your home.',
              'Separate yourself from other people and pets that live within your home.',
              'Cover coughs and sneezes.',
              'Wash your hands often.',
              'Do not share personal household items.',
              'Monitor and track your symptoms.',
              'Stay hydrated.',
              'Sanitize frequently touched surfaces in your home daily',
              'If you need medical attention, call ahead.'
            ]}
          />
        </Box>
        <Heading level="3" margin={{ bottom: "none" }}>
          When to Seek Medical Attention
        </Heading>
        <br />
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
          textAlign="center"
        >
          If you are unsure whether or not you need medical attention, call your primary care provider or local health department.{" "}
          <Anchor
            href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
            color="#000000"
          >
            Per the CDC,
          </Anchor>{" "}seek medical attention immediately if you experience any of the below symptoms.
        </Paragraph>
        <Box align="center" pad="large">
          <List
            data={[
              'Trouble breathing',
              'Persistent pain or pressure in the chest',
              'Confusion or lethargy',
              'Bluish lips or face',
              'Call 911 if you are having a medical emergency'
            ]}
          />
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
