import React from "react";
import Quiz from "react-quiz-component";
import quiz from "./quizContent";
import Location from "./Local";

import { Heading, Box, Paragraph } from "grommet";

const renderCustomResultPage = (obj) => {
  if (obj.totalPoints === obj.correctPoints) {
    return (
      <div>
        <Heading size="small" color="#8F1701" margin={{ bottom: "small" }}>
          Go out when necessary, but exercise caution.
        </Heading>
        <Paragraph fill={true} size="large" textAlign="center">
          According to your answers, you are not displaying any symptoms of
          COVID-19. Please utilize a face covering and practice social
          distancing. Wash your hands frequently and avoid touching your face.
        </Paragraph>
      </div>
    );
  } else {
    return (
      <div>
        <Heading size="small" color="#8F1701" margin={{ bottom: "small" }}>
          Stay home.
        </Heading>
        <Paragraph fill={true} size="large" textAlign="center">
          According to your answers, you are either displaying symptoms of
          COVID-19, have been in contact with someone who has tested positive
          for COVID-19, or you do not have an adequate face covering. It is
          recommended that you stay home.
        </Paragraph>
      </div>
    );
  }
};

export default function UserQuiz() {
  return (
    <div>
      <Box
        background="light-2"
        gridArea="info"
        align="center"
        margin={{ bottom: "large" }}
      >
        <Box margin={{ bottom: "large" }} width="xlarge">
          <Location />
        </Box>
        <Heading size="medium" color="#8F1701" margin={{ bottom: "small" }}>
          Should I Go Out?
        </Heading>
        <Box width="xlarge">
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
          >
            If you are unsure whether or not you should feel comfortable leaving
            your home, take our "Should I Go Out?" quiz by clicking below, and
            receive a recommendation based on CDC guidelines. If you do choose
            to leave your house, make sure to use precautions such as wearing a
            cloth face mask and implementing social distancing measures.
          </Paragraph>
          <Paragraph
            fill={true}
            margin={{ left: "xlarge", right: "xlarge" }}
            size="large"
          >
            If you believe you could be sick with COVID-19 symptoms, please stay
            home and contact your physician.
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
