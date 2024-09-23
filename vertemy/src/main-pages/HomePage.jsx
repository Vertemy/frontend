import React from 'react';
import NavbarComponent from '../pages/NavbarComponet';
import Page1 from "../pages/Page1"
import Footer from "../pages/Footer"

const HomePage = () => {
  return (
    <div id='root'>
      <NavbarComponent />
        <Page1 />
        <Footer />
    </div>
  );
}

export default HomePage;
