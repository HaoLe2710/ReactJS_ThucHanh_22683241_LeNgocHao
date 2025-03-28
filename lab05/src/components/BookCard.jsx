import { useEffect, useState } from "react"
import '../style/style.css'
import { Link } from "react-router-dom";
export default function BookCard({book}){
    return(
        
        <div className="book_card bg-gray-600 p-5 rounded-2xl flex flex-col justify-center items-center text-white">
            <div className="card-img w-32 h-32 overflow-hidden rounded-lg">
            <Link to={`/book/${book.id}`} state={{ book }}>
                <img src={book.image} alt={book.title} />
                <p>{book.title}</p>
            </Link>
            </div>

            <div className="card-body flex flex-col">
                <div className="card-name">
                    <div className="card-text">
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                        <p>{book.price}</p>
                    </div>
                    <div className="card-tag">
                        
                    </div>
                </div>
                <div className="card-save-button">
                    <button className="bg-blue-300 rounded-full p-3 cursor-pointer hover:bg-blue-800 focus:bg-blue-950 focus:outline-2 focus:outline-offset-2 focus:outline-blue-950">Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>
    )
}