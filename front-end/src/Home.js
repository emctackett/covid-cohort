import React from "react";
import banner from "./stayhome.jpg";
import {
  Anchor,
  Heading,
  Grommet,
  Grid,
  Main,
  Box,
  Paragraph,
  Button,
  WorldMap,
} from "grommet";
import { grommet } from "grommet/themes";

const GridLayout = () => {
  return (
    <div>
      <Box background="light-2" gridArea="info" align="center">
        {/* <img src={banner} width="100%" height="auto" /> */}
        <div>
          <WorldMap color="#8e1600" height="auto" />
        </div>
        <Heading>Stay home, stay safe.</Heading>
        <Heading level="3" margin="none">
          What is COVID-19?
        </Heading>
        <br />
        <Paragraph
          fill="true"
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
          textAlign="center"
        >
          <Anchor
            href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses"
            color="#000000"
          >
            According to the World Health Organization,{" "}
          </Anchor>
          COVID-19 is the infectious disease caused by the most recently
          discovered coronavirus. This new virus and disease were unknown before
          the outbreak began in Wuhan, China, in December 2019.
        </Paragraph>
        <Heading level="3" margin={{ bottom: "none" }}>
          Who is at risk?
        </Heading>
        <br />
        <Paragraph
          fill="true"
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
          textAlign="center"
        >
          While we are still learning about how COVID-2019 affects people, older
          persons and persons with pre-existing medical conditions (such as high
          blood pressure, heart disease, lung disease, cancer or diabetes)
          appear to develop serious illness more often than others{" "}
          <Anchor
            href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses"
            color="#000000"
          >
            (World Health Organization 2020).
          </Anchor>
        </Paragraph>
        <Heading level="3" margin={{ bottom: "none" }}>
          How can COVIDCoach help?
        </Heading>
        <br />
        <Paragraph
          fill="true"
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
          textAlign="center"
        >
          COVIDCoach aims to be a source of information where users can learn
          more about COVID-19, how they can stay safe and healthy, and be
          reminded of keeping in contact with friends and family. Providing
          unbiased, factual information is important in this time of crisis.
        </Paragraph>
        <Button
          label="Learn more"
          href="/learn"
          color="#000000"
          margin="small"
        />
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

export default function Home() {
  return (
    <div>
      <MainContent />
    </div>
  );
}
