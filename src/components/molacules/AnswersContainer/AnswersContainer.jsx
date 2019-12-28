import React from 'react'

// answers = [{}]
// answer = {
//  answer: string,
// }

export const AnswersContainer = props => {
  const { answers } = props

  return (
    <div>
      {answers.map((answer, i) => (
        <button key={`answer-${i}`}>{answer.answer}</button>
      ))}
    </div>
  )
}
