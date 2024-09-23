import React from 'react'
import Navbar from "../pages/NavbarComponet"
import Dfooter  from '../pages/Dfooter'
import Header from "../pages/DashboarHeader"
import Main from "../pages/DashboardC"

const Intructor = () => {
  return (
    <div>
       <Navbar />
       <Header />
       <Main />
       <Dfooter />
    </div>
  )
}

export default Intructor