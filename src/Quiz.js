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
      <Box background="light-2" gridArea="info" align="center">
      <Heading size="medium"
        color="#8F1701"
        margin={{bottom: "small"}}
      >
        Should I Go Out?
      </Heading>
      <Quiz
        quiz={quiz}
        showDefaultResult={false}
        customResultPage={renderCustomResultPage}
      />
      </Box>
    </div>
  );
}
