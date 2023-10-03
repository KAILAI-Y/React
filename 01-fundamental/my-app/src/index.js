import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const img = 'https://m.media-amazon.com/images/I/81bGKUa1e0L._SL1500_.jpg'
const author = 'James Clear'
const title =
  'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones'

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book title={title} img={img} />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}

// const Image = () => <img src={img} alt={title} />
// const Title = () => <h2>{title}</h2>
// const Author = () => {
//   return <h4>{author}</h4>
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
