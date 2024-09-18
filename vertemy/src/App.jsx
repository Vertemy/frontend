import { useState } from 'react'
import './App.css'
import { Page1, Navbar } from './pages'


function App() {
  const [count, setCount] = useState(0)
      
  return (
    <>
    <div className='root'>
    <Navbar />

    <Page1 />

    </div>
    </>
  )
}

export default App
