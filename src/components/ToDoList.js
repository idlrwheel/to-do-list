import React, {useState} from 'react'
import '../index.css';

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChance(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks([...t, newTask, completed]);
            setNewTask("");
        }
       
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i)=> i !== index);
        setTasks(updatedTasks);
    }

    

    function checkTask(index){

    }


    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type = "text" placeholder = "Digite uma tarefa..." value = {newTask} onChange = {addTask}></input>
                <button className = "add-button" onClick = {addTask}>
                    Adicionar
                </button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                <li key = {index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>
                        Deletar
                    </button>
                    <button className="finish-button" onClick={() => checkTask(index)}>
                        Concluída
                    </button>
                </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList
