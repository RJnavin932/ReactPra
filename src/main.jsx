import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Parentcom from './obcompenent/Parent.jsx'
import TableLayout from './layoutcom/Tablelayout.jsx'
import Parentstate from './state/Parentstate.jsx'
import Todo from './todolist/Todo.jsx'

createRoot(document.getElementById('root')).render(
  // <Parentcom/>
  // <TableLayout/>
  // <Parentstate/>
  <Todo/>
)
