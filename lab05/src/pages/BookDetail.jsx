import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function BookDetail({addToCart}){

    const location = useLocation();
    const book = location.state?.book;

    const [count, setCount] = useState(1);
    const [error, setError] = useState("");

    const increase = () => {
        setCount(count + 1);
        setError(""); // Xóa lỗi nếu có
    };

    const decrease = () => {
        if (count > 1) {
        setCount(count - 1);
        setError(""); // Xóa lỗi nếu có
        } else {
        setError("Giá trị không thể nhỏ hơn 1!");
        }
    };

    const handleAddToCart = () => {
        addToCart({ ...book, quantity: count });
        alert("Đã thêm vào giỏ hàng!");
      };

    return(
        <div className="page-body m-5 rounded-2xl  bg-gray-300">
            <div className="book-info flex gap-4 m-5 rounded-2xl">
                <div className="book-img">
                    <img className="w-[200px] h-[200px]] object-cover rounded-lg " src={book.image} alt="" />
                </div>
                <div className="rounded-lg bg-white m-3 p-2 shadow-xl">
                    <h1 className="text-3xl font-bold">Tựa đề sách: {book.title}</h1>
                    <br />
                    <p className="text-gray-500">Tác gỉa: {book.author}</p>
                    <br />
                    <div className="text-green-500 font-bold text-2xl">
                        Giá: ${book.price}
                    </div>
                    <br />
                    <div className="button-add-to-card flex gap-4 ">
                        <button onClick={increase} className="text-4xl bg-green-600 rounded-lg w-[50px] h-[50px]  cursor-pointer hover:bg-blue-800 focus:bg-blue-950 focus:outline-2 focus:outline-offset-2 focus:outline-blue-950">+</button>
                        <input type="text" name="" id="" disabled className="bg-white ring-3 ring-green-800 rounded-lg text-center " value={count}/>
                        <button onClick={decrease} className="text-4xl bg-red-600 rounded-lg w-[50px] h-[50px] cursor-pointer hover:bg-blue-800 focus:bg-blue-950 focus:outline-2 focus:outline-offset-2 focus:outline-blue-950">-</button>
                        <button className=" bg-green-600 rounded-full cursor-pointer hover:bg-blue-800 focus:bg-blue-950 focus:outline-2 focus:outline-offset-2 focus:outline-blue-950 " onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
            
            <div className="book-detail col-span-3 bg-white shadow-2xl m-3 p-2 mt-3 rounded-lg">
                <h1>Mô tả chi tiết</h1>
                <p>{book.detail}</p>
            </div>
        </div>
    )
}