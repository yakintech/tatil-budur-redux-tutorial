import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoAction } from '../store/actions/todo.action';

function ToDoList() {

  //redux içerisinde global state e (store içerisindeki ulaşmak istiyorum)

  var { todoReducer } = useSelector(state => state);

  let dispatch = useDispatch();

  const remove = (item) => {
    dispatch(todoAction.REMOVE(item.id))
  }

  const empty = () => {
    dispatch(todoAction.EMPTY())
  }

  return (<>
  <button onClick={() => empty()}>Empty</button>
  <ul>
    {
      todoReducer.map((item) => {
        return <>
        <li key={item.id}>{item.name}</li>
        <button onClick={() => remove(item)}>Remove ToDo</button>
        </>
      })
    }
  </ul>
  </>
  )
}

export default ToDoList