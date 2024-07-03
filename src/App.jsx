import { useState } from 'react'
import './App.css'
import Interview from './Interview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Interview/>
    </>
  )
}

export default App
