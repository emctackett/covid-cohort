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
        <Box alignContent="start" width="xlarge">
	<Paragraph
		fill={true}
		margin={{ left: "xlarge", right: "xlarge" }}
		size="large"
		color="#8F1701"
	>	
		<b>"COVID-19 is thought to spread mainly through close contact from 
		person-to-person in respitory droplets from someone who is infected."
	<br />
	<br />
		-CDC </b>
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
            According to the Centers for Disease Control and Prevention,{" "}
          </Anchor>
          the following are some guidelines you can follow to avoid contracting COVID-19
        </Paragraph>
	</Box>
	<b><i>It is important to note that one can have COVID-19, be contagious, 
		and feel no symptoms.</i></b> 
        <Box alignContent="start" width="xlarge">
	<Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="medium"
          >
		<br />
            	• <b> The best way to prevent getting COVD-19 is to avoid being exposed 
		to the virus.</b> 
		<br /> In other words, stay home and stay safe.
		<br />
		<br />
		• Wash your hands often with soap and water for at least 20 seconds.
		<br />
		<br />
		• If you do not have access to soap and water, use a hand sanitizer 
		that contains at least 60% alcohol.
		<br />
		<br />
		• Avoid touching your face, especially your eyes, nose, and mouth, 
		with unwashed hands.
		<br />
		<br />
		• Avoid close contact with people who are sick.
		<br />
		<br />
		• Keep distance from others.
		<br />
		<br />
		• Cover you mouth and nose with a face cover / mask when around others.
		<br />
		<br />
		• Clean and disinfect frequently touched surfaces daily. 
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
            size="medium"
          >
		• Stay at least 6 feet from other people.
		<br />
		<br />
		• Do not gather in groups.
		<br />
		<br />
		• Stay out of crowded places and avoid mass gatherings.
		<br />
		<br />
		• Stay home when possible.  
          </Paragraph>
	  <Paragraph
	    fill={true}
	    margin={{ left: "xlarge", right: "xlarge" }}
	    size="xlarge"
	    color="#8F1701"
	  >
		<b>Tips For Social Distancing</b>
	  </Paragraph>
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="medium"
          >
		• For medicine, consider using a mail-order service. Ask your pharmacist
		about the available options. 
		<br />
		<br />
		• For groceries, consider a delivery service or a curbside pick up.
		<br />
		<br />
		• When you have to go out, cover your nose and mouth with a face cover / mask.
		<br />
		<br />
		• Work from home when possible.
		<br />
		<br />
		• If possible, avoid public transportation and ridesharing
		<br />
		<br />
		• If you are a student, talk to your school about digital / distance learning.
		<br />
		<br />
		• <b>Most importantly, stay connected while staying away.</b>
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
