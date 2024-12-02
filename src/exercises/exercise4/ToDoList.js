import { useState } from "react"

export const ToDoList = ()=>{

    const [tasks, setTasks] = useState([])

    const handleClick = (e)=>{
        const newTask = e.target.previousSibling.value;
        setTasks([...tasks, newTask]);
        e.target.previousSibling.value = "";
    }

    const deleteTask = (e)=>{
        const taskIndex = parseInt(e.target.parentElement.id.slice(5));
        const tasksList = [...tasks]
        tasksList.splice(taskIndex, 1);
        setTasks(tasksList);
    }

    return(
        <div>
            <input type="text" placeholder="Escribe la tarea"/>
            <input 
            type="button" 
            value="Agregar tarea"
            onClick={handleClick}
            />
            <ul>
                {tasks.map((task,index) => 
                    <li key={index} id={`task-${index}`}>
                        {task}
                        <button onClick={deleteTask}>Eliminar</button>
                    </li>)}
            </ul>
        </div>
    )
}