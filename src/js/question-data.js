import {Seq, Stack, List} from 'immutable';

// Set up a question
let question = new Seq({
  question: 'Question 1 for Stage 1',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 1',
<<<<<<< HEAD
      hp: 200 // Continue as needed
=======
      hp:100
      // Continue as needed
>>>>>>> 3cb9eb62df2111ab44e8cd2ad4e55602e839295b
    }),
    new Seq({
      text: 'Answer 2 for Question 1',
      hp: 100
    })
  ])
});

// Add the Question to the first stage
let questionList = new List().push(question);

// Set up a different question
question = new Seq({
  question: 'Question 2 for Stage 1',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 2',
<<<<<<< HEAD
      hp: 300 // Continue as needed
=======
      hp: 100
       // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 2'
    })
  ])
});

// Add the next question
questionList = questionList.push(question);

// Set up a different question
question = new Seq({
  question: 'Question 3 for Stage 1',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 2',
      hp: 100
       // Continue as needed
>>>>>>> 3cb9eb62df2111ab44e8cd2ad4e55602e839295b
    }),
    new Seq({
      text: 'Answer 2 for Question 2'
    })
  ])
});

// Add the next question
questionList = questionList.push(question);

// Set up a different question
question = new Seq({
  question: 'Question 3 for Stage 1',
  answers: new Seq([
    new Seq({
<<<<<<< HEAD
      text: 'Answer 1 for Question 3',
      hp: 300 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 3'
=======
      text: 'Answer 1 for Question 1',
      hp: 0  // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 1'
    })
  ])
});

// Add the Question
questionList = questionList.push(question);

// Set up a different question
question = new Seq({
  question: 'Question 2 for Stage 2',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 2',
      hp: 0
      // Continue as needed
>>>>>>> 3cb9eb62df2111ab44e8cd2ad4e55602e839295b
    }),
    new Seq({
      text: 'Answer 3 for Question 3'
    })
  ])
});

// Add the next question
questionList = questionList.push(question);

// Add the stage
let questions = new List().push(questionList.valueSeq());

// ----------------------------------------------------------
// Start a new question list for the next stage
// questionList = new List();
//
// // Set up a question
// question = new Seq({
//   question: 'Question 1 for Stage 2',
//   answers: new Seq([
//     new Seq({
//       text: 'Answer 1 for Question 1',
//       hp: 0 // Continue as needed
//     }),
//     new Seq({
//       text: 'Answer 2 for Question 1'
//     })
//   ])
// });
//
// // Add the Question
// questionList = questionList.push(question);
//
// // Set up a different question
// question = new Seq({
//   question: 'Question 2 for Stage 2',
//   answers: new Seq([
//     new Seq({
//       text: 'Answer 1 for Question 2',
//       hp: 0 // Continue as needed
//     }),
//     new Seq({
//       text: 'Answer 2 for Question 2'
//     })
//   ])
// });
//
// questionList = questionList.push(question);

// Add the stage
questions = questions.push(questionList.valueSeq());

// Make the export a stack
const questionData = new Stack(questions);

export default questionData;
