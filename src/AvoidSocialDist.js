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
        <ul class="wide-spaced-list">
          <li>
            For medicine, consider using a mail-order service; ask your pharmacist about the available options
          </li>
          <li>
            For groceries, consider a delivery service or a curbside pick up
          </li>
          <li>
            When you have to go out, cover your nose and mouth with a face cover or mask
          </li>
          <li>
            Work from home when possible
          </li>
          <li>
            If possible, avoid public transportation and ridesharing
          </li>
          <li>
            If you are a student, talk to your school about digital / distance learning
          </li>
          <li>
            <strong>
              Most importantly, stay connected while staying away
            </strong>
          </li>
        </ul>
      </Paragraph>
    </div>
  );
};

export default TipsSocialDist;
