import {Seq, Stack, List} from 'immutable';

// Set up a question
let question = new Seq({
  question: 'What is your Crest?',
  answers: new Seq([
    new Seq({
      text: 'Courage',
      hp: 295,
      sp: 29.25,
      atk: 32.75,
      int: 32.5,
      def: 39.75,
      spd: 25
    }),
    new Seq({
      text: 'Friendship',
      hp: 20,
      atk: 15,
      def: 5
    }),
    new Seq({
      text: 'Love',
      hp: 25,
      def: 20
    }),
    new Seq({
      text: 'Sincerity',
      hp: 10,
      def: 15,
      atk: 15
    }),
    new Seq({
      text: 'Knowledge',
      hp: 25,
      int: 15,
      def: 5
    }),
    new Seq({
      text: 'Reliability',
      hp: 15,
      spd: 10
    }),
    new Seq({
      text: 'Hope',
      atk: 10,
      spd: 5
    }),
    new Seq({
      text: 'Light',
      sp: 20,
      int: 20,
      spd: 5
    }),
    new Seq({
      text: 'Kindness',
      def: 30,
      spd: 30
    })
  ])
});

// Add the Question to the first stage
let questionList = new List().push(question);

// Set up a different question
question = new Seq({
  question: 'What would you like to be?',
  answers: new Seq([
    new Seq({
      text: 'Novelist',
      hp: 295,
      sp: 29.25,
      atk: 32.75,
      int: 32.5,
      def: 39.75,
      spd: 25
    }),
    new Seq({
      text: 'Diplomat',
      atk: 15,
      def: 10
    }),
    new Seq({
      text: 'Astronaut',
      sp: 15,
      int: 10
    }),
    new Seq({
      text: 'Fashion Designer',
      hp: 20,
      atk: 10
    }),
    new Seq({
      text: 'Scientist',
      def: 15,
      int: 10
    }),
    new Seq({
      text: 'TV Star',
      spd: 15,
      def: 10
    }),
    new Seq({
      text: 'Doctor',
      int: 15,
      sp: 10
    }),
    new Seq({
      text: 'Teacher',
      hp: 20,
      def: 10
    }),
    new Seq({
      text: 'Detective',
      atk: 15,
      spd: 10
    }),
    new Seq({
      text: 'Stay At Home Parent',
      hp: 20,
      sp: 10
    }),
    new Seq({
      text: 'Lawyer',
      int: 15,
      def: 10
    }),
    new Seq({
      text: 'Chef',
      spd: 15,
      sp: 10
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
      text: 'one',
      hp: 295,
      sp: 29.25,
      atk: 32.75,
      int: 32.5,
      def: 39.75,
      spd: 25
    }),
    new Seq({
      text: 'two',
      hp: 20,
      sp: 20
    }),
    new Seq({
      text: 'three',
      int: 10,
      def: 20
    }),
    new Seq({
      text: 'four',
      spd: 10,
      sp: 20
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
      hp: 295,
      sp: 29.25,
      atk: 32.75,
      int: 32.5,
      def: 39.75,
      spd: 25 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 4',
      int: 15,
      def: 5,
      spd: 10

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
      hp: 1
    })
  ])
});

questionList = questionList.push(question);

// Add the stage
questions = questions.push(questionList.valueSeq());

// ----------------------------------------------------------
// Start a new question list for the next stage
questionList = new List();

// Set up a different question
question = new Seq({
  question: 'Question 1 for Stage 5',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 1',
      hp: 15,
      sp: 4 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 1',
      int: 1,
      def: 1,
      atk: 1,
      spd: 1,
      sp: 1,
      hp: 1
    })
  ])
});

questionList = questionList.push(question);

// Set up a different question
question = new Seq({
  question: 'Question 2 for Stage 5',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 2',
      hp: 15,
      sp: 4 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 2',
      int: 1,
      def: 1,
      atk: 1,
      spd: 1,
      sp: 1,
      hp: 1
    })
  ])
});

questionList = questionList.push(question);

// Set up a different question
question = new Seq({
  question: 'Question 3 for Stage 5',
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
      hp: 1
    })
  ])
});

questionList = questionList.push(question);

// Add the stage
questions = questions.push(questionList.valueSeq());

// ----------------------------------------------------------
// Start a new question list for the next stage
questionList = new List();

// Set up a different question
question = new Seq({
  question: 'Question 1 for Stage 6',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 1',
      hp: 15,
      sp: 4 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 1',
      int: 1,
      def: 1,
      atk: 1,
      spd: 1,
      sp: 1,
      hp: 1
    })
  ])
});

questionList = questionList.push(question);

// Set up a different question
question = new Seq({
  question: 'Question 2 for Stage 6',
  answers: new Seq([
    new Seq({
      text: 'Answer 1 for Question 2',
      hp: 15,
      sp: 4 // Continue as needed
    }),
    new Seq({
      text: 'Answer 2 for Question 2',
      int: 1,
      def: 1,
      atk: 1,
      spd: 1,
      sp: 1,
      hp: 1
    })
  ])
});

questionList = questionList.push(question);

// Set up a different question
question = new Seq({
  question: 'Question 3 for Stage 6',
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
      hp: 1
    })
  ])
});

questionList = questionList.push(question);

// Add the stage
questions = questions.push(questionList.valueSeq());

// ----------------------------------------------------------
// Mega Stage
questionList = new List();

question = new Seq({
  question: '',
  answers: new Seq([
    new Seq({
      text: ''
    })
  ])
});

questionList = questionList.push(question);
questions = questions.push(questionList.valueSeq());

// Make the export a stack
const questionData = new Stack(questions);

export default questionData;
