import { useEffect, useState } from "react";
import dollar from '../assets/dollar.png'

export default function ProfitTag(){

    const [data, setData] = useState(null)
    
    useEffect(()=>{
        fetch("http://localhost:3000/profit")
            .then((r) => r.json())
            .then((d) => {
                setData(d)
            })
            .catch((error) => console.error("Error fetching data:", error));
    },[])

    

    if (!data) {
        return <div>Loading...</div>  // Thêm thông báo loading khi data chưa có
    }

    const profit = data[0]

    return(
        <div className="bg-green-200 rounded-xl p-5 grid grid-cols-4">
            <div className="flex flex-col col-span-3">
                <p>Profit</p>
                <p>${profit.value}</p>
                <p>{(profit.percented * 100).toFixed(2)}% period at change</p>
            </div>
            <div>
                <button>
                    <img src={dollar} className="size-[20px]" alt="" />
                </button>
            </div>
        </div>
    )
}