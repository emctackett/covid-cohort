import React from "react";
import Quiz from 'react-quiz-component';
import quiz from './quizContent';

import {
  Heading,
  Box,
  Paragraph
} from "grommet";

const renderCustomResultPage = obj => {
  if (obj.totalPoints === obj.correctPoints) {
    return (
      <div>
        Go out!
      </div>
    )
  } else {
    return (
      <div>
        Stay home!
      </div>
    );
  }
}

export default function UserQuiz() {
  return (
    <div>
      <Box background="light-2" gridArea="info" align="center"
        margin={{bottom: "large" }}
      >
      <Heading size="medium"
        color="#8F1701"
        margin={{bottom: "small"}}
      >
        Should I Go Out?
      </Heading>
      <Box width="xlarge">
      <Paragraph
        fill={true}
        margin={{ left: "xlarge", right: "xlarge" }}
        size="large"
        textAlign="center"
      >
        If you are unsure whether or not you should feel comfortable leaving your home, take our "Should I Go Out?" quiz by clicking below, and recieve a recommendation based on CDC guidelines.  If you do choose to leave your house, make sure to use precautions such as wearing a cloth face mask and implementing social distancing measures.
        <br />
        <br />
        If you believe you could be sick with COVID-19 symptoms, please stay home and contact your physician.
      </Paragraph>
      </Box>
      <Quiz
        quiz={quiz}
        showDefaultResult={false}
        customResultPage={renderCustomResultPage}
      />
      </Box>
    </div>
  );
}
