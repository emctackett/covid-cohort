import React, { useState, useEffect, Component } from "react";
import Navigation from "./Navbar";
import SimpleFooter from "./Footer";
import USAMap from "react-usa-map";

import {
  Anchor,
  Heading,
  Grommet,
  Main,
  Box,
  Paragraph,
  WorldMap,
} from "grommet";
import { grommet } from "grommet/themes";

class StateDataMap extends Component {
	mapHandler = (event) => {
    const stateName = event.target.dataset.name;

    //setStateDataDisplay(stateName);
    console.log(stateName);
	};

	statesCustomConfig = () => {
		return {
			"NJ" : {
				fill: "navy",
				clickHandler: (event) => console.log('Custom handler for NJ')
			},
			"NY" : {
				fill: "#CC0000"
			}
		};
	};

	render() {
		return (
			<div className="App">
				<USAMap onClick={this.mapHandler} />
			</div>
		);
	}
}

const GridLayout = () => {
  //https://blog.abelotech.com/posts/number-currency-formatting-javascript/
 const formatNumber = num => {
   return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

  const [usPositives, setUsPositives] = useState(0);
  const [globalPositives, setGlobalPositives] = useState(0);
  const [stateDataDisplay, setStateDataDisplay] = useState("Click on a state to view the current number of cases.");

  useEffect(() => {
    fetch("http://covidtracking.com/api/us")
    .then(response => response.json())
    .then(data => setUsPositives(data[0]['positive']));

    fetch('https://coronavirus-19-api.herokuapp.com/all')
    .then(response => response.json())
    .then(data => setGlobalPositives(data.cases));
  });

  return (
    <div>
      <Box background="light-2" gridArea="info" align="center">
        <div>
          <WorldMap color="#8e1600" height="100%" />
        </div>
        <Heading>Stay home, stay safe.</Heading>
        <Heading size="xlarge"
          color="#8F1701"
          margin={{bottom: "small"}}
        >
          {formatNumber(globalPositives)}
        </Heading>
        <br />
        <Heading level="3" margin="none">
          Global cases of COVID-19
        </Heading>
        <br />

        <Heading size="large"
          color="#8F1701"
          margin={{bottom: "small"}}
        >
          {formatNumber(usPositives)}
        </Heading>
        <br />
        <Heading level="3" margin="none">
          Confirmed cases of COVID-19 in the United States
        </Heading>
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
          textAlign="center"
        >
          {stateDataDisplay}
        </Paragraph>
	<br />
	<br />
	<StateDataMap />
        <br />
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
          textAlign="center"
        >
          Data on this page comes from {" "}
          <Anchor
            href="https://www.cdc.gov/coronavirus"
            color="#000000"
          >
            The Centers for Disease Control
          </Anchor>{" "}and
          <Anchor
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            color="#000000"
          >
            The World Health Organization
          </Anchor>
          .
        </Paragraph>
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
