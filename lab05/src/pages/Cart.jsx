import { Link } from "react-router-dom";

export default function Cart({ cart }) {
  return (
    <div className="m-5 p-5 bg-gray-100 rounded-lg">
      <h1 className="text-4xl font-bold mb-5">🛒 Giỏ hàng của bạn</h1>

      {cart.length === 0 ? (
        <p className="text-xl text-gray-500">Chưa có sách nào trong giỏ hàng!</p>
      ) : (
        <div className="grid gap-5">
          {cart.map((book, index) => (
            <div key={index} className="flex items-center bg-white p-5 rounded-lg shadow-md">
              <img src={book.image} alt={book.title} className="w-20 h-20 object-cover rounded-lg" />
              <div className="ml-5">
                <h2 className="text-2xl font-semibold">{book.title}</h2>
                <p className="text-lg">Tác giả: {book.author}</p>
                <p className="text-lg text-green-600 font-bold">Giá: ${book.price}</p>
                <p className="text-lg">Số lượng: {book.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5">
        <Link to="/" className="text-blue-500 hover:underline">← Tiếp tục mua sách</Link>
      </div>
    </div>
  );
}
