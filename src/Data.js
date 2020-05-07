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
} from "grommet";
import { grommet } from "grommet/themes";

class StateDataMap extends Component {
  formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

	mapHandler = (event) => {
    const allStates = event.target.parentElement.children;
    const standardGray = "#D3D3D3";
    const stateName = event.target.dataset.name;

    for (let i = 0; i < allStates.length; i++) {
      allStates[i].style.fill = standardGray;
    }

    event.target.style.fill = '#8F1701'; // color selected state

    fetch("https://covidtracking.com/api/v1/states/current.json")
    .then(response => response.json())
    .then(data => {
      const stateData = data.filter(obj => obj.state === stateName);
      const caseCount = stateData[0]['positive'];
      const displayEl = document.getElementById('state-data-display');

      displayEl.textContent = `${stateName} has ${this.formatNumber(caseCount)} confirmed cases.`;
    });
	};

	render() {
		return (
			<div className="App">
				<USAMap
          onClick={this.mapHandler}
         />
			</div>
		);
	}
}

const GridLayout = () => {
  //https://blog.abelotech.com/posts/number-currency-formatting-javascript/
 const formatNumber = num => {
   return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }
  var today = new Date();
  today = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
  const [usPositives, setUsPositives] = useState(0);
  const [globalPositives, setGlobalPositives] = useState(0);

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
        <br />
        <br />
        <Paragraph
          color="#8F1701"
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
          textAlign="center"
        >
          <span id="state-data-display">Click on a state to view the current number of cases.</span>
        </Paragraph>
	<StateDataMap />
        <br />
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="medium"
          textAlign="center"
        >
          *As of {" "} {today}
        </Paragraph>
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
          </Anchor>{" "} and {" "}
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
