import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './providers/router'
import './App.css'

function App() {
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
