import React, { Component } from 'react'


class Book extends Component{

    state = {
        book : ''
    }
    
    render(){
        return(
            <ol className="books-grid">
                {this.props.books.map((book)=>(
                <li key={book.id} >
                        <div className="book" >
                            <div className="book-top">
                                { 'imageLinks' in book ? <div className="book-cover" style={{ width: 128, height: 175, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div> : <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("icons/img-default.jpg")` }}></div>}
                                <div className="book-shelf-changer">
                                    <select  value={book.shelf} onChange={(e)=>this.props.onChangeBook(book, e.target.value)}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading" >Currently Reading</option>
                                        <option value="wantToRead" >Want to Read</option>
                                        <option value="read" >Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default Book