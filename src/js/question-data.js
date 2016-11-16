import {Seq, Stack} from 'immutable';

// EvoultionStage[questions[answers]]
const questionData = new Stack([ // Stack for stages for ease of access
  new Seq([   // Question Indexed Seq (lazy Array) for first stage
    new Seq({ // First Question Keyed Seq (lazy Object)
      question: 'Question 1',
      answers: new Seq([
        new Seq({
          text: 'Answer 1 for Question 1',
          hp: 0 // Continue as needed
        }),
        new Seq({
          text: 'Answer 2 for Question 1'
        })
      ])
    }),
    new Seq({ // Second Question Keyed Seq (lazy Object)
      question: 'Question 1',
      answers: new Seq([
        new Seq({
          text: 'Answer 1 for Question 2',
          hp: 0 // Continue as needed
        }),
        new Seq({
          text: 'Answer 2 for Question 2'
        })
      ])
    })
  ]),
  new Seq([   // Question Indexed Seq (lazy Array) for Second stage
    new Seq({ // First Question Keyed Seq (lazy Object)
      question: 'Question 98136798374',
      answers: new Seq([
        new Seq({
          text: 'Answer 1 for Question 1',
          hp: 0 // Continue as needed
        }),
        new Seq({
          text: 'Answer 2 for Question 1'
        })
      ])
    }),
    new Seq({ // Second Question Keyed Seq (lazy Object)
      question: 'Question 1',
      answers: new Seq([
        new Seq({
          text: 'Answer 1 for Question 2',
          hp: 0 // Continue as needed
        }),
        new Seq({
          text: 'Answer 2 for Question 2'
        })
      ])
    })
  ])
]);

export default questionData;
