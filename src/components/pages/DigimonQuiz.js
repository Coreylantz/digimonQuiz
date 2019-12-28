import React, { useState } from 'react'
import styled from 'styled-components/macro'

import { DigimonDisplay } from 'components/molacules/DigimonDisplay'
import { Quiz } from 'components/molacules/Quiz'

export const Heading = styled.h1`
  color: red;
`
export const DigimonQuiz = () => {
  let [digimonImage] = useState({
    src: './images/digimon/_egg.jpg',
    alt: 'Digi-egg',
  })

  const mockQuestion = {
    question: 'What is your favourite colour?',
    answers: [
      { answer: 'blue' },
      { answer: 'red' },
      { answer: 'yellow' },
      { answer: 'green' },
    ],
  }

  return (
    <div>
      <Heading>DigimonQuiz</Heading>
      <DigimonDisplay digimonImage={digimonImage} />
      <Quiz currentQuestion={mockQuestion} />
    </div>
  )
}
