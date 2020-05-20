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
  <Box alignContent="start" width="xlarge" pad={{ left: "large", right: "large" }} alignSelf="center">
  <Paragraph fill={true} margin={{ left: "xlarge", right: "xlarge" }} size="large">
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
	Set Reminders in Your Google Calendar
  </Heading>
  <br/>
  You can create reminders in your Google Calendar by signing into your Google account below.
  <br/><br/>
  <b><i>
    First sign in to your Google Account by using the Sign-In button. Then, fill out the form and
	<br/>
 	  press the submit button. Your reminder will automatically be added to your Google Calendar.</i></b>
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
