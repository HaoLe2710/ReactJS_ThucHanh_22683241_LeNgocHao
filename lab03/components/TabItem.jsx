import { useEffect, useState } from "react"
import Item from "./Item.jsx"

export default function TabItem(){
    var [items, setItems] = useState([])
    useEffect(() =>{
        var fn = fetch('https://67cd34f4dd7651e464eda258.mockapi.io/ItemData')
        .then((r) => r.json())
        .then((d) =>{
            setItems(d);
        } )
    },[])
    
    return(
        <div style={{display:"flex", flexWrap:"wrap"}}>
            {
                items.map((item, index) => {
                    return(
                        <Item key={index} item={item}/>
                    )
                })
            }
        </div>
        
    )
}