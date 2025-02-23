import { useState } from "react"

export function AddTwoNumbers(){
    var [a,setA] = useState(0)
    var [b,setB] = useState(0)
    var [result,setResult] = useState(0)

    function handleChangeA(e){
        setA(parseInt(e.target.value))
        console.log(a);
    }

    function handleChangeB(e){
        setB(parseInt(e.target.value))
    }

    
    function handleClick(e){
        setResult(parseInt(a + b))
    }

    return(
        <div>
            <input type="text" name="" id="numA" onChange={handleChangeA} placeholder="type number A"/>
            <br />
            <input type="text" name="" id="numB" onChange={handleChangeB} placeholder="type number B"/>
            <br />
            <button onClick={handleClick}>Add</button>
            <br />
            <span>result = {result}</span>
        </div>
    )
}