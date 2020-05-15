import React from "react";
import Navigation from "./Navbar";
import SimpleFooter from "./Footer";

import RemindForm from "./RemindForm";

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
	
	<br />	

	<b><i> During these socially distant times, it is very 
	 important to stay connected with friends and family. </i></b>
	
	<br />
	<br />

	<Heading size="large" level="3" margin="none" color="#8F1701">
            How Can I Stay Connected?
        </Heading>
        <Box alignContent="start" width="xlarge">
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
        >
	{/* content here */}

	</Paragraph>
	</Box>
	<Heading size="large" color="#8F1701" level="3" margin={{ bottom: "none" }}>
            Set Reminders
        </Heading>
    	<Box alignContent="start" width="xlarge">
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
          >
	< RemindForm  />

	{/* call API / reminder form here */}

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
