import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import books from './books'

const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

const Book = (props) => {
  const { img, title, author, number } = props

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
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
