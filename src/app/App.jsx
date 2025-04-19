import { RouterProvider } from 'react-router-dom'
import { myRouter } from './providers/router'
import './App.css'

function App() {
  return (
      <div>
        <RouterProvider router={myRouter} />
      </div>
  )
}

export default App
