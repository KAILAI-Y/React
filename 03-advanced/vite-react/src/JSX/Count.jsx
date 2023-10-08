import { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    console.log(count)
  }
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick} className="btn">
        increase
      </button>
    </div>
  )
}

export default Count
