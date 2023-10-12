import React from 'react'
import Question from './Question'
import styls from './Questions.module.css'

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className={styls.container}>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        )
      })}
    </section>
  )
}

export default Questions
