import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const handleClick = () => {
    setTimeout(() => {
      setValue(value + 1)
    }, 3000)
    // setValue((currentState) => {
    //   const newState = currentState + 1
    //   return newState
    // })
  }
  return (
    <div>
      <h4>{value}</h4>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  )
}

export default UseStateGotcha
