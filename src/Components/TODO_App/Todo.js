import React, { useEffect, useState } from 'react'
import "./Todo.css"
import AddTask from './AddTask'
import ListTask from './ListTask'
const Todo = () => {

  const[tasks,setTask] = useState([])
  useEffect(()=>{
    document.title = `You have ${tasks.length} pending task`
  })

const addTask =(title)=>{
  const newTask = [...tasks,{title}]
  setTask(newTask)
}

const removeTask = (index)=>{
    const newTask =[...tasks]
    newTask.splice(index,1)
    setTask(newTask)
}

  return (
    <>
        <div className='todo-container'>
        <div className='header'>TODO APP</div>
        <div className='add-task'>
            <AddTask addTask={addTask}/>
            </div>
        <div className='list-task'>
          {tasks.map((task,index)=>(
            <ListTask task={task} removeTask ={removeTask}
            index={index} key={index}/>
          ))}
            
            </div>
        </div>
    </>
  )
}

export default Todo