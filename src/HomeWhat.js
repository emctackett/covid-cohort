import React from "react";
import { Anchor, Heading, Paragraph } from "grommet";

const What = () => {
  return (
    <div align="center">
      <Heading level="3" margin="none" textAlign="center">
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
          According to the World Health Organization
        </Anchor>
        , COVID-19 is the infectious disease caused by the most recently
        discovered coronavirus.
        <br />
        This new virus and disease were unknown before
        the outbreak began in Wuhan, China, in December 2019.
      </Paragraph>
    </div>
  );
};

export default function WhatCovid() {
  return <What />;
}
