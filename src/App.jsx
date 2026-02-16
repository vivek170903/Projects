import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useParams } from 'react-router-dom' 
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import BoxPage from './pages/BoxPage.jsx'
import { Navigate } from 'react-router-dom'
const router = createBrowserRouter([
    {
      path:"/",
      element:<Navigate to="/1" />
    },
    {
      path:"/:number",
      element:<BoxPage />
    }
  ])
  

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
