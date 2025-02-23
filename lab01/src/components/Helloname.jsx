import { useState } from "react"

export function Helloname() {

    var [name, setName] = useState('')

    function handleChange(e){
        name  = e.target.value
    }

    function handleClick(e){
        setName(name);
    }

    return(
        <div>
            <input type="text" name="" id="name" onChange={handleChange} placeholder="type your name"/>
            <br />
            <button onClick={handleClick}>Click</button>
            <br />
            <span>hello: {name}</span>
        </div>
    )
}

