import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Route from './Layout'
import { Home , About , Contact} from './components'

const router =createBrowserRouter([{
  path: '/',
  element:<Route/>,
  children:[
  {
    path:"",
    element:<Home/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"contact",
    element:<Contact/>
  }
]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
