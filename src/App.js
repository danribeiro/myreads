import React from 'react'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom' 
import { Link } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    books : [],
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
  }

  updateBook = (book, shelf)=>{ 
    book.shelf =  shelf
    BooksAPI.update(book, shelf)
    this.setState(state =>({
      books: state.books.filter((b) => b.id !== book.id).concat([book]),
    }))
  }

  render() {
    
    return (
      <div className="app">

          <Route path='/' exact render={()=>(
            <div className="list-books">
              <div className="list-books-title">
                  <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <ListBooks 
                  onChangeBook={this.updateBook}
                  books={this.state.books} 
                />
              </div>
              <div className="open-search">
                <Link to={'/search/'}>Add a book</Link>
              </div>
            </div>
          )}/>

          <Route path='/search' render={()=>(
            <SearchBooks 
              books={this.state.books}
              onChangeBook={this.updateBook}
            />
          )}/>
        
      </div>
    )
  }
}

export default BooksApp
