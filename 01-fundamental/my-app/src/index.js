import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81bGKUa1e0L._SL1500_.jpg"
    alt="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
  />
)
const Title = () => (
  <h2>
    Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones
  </h2>
)
const Author = () => {
  return <h4>James Clear</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
