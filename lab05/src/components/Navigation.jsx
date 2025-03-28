import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import '../style/style.css'

export default function Navigation(){
    var [navs, setNavs] = useState([]) 
        useEffect(() =>{
            var fn = fetch('https://67dfa3847635238f9aaa238b.mockapi.io/api/book_data/nav')
        .then((r) => r.json())
        .then((d) =>{
            setNavs(d)
            console.log(d);
        })
    },[])   

    return(
        <nav>
            <ul className="flex flex-row bg-blue-300 rounded-full p-3 m-3">
                {
                    navs.map((nav, index) =>{
                        return(
                            <li className="p-3" key={index}><Link to={nav.path} className="decoration-0 text-black hover:text-blue-700">{nav.page}</Link></li>
                        )
                    })
                }
            </ul>
            
        </nav>
    )
}