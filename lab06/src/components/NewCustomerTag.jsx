import { useEffect, useState } from "react";

export default function NewCustomerTag(){

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

    const new_customer = data[0]

    return(
        <div className="bg-green-200 rounded-xl p-5 grid grid-cols-4">
            <div className="flex flex-col col-span-3">
                <p>New customer</p>
                <p>{new_customer.value}</p>
                <span><p className="text-green-500">{(new_customer.percented * 100).toFixed(2)}%</p><p> period at change</p></span>
                
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    )
}