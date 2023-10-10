import React, { useEffect, useState } from 'react'

const Cleanup = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle
      </button>
      {toggle && <Random />}
    </div>
  )
}

const Random = () => {
  useEffect(() => {
    const someFunc = () => {}
    window.addEventListener('scroll', someFunc)
    return () => window.removeEventListener('scroll', someFunc)
  }, [])
  return <h1>hello there</h1>
}

export default Cleanup
