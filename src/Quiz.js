import React from "react";
import Quiz from 'react-quiz-component';
import quiz from './quizContent';

import {
  Heading,
} from "grommet";
import { grommet } from "grommet/themes";

export default function UserQuiz() {
  return (
    <div>
      <Heading>QUIZ PLACEHOLDER</Heading>
      <Quiz quiz={quiz}/>
    </div>
  );
}
