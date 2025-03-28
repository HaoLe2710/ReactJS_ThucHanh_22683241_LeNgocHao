import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import '../style/style.css'

export default function BookCategory(){
    var [books, setBooks] = useState([])
    useEffect(() => {
        var fn = fetch('https://67dfa3847635238f9aaa238b.mockapi.io/api/book_data/books')
        .then((r) => r.json())
        .then((d) =>{
            setBooks(d)
        })
    },[])

    return(
        <div className="grid grid-cols-3 gap-4 m-3 p-3">
            {
                books.map((book, index) => {
                    return(
                        <BookCard key={index} book={book}/>
                    )
                })
            }
        </div>
    )
}