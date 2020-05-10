const quiz = {
  quizSynopsis: "Answer seven simple questions to see your recommendation.",
  questions: [
    {
      question:
        "In the past 48 hours, have you had a fever of 100.4° or above?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Yes", "No"],
      correctAnswer: "2",
      point: "10",
    },
    {
      question: "Are you short of breath?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Yes", "No"],
      correctAnswer: "2",
      point: "10",
    },
    {
      question: "Do you have a cough?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Yes", "No"],
      correctAnswer: "2",
      point: "10",
    },
    {
      question: "Are you experiencing chills or shaking?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Yes", "No"],
      correctAnswer: "2",
      point: "10",
    },
    {
      question:
        "Are you experiencing any of the following: muscle pain, headache, sore throat, loss of taste or smell?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Yes", "No"],
      correctAnswer: "2",
      point: "10",
    },
    {
      question:
        "In the past two weeks, have you been in contact with someone that you know has been diagnosed with COVID-19?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Yes", "No"],
      correctAnswer: "2",
      point: "10",
    },
    {
      question: "Will you wear a cloth face covering while out?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Yes", "No"],
      correctAnswer: "1",
      point: "10",
    },
  ],
};

export default quiz;
