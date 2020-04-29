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
          What are the Symptoms of COVID-19?
        </Heading>
        <br />
        <Box alignContent="start" width="xlarge">
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
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
        </Box>
        <Box
          alignContent="start"
          width="xlarge"
          pad={{ left: "large", right: "large" }}
          alignSelf="center"
        >
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
          >
          ‣	Fever
          <br />
          <br />
          ‣	Cough
          <br />
          <br />
          ‣	Shortness of breath
          <br />
          <br />
          ‣	Chills
          <br />
          <br />
          ‣	Muscle pain
          <br />
          <br />
          ‣	Headache
          <br />
          <br />
          ‣	Sore throat
          <br />
          <br />
          ‣	Sudden loss of taste or smell
          <br />
          <br />
          </Paragraph>
        </Box>
        <Heading size="large" color="#8F1701" level="3" margin={{ bottom: "none" }}>
          What to do if You Have Symptoms
        </Heading>
        <br />
        <Box alignContent="start" width="xlarge">
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
          >
            <Anchor
              href="https://www.cdc.gov/coronavirus"
              color="#000000"
            >
              According to the CDC
            </Anchor>
            {" "}, most people will be able to recover from COVID-19 at home.  Follow the below guidelines if you experience symptoms.
          </Paragraph>
        </Box>
        <Box
          alignContent="start"
          width="xlarge"
          pad={{ left: "large", right: "large" }}
          alignSelf="center"
        >
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
        >
              ‣	Stay at home if you are sick. Leave your home only to seek medical attention, if necessary.
              <br />
              <br />
              ‣	Avoid public transportation.
              <br />
              <br />
              ‣	Wear a face covering if you  must leave your home.
              <br />
              <br />
              ‣	Separate yourself from other people and pets that live within your home.
              <br />
              <br />
              ‣	Cover coughs and sneezes.
              <br />
              <br />
              ‣	Wash your hands often.
              <br />
              <br />
              ‣	Do not share personal household items.
              <br />
              <br />
              ‣	Monitor and track your symptoms.
              <br />
              <br />
              ‣	Stay hydrated.
              <br />
              <br />
              ‣	Sanitize frequently touched surfaces in your home daily.
              <br />
              <br />
              ‣	If you need medical attention, call ahead.
              <br />
              <br />
          </Paragraph>
        </Box>
        <Heading size="large" color="#8F1701" level="3" margin={{ bottom: "none" }}>
          When to Seek Medical Attention
        </Heading>
        <br />
        <Box alignContent="start" width="xlarge">
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
          >
            If you are unsure whether or not you need medical attention, call your primary care provider or local health department.{" "}
            <Anchor
              href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
              color="#000000"
            >
              Per the CDC,
            </Anchor>{" "}seek medical attention immediately if you experience any of the below symptoms.
          </Paragraph>
        </Box>
        <Box
          alignContent="start"
          width="xlarge"
          pad={{ left: "large", right: "large" }}
          alignSelf="center"
        >
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
        >
            ‣	Trouble breathing
            <br />
            <br />
            ‣	Persistent pain or pressure in the chest
            <br />
            <br />
            ‣	Confusion or lethargy
            <br />
            <br />
            ‣	Bluish lips or face
            <br />
            <br />
            ‣	<b>Call 911 if you are having a medical emergency</b>
            <br />
            <br />
          </Paragraph>
        </Box>
        <Box justify="center" pad="large" align="center">
          <Heading size="large" level="3" margin="none" color="#8F1701">
            Learn More About COVID-19
          </Heading>
          <Box pad="large" align="center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BtN-goy9VOY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Paragraph
              fill={true}
              margin={{ left: "xlarge", right: "xlarge" }}
              size="large"
            >
              Citations for the information presented in this video are presented{" "}
              <Anchor
                href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
                color="#000000"
              >here.</Anchor>{" "}
            </Paragraph>
          </Box>
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
