import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'


class SearchBooks extends Component{

    state = {
        query: '',
        results:[]
    }

    searchBooks=(query)=>{
        if(query !== ''){
            BooksAPI.search(query).then((books)=>{
                const novobooks = books.map((book) => {
                    const result = this.props.books.find((b)=> book.id === b.id)
                    if(typeof result !== 'undefined' ){
                        book.shelf = result.shelf 
                    }
                    return book
                })
                this.setState({
                    results: novobooks
                })
            })
        }
    }

    updateQuery =(query)=>{
        this.setState({ query:query})
        this.searchBooks(query)
    }

    render(){

        const { query } = this.state

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to={'/'}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author" 
                            value={query}
                            onChange={(event)=>this.updateQuery(event.target.value)} 
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <Book 
                            books={this.state.results} 
                            onChangeBook={this.props.onChangeBook}
                            searchBooks={(query)=>{this.searchBooks(query)}}
                        />
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks