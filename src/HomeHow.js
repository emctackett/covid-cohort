import React from "react";
import { Heading, Paragraph } from "grommet";

const How = () => {
  return (
    <div align="center">
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
        COVIDCoach aims to be a source of information where users can learn more
        about COVID-19, how they can stay safe and healthy, and be reminded of
        keeping in contact with friends and family. Providing unbiased, factual
        information is important in this time of crisis.
      </Paragraph>
    </div>
  );
};

export default function HowCovid() {
  return <How />;
}
