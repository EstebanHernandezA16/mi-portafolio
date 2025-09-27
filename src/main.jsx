import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { MyRouter } from './Components/Router/router.jsx'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer:{}
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={MyRouter}/>
  </StrictMode>,
)
