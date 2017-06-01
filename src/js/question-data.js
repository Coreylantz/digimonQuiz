import {Seq, Stack, List} from 'immutable';

// Set up a question
let question = new Seq({
  question: 'Question 1 for Stage 1',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 1',
      hp: 100 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 1',
      sp: 10,
      hp: 50
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
      spd: 10, // Continue as needed
      sp: 10
    }),
    new Seq({
      text: 'Answer 2 for Question 2',
      atk: 20,
      def: 5
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
      text: 'Answer 1 for Question 3',
      int: 10,
      def: 7,
      atk: 10,
      hp: 20
       // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 3',
      hp: 20,
      sp: 5,
      atk: 5
    })
  ])
});

// Add the next question
questionList = questionList.push(question);

// Set up a different question
question = new Seq({
  question: 'Question 4 for Stage 1',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 4',
      hp: 20 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 4',
      int: 30,
      def: 50,
      spd: 60

    })
  ])
});

// Add the Question
questionList = questionList.push(question);

// Add the stage
let questions = new List().push(questionList.valueSeq());

// ----------------------------------------------------------
// Start a new question list for the next stage
questionList = new List();

// Set up a question
question = new Seq({
  question: 'Question 1 for Stage 2',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 1',
      def: 10 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 1',
      spd: 20
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
      atk: 7,
      def: 1 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 2',
      spd: 8
    })
  ])
});

questionList = questionList.push(question);

// Set up a different question
question = new Seq({
  question: 'Question 3 for Stage 2',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 3',
      int: 7 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 3',
      int: 4,
      def: 3
    })
  ])
});

questionList = questionList.push(question);

// Add the stage
questions = questions.push(questionList.valueSeq());

// ----------------------------------------------------------
// Start a new question list for the next stage
questionList = new List();

// Set up a question
question = new Seq({
  question: 'Question 1 for Stage 3',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 1',
      hp: 15, // Continue as needed
      def: 4
    }),
    new Seq({
      text: 'Answer 2 for Question 1',
      sp: 5
    })
  ])
});

// Add the Question
questionList = questionList.push(question);

// Set up a different question
question = new Seq({
  question: 'Question 2 for Stage 3',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 2',
      int: 10 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 2',
      def: 4
    })
  ])
});

questionList = questionList.push(question);

// Set up a different question
question = new Seq({
  question: 'Question 3 for Stage 3',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 3',
      hp: 20 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 3',
      sp: 3,
      def: 3,
      spd: 3
    })
  ])
});

questionList = questionList.push(question);

// Add the stage
questions = questions.push(questionList.valueSeq());

// ----------------------------------------------------------
// Start a new question list for the next stage
questionList = new List();

// Set up a question
question = new Seq({
  question: 'Question 1 for Stage 4',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 1',
      atk: 4,
      spd: 3 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 1',
      spd: 3,
      def: 4
    })
  ])
});

// Add the Question
questionList = questionList.push(question);

// Set up a different question
question = new Seq({
  question: 'Question 2 for Stage 4',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 2',
      sp: 4 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 2',
      int: 4,
      atk: 2
    })
  ])
});

questionList = questionList.push(question);

// Set up a different question
question = new Seq({
  question: 'Question 3 for Stage 4',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 3',
      hp: 15,
      sp: 4 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 3',
      int: 1,
      def: 1,
      atk: 1,
      spd: 1,
      sp: 1,
      hp:1
    })
  ])
});

questionList = questionList.push(question);

// Add the stage
questions = questions.push(questionList.valueSeq());

// Set up a different question
question = new Seq({
  question: 'Question 3 for Stage 4',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 3',
      hp: 15,
      sp: 4 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 3',
      int: 1,
      def: 1,
      atk: 1,
      spd: 1,
      sp: 1,
      hp:1
    })
  ])
});

questionList = questionList.push(question);

// Add the stage
questions = questions.push(questionList.valueSeq());

// Set up a different question
question = new Seq({
  question: 'Question 3 for Stage 4',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 3',
      hp: 15,
      sp: 4 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 3',
      int: 1,
      def: 1,
      atk: 1,
      spd: 1,
      sp: 1,
      hp:1
    })
  ])
});

questionList = questionList.push(question);

// Add the stage
questions = questions.push(questionList.valueSeq());

// Set up a different question
question = new Seq({
  question: 'Question 3 for Stage 4',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 3',
      hp: 15,
      sp: 4 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 3',
      int: 1,
      def: 1,
      atk: 1,
      spd: 1,
      sp: 1,
      hp:1
    })
  ])
});

questionList = questionList.push(question);

// Add the stage
questions = questions.push(questionList.valueSeq());


// Make the export a stack
const questionData = new Stack(questions);

export default questionData;
