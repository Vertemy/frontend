import React from 'react';
import NavbarComponent from '../pages/NavbarComponet';
import Page1 from "../pages/Page1"
const HomePage = () => {
  return (
    <div id='root'>
      <NavbarComponent />
        <Page1 />
    </div>
  );
}

export default HomePage;
