import React from 'react'
import './Style.css'
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const Task = (props) => {
  return (
    <div className='task-container'>
        <p style={{color: props.completed ? "#47A992" : "white",
                    textDecoration: props.completed ? "line-through" : "none"}}>
            {props.taskName}
        </p>

        <div className='task-button'>
            <button style={{color: '#47A992'}} className='completeTask' onClick={() => props.completeTask(props.id)}>
                <FaCheck />
            </button>

            <button style={{
                color: '#7A3E3E'
            }} className='deletetask' onClick={() => props.deleteTask(props.id)}>
                <MdDelete />
            </button>
        </div>
    </div>
  )
}

export default Task