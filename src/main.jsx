import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Parentcom from './obcompenent/Parent.jsx'
import TableLayout from './layoutcom/Tablelayout.jsx'
import Parentstate from './state/Parentstate.jsx'
import Todo from './todolist/Todo.jsx'
import ObjParent from './obcompenent/Objusestate.jsx'
import UseEffect from './obcompenent/useeffet/UseEffect.jsx'
import Api from './obcompenent/useeffet/Api.jsx'
import Obj from './arrayofobj/Obj.jsx'
import Formval from './ReducerFormval/Parentform.jsx'

createRoot(document.getElementById('root')).render(
  // <Parentcom/>
  // <TableLayout/>
  // <Parentstate/>
  // <Todo/>
  // <ObjParent/>
  // <UseEffect/>
  // <Api/>
  // <Obj/>
  <Formval/>
)
