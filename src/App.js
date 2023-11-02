import React, { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import CounterOperation from './pages/CounterOperation'
import AddToDo from './pages/AddToDo'
import ToDoList from './pages/ToDoList'
import ProductsPage from './pages/ProductsPage'
import { useDispatch } from 'react-redux'
import { productAction } from './store/actions/product.action'

function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(productAction.GETALL())
  })

  return (<>
    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/counter'>Counter</Link></li>
      <li><Link to='/addtodo'>Add Todo</Link></li>
      <li><Link to='/todolist'>Todo List</Link></li>
      <li><Link to='/products'>Products</Link></li>



    </ul>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/counter' element={<CounterOperation />} />
      <Route path='/addtodo' element={<AddToDo />} />
      <Route path='/todolist' element={<ToDoList />} />
      <Route path='/products' element={<ProductsPage />} />

    </Routes>

    <footer>
      @2023
    </footer>
  </>)
}

export default App