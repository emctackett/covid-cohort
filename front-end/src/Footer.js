import React from "react";
import { Footer, grommet, Grommet, Text } from "grommet";

const SimpleFooter = () => (
  <Grommet theme={grommet}>
    <Footer
      background="#FFFFFF"
      justify="center"
      pad="small"
      border={{ top: "large" }}
    >
      <Text textAlign="center" size="small">
        Support our essential workers. Stay home to keep yourself and others
        safe. Flatten the curve.
      </Text>
    </Footer>
  </Grommet>
);

export default SimpleFooter;
