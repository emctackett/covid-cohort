import React from "react";
import { Paragraph } from "grommet";

const TipsSocialDist = () => {
  return (
    <div>
      <Paragraph
        fill={true}
        margin={{ left: "xlarge", right: "xlarge" }}
        size="xlarge"
        color="#8F1701"
      >
        <div align="center">
          <b>Tips For Social Distancing</b>
        </div>
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
        • When you have to go out, cover your nose and mouth with a face cover /
        mask.
        <br />
        <br />
        • Work from home when possible.
        <br />
        <br />
        • If possible, avoid public transportation and ridesharing
        <br />
        <br />
        • If you are a student, talk to your school about digital / distance
        learning.
        <br />
        <br />• <b>Most importantly, stay connected while staying away.</b>
      </Paragraph>
    </div>
  );
};

export default TipsSocialDist;
