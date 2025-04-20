import { useEffect, useState } from "react"
import cart from '../assets/cart.png'

export default function TurnoverTag(){

    const [data, setData] = useState(null)
    
    useEffect(()=>{
        fetch("http://localhost:3000/turn_over")
            .then((r) => r.json())
            .then((d) => {
                setData(d)
            })
            .catch((error) => console.error("Error fetching data:", error));
    },[])

    

    if (!data) {
        return <div>Loading...</div>  // Thêm thông báo loading khi data chưa có
    }

    const turn_over = data[0]

    return(
        <div className="bg-red-200 rounded-xl p-5 grid grid-cols-4 gap-5 shadow-xl">
            <div className="flex flex-col col-span-3">
                <p className="font-black text-2xl">Turnover</p>
                <p>${turn_over.value}</p>
                <p className="text-green-600 font-bold">+{(turn_over.percented *100).toFixed(2)}% period at change</p>
            </div>
            <div>
                <img className="size-[27px]" src={cart} alt="" />
            </div>
        </div>
    )
}