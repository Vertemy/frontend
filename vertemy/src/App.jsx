import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { HomePage } from './main-pages'
import Aboutus from "./main-pages/Aboutus"
import Signup from './main-pages/Signup'
import SignIn from './main-pages/SignIn'
import Intructor from "./main-pages/Intructor"
import BecomeAnIntructor from './main-pages/BecomeAnIntructor'
import EditIntructorProfile from './main-pages/EditIntructorProfile'

function App() {
  const [count, setCount] = useState(0)
      
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/instructor" element={<BecomeAnIntructor />} />
          <Route path="/become" element={< Intructor/>} />
          <Route path="/EditIntructorProfile" element={< EditIntructorProfile/>} />


        </Routes>
      </div>
    </Router>
  )
}

export default App