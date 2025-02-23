import { useState } from "react"

export function Caculator(){
    var [a,setA] = useState(0)
    var [b,setB] = useState(0)
    var [op,setOP] = useState('')
    var [result,setResult] = useState(0)

    function handleChangeA(e){
        setA(parseInt(e.target.value))
        console.log(a);
    }

    function handleChangeB(e){
        setB(parseInt(e.target.value))
    }

    
    function handleClick(e){
        switch(op){
            case 'add':
                setResult(a+b)
                break;
            case 'minus':
                setResult(a-b)
                break;
            case 'multi':
                setResult(a*b)
                break;
            case 'divide':
                setResult(a/b)
                break;
        }

    }

    function handleRadio(e){
        setOP(e.target.value)
        // console.log(e.target.value);
    }


    return(
        <div>
            <input type="text" name="" id="numA" onChange={handleChangeA} placeholder="type number A"/>
            <br />
            <input type="text" name="" id="numB" onChange={handleChangeB} placeholder="type number B"/>
            <br />
            <div>
                <input type="radio" name="calc" id="add" aria-label="add" value={'add'} onChange={handleRadio}/>
                <label htmlFor="add">Add </label> 
                <input type="radio" name="calc" id="minus" aria-label="minus" value={'minus'} onChange={handleRadio}/>
                <label htmlFor="minus">Minus </label> 
                <input type="radio" name="calc" id="multi" aria-label="multi" value={'multi'} onChange={handleRadio}/>
                <label htmlFor="multi">Multi </label> 
                <input type="radio" name="calc" id="divide" aria-label="divide" value={'divide'} onChange={handleRadio}/>
                <label htmlFor="divide">Divide </label>

            </div>
            <button onClick={handleClick}>Calc</button>
            <br />
            <span>result = {result}</span>
        </div>
    )
}