import React from "react";
import Navigation from "./Navbar";
import SimpleFooter from "./Footer";

import { Heading, Grommet, Main, Box, Paragraph } from "grommet";
import { grommet } from "grommet/themes";

const GridLayout = () => {
  return (
    <div>
      <Box background="light-2" gridArea="info" align="center">
        <Heading margin={{ bottom: "large" }}>Stay home, stay safe.</Heading>{" "}
        <br />
        <Heading size="large" level="3" margin="none" color="#8F1701">
          What is COVIDCoach?
        </Heading>
        <Box
          alignContent="start"
          width="xlarge"
          pad={{ left: "large", right: "large" }}
          alignSelf="center"
          margin={{ bottom: "large" }}
        >
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
          >
            COVIDCoach is a website to keep you up to date on the latest
            COVID-19 statistics in the United States, as well as to give you
            guidance on how to stay safe during the pandemic.
          </Paragraph>
        </Box>
        <Heading size="large" level="3" margin="none" color="#8F1701">
          Why was COVIDCoach created?
        </Heading>
        <Box
          alignContent="start"
          width="xlarge"
          pad={{ left: "large", right: "large" }}
          alignSelf="center"
          margin={{ bottom: "large" }}
        >
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
          >
            The website was created as a project for Oregon State University's
            CS361 (Software Engineering I) course.
          </Paragraph>
        </Box>
        <Heading size="large" level="3" margin="none" color="#8F1701">
          Why COVIDCoach?
        </Heading>
        <Box
          alignContent="start"
          width="xlarge"
          pad={{ left: "large", right: "large" }}
          alignSelf="center"
          margin={{ bottom: "large" }}
        >
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
          >
            We wanted to create an application that is a one-stop source of
            information for people while relying on medical, non-partisan
            sources. The COVID-19 pandemic is a unique situation for everyone,
            and we hope that this application may help users look at the
            pandemic factually.
          </Paragraph>
        </Box>
        <Heading size="large" level="3" margin="none" color="#8F1701">
          What can I do?
        </Heading>
        <Box
          alignContent="start"
          width="xlarge"
          pad={{ left: "large", right: "large" }}
          alignSelf="center"
          margin={{ bottom: "large" }}
        >
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
          >
            The best way to help is to reduce outings and gatherings of large
            numbers of people. Plan your trips to the grocery and other
            essential businesses ahead of time to reduce the amount of time you
            are surrounded by other people. Limiting contact is the best way to
            prevent sickness from spreading.
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

export default function Remind() {
  return (
    <div>
      <Navigation />
      <MainContent />
      <SimpleFooter />
    </div>
  );
}
