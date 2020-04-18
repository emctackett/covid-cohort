import React from "react";
import { Footer, grommet, Grommet, Text } from "grommet";

const SimpleFooter = () => (
  <Grommet theme={grommet}>
    <Footer background="light-1" justify="center" pad="small">
      <Text textAlign="center" size="small">
        Learn more about COVID-19. Support the cause.
      </Text>
    </Footer>
  </Grommet>
);

export default SimpleFooter;
