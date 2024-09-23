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
import IntructorCourses from './main-pages/IntructorCourses'
import IntructorQuiz from './main-pages/IntructorQuiz'
import IntructorEarning from './main-pages/IntructorEarning'
import IntructorStudent from './main-pages/IntructorStudent'
import IntructorOrder from './main-pages/IntructorOrder'
import Intructorreveiw from './main-pages/Intructorreveiw'
import IntructorPayout from './main-pages/IntructorPayout'
import Setting from './main-pages/Setting'
import DeleteAccout from './main-pages/DeleteAccout'
import Signout from './main-pages/Signout'
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
          <Route path="/IntructorCourses" element={< IntructorCourses/>} />
          <Route path="/IntructorQuiz" element={< IntructorQuiz/>} />
          <Route path="/IntructorEarning" element={< IntructorEarning/>} />
          <Route path="/IntructorStudent" element={< IntructorStudent/>} />
          <Route path="/IntructorOrder" element={< IntructorOrder/>} />
          <Route path="/Intructorreveiw" element={< Intructorreveiw/>} />
          <Route path="/IntructorPayout" element={< IntructorPayout/>} />
          <Route path="/Setting" element={< Setting/>} />
          <Route path="/DeleteAccout" element={< DeleteAccout/>} />
          <Route path="/Signout" element={< Signout/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App