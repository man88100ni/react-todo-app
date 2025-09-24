import React, { useEffect, useState } from 'react';
import './Styles/Style.css';

function ToDoApp(){
    const [inputVal, setInputVal] = useState('');
    const [taskList, setTaskList] = useState([]);

    const onInputChange = (event) => {
        setInputVal(event.target.value);
    }

    const onAddTask = ()=>{
        if(inputVal === ''){
            alert("Please enter something to add a task");
        }else{
            setTaskList(previousTask => [...previousTask, {id:Date.now(), text: inputVal}]);
            alert(`${inputVal} added successfully.`);
        }
        setInputVal('');
    }

    const completeTask = (id) => {
        const updatedTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(updatedTaskList);
        alert("The task is completed");
    }
    
    useEffect(() => {
        console.log('Updated Task List:', taskList);
    }, [taskList]);

    return(
        <div className="app-container">
            <h1 className="title">To-Do List ✅</h1>
            
            <div className="input-section">
                <input 
                    type="text" 
                    placeholder="Enter a task..." 
                    value={inputVal} 
                    onChange={onInputChange} 
                />
                <button onClick={onAddTask}>Add</button>
            </div>

            <ul className="task-list">
                {
                    taskList.map((task) => 
                        <li key={task.id} className="task-item">
                            <label>
                                <input 
                                    type="checkbox" 
                                    onChange={() => completeTask(task.id)} 
                                /> 
                                <span>{task.text}</span>
                            </label>
                        </li>
                    )
                }
            </ul>
        </div>        
    )
}
export default ToDoApp;