import { useState, useEffect } from 'react'

const UseEffectBasic = () => {
  const [value, setValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)
  const sayHello = () => {
    console.log('hello there')
  }

  sayHello()

  useEffect(() => {
    console.log('hello from first useEffect')
  }, [value])
  useEffect(() => {
    console.log('hello from second useEffect')
  }, [secondValue])
  return (
    <div>
      <h1>value: {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
      <h1>second value: {secondValue}</h1>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        click me
      </button>
    </div>
  )
}

export default UseEffectBasic
