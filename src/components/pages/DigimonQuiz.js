import React from 'react'
import styled from 'styled-components/macro'

import { DigimonDisplay } from 'components/templates/DigimonDisplay'
import { Quiz } from 'components/templates/Quiz'

export const Heading = styled.h1`
  color: red;
`
export const DigimonQuiz = () => {
  return (
    <div>
      <Heading>DigimonQuiz</Heading>
      <DigimonDisplay />
      <Quiz />
    </div>
  )
}
