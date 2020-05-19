import React from "react";
import Navigation from "./Navbar";
import SimpleFooter from "./Footer";
import DoubleButton from "./RemindForm";

import {Heading, Grommet, Main, Box, Paragraph} from "grommet";
import { grommet } from "grommet/themes";


const GridLayout = () => {

  return (
    <div>
      <Box background="light-2" gridArea="info" align="center">
        <Heading>Stay home, stay safe.</Heading>
	<br />	
	<b><i> During these socially distant times, it is very 
	 important to stay connected with friends and family. </i></b>
	<br /><br />

	<Heading size="large" level="3" margin="none" color="#8F1701">
            How Can I Stay Connected?
  </Heading>
  <Box alignContent="start" width="xlarge">
  <Paragraph
    fill={true} margin={{ left: "xlarge", right: "xlarge" }} size="large">
	• Remember to call friends / family often to catch up and stay connected.
        <br />
        <br />
        • Social Media is a great way to stay connected with friends and family.
        <br />
        <br />
        • Zoom / Facetime and or other video chat platforms are a fantastic way to 
	have face to face time with friends and family. 
	</Paragraph>
	</Box>
  <Heading size="large" color="#8F1701" level="3" margin={{ bottom: "none" }}>
	Set Reminders
  </Heading>
  <br/>
  <b><i>To set reminders for contacting your friends and family,click the sign-in button tp login
	<br/>
 	to your gmail account and fill out the form below to add an event to your google calendar.</i></b>
  <br/>   
  < DoubleButton />
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
