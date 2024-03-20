import React, { useState } from 'react'
import Task from '../component/Task'
import "./Style.css"

const Todolist = () => {
    const [ inputTask, setInputTask] = useState('');

    const handleTask = (event) => {
        setInputTask(event.target.value);
    };
    const [ todolist, setTodolist ] = useState([]);

    const addTask = () => {
        const task = {
            id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
            taskName: inputTask,
            completed: false,
        }

        setTodolist([...todolist, task]);
        setInputTask('')
    };

    const deleteTask = (id) => {
        setTodolist(todolist.filter((task) => task.id !== id))
    };

    const completeTask = (id) => {
        setTodolist(todolist.map((task) => 
            task.id === id ? {...task, completed: !task.completed} : task
        ))
    };
  return (
    <div className='todolist-container'>
        <div className='todolist'>
            <h1>Todo List</h1>

            <div className='todolist-add'>
                <input 
                    className='taskInput'
                    placeholder='add task'
                    value={inputTask}
                    onChange={handleTask}
                />
                <button onClick={addTask}>add</button>
            </div>
        </div>

        <div>
            {todolist.map((task) => {
                return (
                    <Task
                        taskName={task.taskName}
                        id={task.id}
                        completed={task.completed}
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Todolist