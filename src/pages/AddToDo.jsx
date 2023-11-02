import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ToDoList from './ToDoList'
import { todoAction } from '../store/actions/todo.action'

function AddToDo() {

  const [name, setname] = useState("")
  const [description, setdescription] = useState("")

  let dispatch = useDispatch()

  const add = () => {

    let newTodo = {
      id: Math.floor(Math.random() * 9999999999),
      name: name,
      description: description
    }

    dispatch(todoAction.ADD(newTodo))

  }


  return (<>
      <div>
        <label htmlFor="">Name</label>
        <input type='text' onChange={(e) => setname(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Description</label>
        <input type='text' onChange={(e) => setdescription(e.target.value)} />
      </div>
      <div>
        <button onClick={() => add()}>Add Todo</button>
      </div>
      <ToDoList/>
  </>
  )
}

export default AddToDo