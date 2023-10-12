import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import styles from './Question.module.css'

const Question = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId
  return (
    <article className={styles.question}>
      <header>
        <h5>{title}</h5>
        <button
          className={styles.question_btn}
          onClick={() => toggleQuestion(id)}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  )
}

export default Question
