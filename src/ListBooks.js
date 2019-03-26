import React, { Component } from 'react'
import Book from './Book'

class ListBooks extends Component{

    render(){

        const shelves = [
            {
                'title':'Currently Reading',
                'path':'currentlyReading'
            },
            {
                'title':'Want to Read',
                'path':'wantToRead'
            },
            {
                'title':'Read',
                'path':'read'
            }
        ]

        return(
            shelves.map(shelf => (
                <div key={shelf.path} className="bookshelf">
                    <h2 className="bookshelf-title">{shelf.title}</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Book 
                            onChangeBook={this.props.onChangeBook} 
                            books={this.props.books.filter(book => book.shelf === shelf.path)} />
                    </ol>
                    </div>
                </div>
            )) 
        )
    }
}

export default ListBooks