import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    author: ' Michael Lewis',
    title: 'Going Infinite: The Rise and Fall of a New Tycoon',
    img: 'https://m.media-amazon.com/images/I/81LUGiJk5iL._SL1500_.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    img: 'https://m.media-amazon.com/images/I/81bGKUa1e0L._SL1500_.jpg',
    id: 2,
  },
]

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props.book
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
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
