import React, { useState } from 'react'

const AddTask = ({addTask}) => {

  const[value,setValue] = useState("")

  const addItem = () => {
    addTask(value)
    setValue("")
  }
  return (
    <>
        <div className='input-container'>
            <input type='text' 
            className='input'
            placeholder='Add new task'
            value={value}
            onChange={(e)=>{
              setValue(e.target.value)
            }}
            />
            <button className='task-button' onClick={addItem}>ADD</button>
        </div>
    </>
  )
}

export default AddTask