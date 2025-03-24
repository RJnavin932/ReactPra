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
import Formval from './ReducerFormval/Parentform.jsx'
import ParentTodoReducer from './todoReducer/Parentodo.jsx'
import RGBColor from './RGBcolorgen/RGB.jsx'
import HomeApi from './API/Homeapi.jsx'
import ApiPract from './API/ApiPrac.jsx'
import Reduxpage from './Redux/pages/Mainpage.jsx'
import { Provider } from 'react-redux'
import store from './Redux/Store/Store.js'
import Pagenation from './Pagenation/Obj.jsx'
import Pagenation2 from './Pagenation/Obj2.jsx'
import Pagenation3 from './Pagenation/Pagenation3.jsx'
import ReducerTodo from './todoReducer/Todoreducer.jsx'
import SdtAttendence from './Attendence prj/SdtAttendence/SdtAttedence.jsx'
import AdtStore from './Attendence prj/attedencestore/atdstore.js'


createRoot(document.getElementById('root')).render(
  // <Parentcom/>
  // <TableLayout/>
  // <Parentstate/>
  // <Todo/>
  // <ObjParent/>
  // <UseEffect/>
  // <Api/>
  // <Pagenation/>
  // <Pagenation2/>
  // <Formval/>
  // <ParentTodoReducer/>
  // <RGBColor/>
  // <HomeApi/>
  // <ApiPract/>

  // <Provider store={store}>
  //   <Reduxpage/>
  // </Provider>

  // <Pagenation3/>
  // <ReducerTodo/>
  <Provider store={AdtStore}>
      <SdtAttendence/>
  </Provider>

)
