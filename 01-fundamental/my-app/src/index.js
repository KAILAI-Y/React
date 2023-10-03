import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const firstBook = {
  author: ' Michael Lewis',
  title: 'Going Infinite: The Rise and Fall of a New Tycoon',
  img: 'https://m.media-amazon.com/images/I/81LUGiJk5iL._SL1500_.jpg',
}

const secondBook = {
  author: 'James Clear',
  title:
    'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  img: 'https://m.media-amazon.com/images/I/81bGKUa1e0L._SL1500_.jpg',
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
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
