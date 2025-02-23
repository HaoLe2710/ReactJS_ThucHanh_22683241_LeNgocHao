import { useState } from "react"

export function TodoApp(){
    var [tasklist, setTasklist] = useState([])
    var [task, setTask] = useState('')

    var li = tasklist.map((item , index) =>{
        console.log(item);
        return(
            <li key={index}>
                        {item}
                        <button onClick={removeTask(index)}>Remove</button>
                    </li>
        )
    })

    function handleChange(e){
        setTask(e.target.value)
    }

    function addTask(e){
        setTasklist([...tasklist, task])
    }

    function removeTask(e){
        setTasklist(tasklist.filter((task, index) => index !== e))
    }

    return(
        <div>
            <input type="text" name="task" id="task" placeholder="type your task" onChange={handleChange}/>
            <br />
            <button onClick={addTask}>Add</button>
            <br />
            <div>your task list:</div>
            <div>{li}</div>
        </div>
    )
}