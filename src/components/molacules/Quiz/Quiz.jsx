import React from 'react'

import { AnswersContainer } from 'components/molacules/AnswersContainer'
import { QuestionContainer } from 'components/molacules/QuestionContainer'

export const Quiz = ({ currentQuestion }) => {
  const { answers, question } = currentQuestion

  return (
    <section>
      <h2>Quiz</h2>
      <QuestionContainer question={question} />
      <AnswersContainer answers={answers} />
    </section>
  )
}
