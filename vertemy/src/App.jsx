import { useState } from 'react'
import './App.css'
import { Page1, Navbar } from './pages'


function App() {
  const [count, setCount] = useState(0)
      
  return (
    <>
    <Navbar />
    <Page1 />
    </>
  )
}

export default App
