import React from 'react';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import { Form, InputGroup } from 'react-bootstrap';
import { Nav } from "react-bootstrap"; // Correct import from react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>VERTEMY</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <div className='linkss'>
             <ul className="navbar-nav navbar-nav-scroll me-auto">
  {/* Nav item 1 Demos */}
  <li className="nav-item dropdown dropdown-menu-shadow-stacked">
    <a className="nav-link bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0" href="#" id="categoryMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="bi bi-ui-radios-grid me-2" /><span>Courses</span></a>
    <ul className="dropdown-menu" aria-labelledby="categoryMenu">
      {/* Dropdown submenu */}
      <li className="dropdown-submenu dropend">
        <a className="dropdown-item dropdown-toggle" href="#">Development</a>
        <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
          {/* dropdown submenu open right */}
          <li className="dropdown-submenu dropend">
            <a className="dropdown-item dropdown-toggle" href="#">Web Development</a>
            <ul className="dropdown-menu" data-bs-popper="none">
              <li> <a className="dropdown-item" href="#">CSS</a> </li>
              <li> <a className="dropdown-item" href="#">JavaScript</a> </li>
              <li> <a className="dropdown-item" href="#">Angular</a> </li>
              <li> <a className="dropdown-item" href="#">PHP</a> </li>
              <li> <a className="dropdown-item" href="#">HTML</a> </li>
              <li> <a className="dropdown-item" href="#">React</a> </li>
            </ul>
          </li>
          <li> <a className="dropdown-item" href="#">Data Science</a> </li>
          <li> <a className="dropdown-item" href="#">Mobile Development</a> </li>
          <li> <a className="dropdown-item" href="#">Programing Language</a> </li>
          <li> <a className="dropdown-item" href="#">Software Testing</a> </li>
          <li> <a className="dropdown-item" href="#">Software Engineering</a> </li>
          <li> <a className="dropdown-item" href="#">Software Development Tools</a> </li>
        </ul>
      </li>
      <li> <a className="dropdown-item" href="#">Design</a></li>
      {/* Dropdown submenu */}
      <li className="dropdown-submenu dropend">
        <a className="dropdown-item dropdown-toggle" href="#">Marketing</a>
        <div className="dropdown-menu dropdown-menu-start dropdown-width-lg" data-bs-popper="none">
          <div className="row p-4">
            {/* Dropdown column item */}
            <div className="col-xl-6 col-xxl-4 mb-4 mb-xl-0">
              <h6 className="mb-0">Get started</h6>
              <hr /> {/* Divider */}
              <ul className="list-unstyled">
                <li> <a className="dropdown-item" href="#">Market Research</a> </li>
                <li> <a className="dropdown-item" href="#">Advertising</a> </li>
                <li> <a className="dropdown-item" href="#">Consumer Behavior</a> </li>
                <li> <a className="dropdown-item" href="#">Digital Marketing</a> </li>
                <li> <a className="dropdown-item" href="#">Marketing Ethics</a> </li>
                <li> <a className="dropdown-item" href="#">Social Media Marketing</a> </li>
                <li> <a className="dropdown-item" href="#">Public Relations</a> </li>
                <li> <a className="dropdown-item" href="#">Advertising</a> </li>
                <li> <a className="dropdown-item" href="#">Decision Science</a> </li>
                <li> <a className="dropdown-item" href="#">SEO</a> </li>
                <li> <a className="dropdown-item" href="#">Business Marketing</a> </li>
              </ul>
            </div>
            {/* Dropdown column item */}
            <div className="col-xl-6 col-xxl-4 mb-4 mb-xl-0">
              <h6 className="mb-0">Degree</h6>
              <hr /> {/* Divider */}
              {/* Dropdown item */}
              <div className="d-flex mb-4 position-relative">
                <img src="assets/images/client/uni-logo-01.svg" className="icon-md" alt />
                <div className="ms-3">
                  <a className="stretched-link h6 mb-0" href="#">American Century University, New Mexico</a>
                  <p className="mb-0 small">Bachelor of computer science</p>
                </div>
              </div>
              {/* Dropdown item */}
              <div className="d-flex mb-4 position-relative">
                <img src="assets/images/client/uni-logo-02.svg" className="icon-md" alt />
                <div className="ms-3">
                  <a className="stretched-link h6 mb-0" href="#">Indiana College of - Bloomington</a>
                  <p className="mb-0 small">Masters of computer science</p>
                </div>
              </div>
              {/* Dropdown item */}
              <div className="d-flex mb-4 position-relative">
                <img src="assets/images/client/uni-logo-03.svg" className="icon-md" alt />
                <div className="ms-3">
                  <a className="stretched-link h6 mb-0" href="#">College of South Florida</a>
                  <p className="mb-0 small">Medical science college</p>
                </div>
              </div>
              {/* Dropdown item */}
              <div className="d-flex mb-4 position-relative">
                <img src="assets/images/client/uni-logo-01.svg" className="icon-md" alt />
                <div className="ms-3">
                  <a className="stretched-link h6 mb-0" href="#">Andeerson Campus</a>
                  <p className="mb-0 small">Bachelor of computer science</p>
                </div>
              </div>
              {/* Dropdown item */}
              <div className="d-flex position-relative">
                <img src="assets/images/client/uni-logo-04.svg" className="icon-md" alt />
                <div className="ms-3">
                  <a className="stretched-link h6 mb-0" href="#">University of South California</a>
                  <p className="mb-0 small">Masters of business development</p>
                </div>
              </div>
            </div>
            {/* Dropdown column item */}
            <div className="col-xl-6 col-xxl-4">
              <h6 className="mb-0">Certificate</h6>
              <hr /> {/* Divider */}
              {/* Dropdown item */}
              <div className="d-flex mb-4 position-relative">
                <h2 className="mb-0"><i className="fab fa-fw fa-google text-google-icon" /></h2>
                <div className="ms-2">
                  <a className="stretched-link h6 mb-0" href="#">Google SEO certificate</a>
                  <p className="mb-0 small">No prerequisites</p>
                </div>
              </div>
              {/* Dropdown item */}
              <div className="d-flex mb-4 position-relative">
                <h2 className="mb-0"><i className="fab fa-fw fa-linkedin-in text-linkedin" /></h2>
                <div className="ms-2">
                  <a className="stretched-link h6 mb-0" href="#">Business Development Executive(BDE)</a>
                  <p className="mb-0 small">No prerequisites</p>
                </div>
              </div>
              {/* Dropdown item */}
              <div className="d-flex mb-4 position-relative">
                <h2 className="mb-0"><i className="fab fa-fw fa-facebook text-facebook" /></h2>
                <div className="ms-2">
                  <a className="stretched-link h6 mb-0" href="#">Facebook social media marketing</a>
                  <p className="mb-0 small">Expert advice</p>
                </div>
              </div>
              {/* Dropdown item */}
              <div className="d-flex mb-4 position-relative">
                <h2 className="mb-0"><i className="fas fa-fw fa-basketball-ball text-dribbble" /></h2>
                <div className="ms-2">
                  <a className="stretched-link h6 mb-0" href="#">Creative graphics design</a>
                  <p className="mb-0 small">No prerequisites</p>
                </div>
              </div>
            </div>
          </div>
          {/* Advertisement */}
          <div className="row">
            <div className="col-12">
              <div className="card bg-blue rounded-0 rounded-bottom p-3 position-relative overflow-hidden" style={{background: 'url(assets/images/pattern/05.png) no-repeat center center', backgroundSize: 'cover'}}>
                {/* SVG decoration */}
                <figure className="position-absolute bottom-0 end-0 mb-n4 d-none d-md-block">
                  <svg width="92.6px" height="135.2px">	
                    <path className="fill-white" d="M71.5,131.4c0.2,0.1,0.4,0.1,0.6-0.1c0,0,0.6-0.7,1.6-1.9c0.2-0.2,0.1-0.5-0.1-0.7c-0.2-0.2-0.5-0.1-0.7,0.1 c-1,1.2-1.6,1.8-1.6,1.8c-0.2,0.2-0.2,0.5,0,0.7C71.4,131.3,71.4,131.4,71.5,131.4z" />
                    <path className="fill-white" d="M76,125.5c-0.2-0.2-0.3-0.5-0.1-0.7c1-1.4,1.9-2.8,2.8-4.2c0.1-0.2,0.4-0.3,0.7-0.2c0.2,0.1,0.3,0.4,0.2,0.7 c-0.9,1.4-1.8,2.9-2.8,4.2C76.6,125.6,76.3,125.6,76,125.5C76.1,125.5,76.1,125.5,76,125.5z M81.4,116.9 c-0.2-0.1-0.3-0.4-0.2-0.7c0.2-0.5,0.5-0.9,0.7-1.4c0.5-1.1,1-2.1,1.5-3.2c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6 c-0.5,1.1-1,2.1-1.5,3.2c-0.2,0.5-0.5,0.9-0.7,1.4C81.9,117,81.6,117,81.4,116.9C81.4,116.9,81.4,116.9,81.4,116.9z M85.1,107.1 c0.5-1.6,1-3.2,1.3-4.8c0.1-0.3,0.3-0.4,0.6-0.4c0.3,0.1,0.4,0.3,0.4,0.6c-0.4,1.6-0.8,3.3-1.3,4.9c-0.1,0.3-0.4,0.4-0.6,0.3 c0,0,0,0-0.1,0C85.1,107.6,85,107.3,85.1,107.1z M47.3,83c-1.5-1.1-2.5-2.5-3.1-4.2c-0.1-0.3,0-0.5,0.3-0.6 c0.3-0.1,0.5,0,0.6,0.3c0.5,1.5,1.5,2.7,2.8,3.7c0.2,0.2,0.3,0.5,0.1,0.7C47.9,83.1,47.6,83.1,47.3,83C47.4,83,47.4,83,47.3,83z  M51.7,84.6c0-0.3,0.3-0.5,0.5-0.4c1.4,0.2,2.9-0.3,4.3-1.4c0.2-0.2,0.5-0.1,0.7,0.1c0.2,0.2,0.1,0.5-0.1,0.7 c-1.6,1.2-3.4,1.8-5,1.6c-0.1,0-0.1,0-0.2,0C51.8,85,51.7,84.8,51.7,84.6z M87.2,97.4c0.2-1.7,0.2-3.3,0.2-5 c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5c0.1,1.7,0,3.4-0.2,5.1c0,0.3-0.3,0.5-0.5,0.4c-0.1,0-0.1,0-0.2,0 C87.3,97.8,87.1,97.6,87.2,97.4z M43.7,73.6c0.2-1.6,0.7-3.2,1.5-4.8l0.1-0.1c0.1-0.2,0.4-0.3,0.7-0.2c0,0,0,0,0,0 c0.2,0.1,0.3,0.4,0.2,0.7l-0.1,0.1c-0.7,1.5-1.2,3-1.4,4.5c0,0.3-0.3,0.5-0.6,0.4c-0.1,0-0.1,0-0.2,0 C43.8,74,43.7,73.8,43.7,73.6z M60,79.8c-0.2-0.1-0.3-0.5-0.1-0.7c0.4-0.6,0.8-1.3,1.1-2c0.4-0.8,0.7-1.6,1-2.4 c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6c-0.3,0.9-0.7,1.7-1.1,2.5c-0.4,0.7-0.8,1.4-1.2,2.1C60.5,79.9,60.2,80,60,79.8 C60,79.9,60,79.8,60,79.8z M86.8,87.5c-0.3-1.6-0.7-3.2-1.2-4.8c-0.1-0.3,0.1-0.5,0.3-0.6c0.3-0.1,0.5,0.1,0.6,0.3 c0.5,1.6,1,3.3,1.2,4.9c0,0.3-0.1,0.5-0.4,0.6c-0.1,0-0.2,0-0.3,0C87,87.7,86.9,87.6,86.8,87.5z M48.2,65.1 c-0.2-0.2-0.2-0.5,0-0.7c1.2-1.3,2.5-2.4,3.9-3.4c0.2-0.1,0.5-0.1,0.7,0.1c0.1,0.2,0.1,0.5-0.1,0.7c-1.4,0.9-2.6,2-3.7,3.2 c-0.2,0.2-0.4,0.2-0.6,0.1C48.3,65.2,48.3,65.1,48.2,65.1z M63.3,70c0.3-1.6,0.5-3.3,0.5-4.9c0-0.3,0.2-0.5,0.5-0.5 c0.3,0,0.5,0.2,0.5,0.5c-0.1,1.7-0.2,3.4-0.5,5.1c0,0.3-0.3,0.4-0.6,0.4c0,0-0.1,0-0.1,0C63.3,70.4,63.2,70.2,63.3,70z M83.8,78 c-0.7-1.5-1.5-3-2.4-4.3c-0.1-0.2-0.1-0.5,0.1-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.4,1.7,2.9,2.5,4.4c0.1,0.2,0,0.5-0.2,0.7 c-0.1,0.1-0.3,0.1-0.4,0C83.9,78.2,83.8,78.1,83.8,78z M56.5,59.6c-0.1-0.3,0.1-0.5,0.4-0.6c1.7-0.4,3.4-0.5,5.2-0.3 c0.3,0,0.5,0.3,0.4,0.5c0,0.3-0.3,0.5-0.5,0.4c-1.7-0.2-3.3-0.1-4.8,0.3c-0.1,0-0.2,0-0.3,0C56.6,59.8,56.5,59.7,56.5,59.6z  M78.4,69.7c-1.1-1.3-2.2-2.5-3.4-3.6c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0c1.2,1.1,2.4,2.4,3.5,3.7 c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0.1C78.5,69.8,78.4,69.7,78.4,69.7z M63.6,60.1c-0.2-1.6-0.4-3.3-0.8-4.9 c-0.1-0.3,0.1-0.5,0.4-0.6c0.3-0.1,0.5,0.1,0.6,0.4c0.4,1.7,0.7,3.4,0.8,5c0,0.3-0.2,0.5-0.4,0.5c-0.1,0-0.2,0-0.3,0 C63.7,60.4,63.6,60.2,63.6,60.1z M71,63.1c-1.4-0.9-2.9-1.7-4.4-2.3c-0.3-0.1-0.4-0.4-0.3-0.6c0.1-0.3,0.4-0.4,0.6-0.3 c1.5,0.6,3.1,1.4,4.6,2.3c0.2,0.1,0.3,0.5,0.1,0.7C71.6,63.1,71.3,63.2,71,63.1C71.1,63.1,71.1,63.1,71,63.1z M61.3,50.4 c-0.6-1.5-1.3-3-2.1-4.5c-0.1-0.2-0.1-0.5,0.2-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.5,1.6,3.1,2.2,4.6c0.1,0.3,0,0.5-0.3,0.6 c-0.1,0.1-0.3,0-0.4,0C61.5,50.6,61.4,50.5,61.3,50.4z M56.5,41.8c-1-1.3-2.1-2.6-3.2-3.8c-0.2-0.2-0.2-0.5,0-0.7 c0.2-0.2,0.5-0.2,0.7,0c1.2,1.3,2.3,2.6,3.3,3.9c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0C56.6,41.9,56.5,41.8,56.5,41.8z  M49.7,34.5c-1.2-1.1-2.5-2.1-3.9-3.2c-0.2-0.2-0.3-0.5-0.1-0.7c0.2-0.2,0.5-0.3,0.7-0.1c1.4,1,2.7,2.1,3.9,3.2 c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.4,0.2-0.6,0.1C49.7,34.6,49.7,34.5,49.7,34.5z M41.7,28.5c-1.4-0.9-2.8-1.8-4.3-2.6 c-0.2-0.1-0.3-0.4-0.2-0.7c0.1-0.2,0.4-0.3,0.7-0.2c1.5,0.8,2.9,1.7,4.3,2.6c0.2,0.1,0.3,0.5,0.1,0.7 C42.2,28.6,42,28.6,41.7,28.5C41.7,28.5,41.7,28.5,41.7,28.5z" />
                    <path className="fill-white" d="M30.7,22.6C30.7,22.6,30.7,22.6,30.7,22.6c0,0,0.9,0.4,2.3,1c0.2,0.1,0.5,0,0.7-0.2c0.1-0.2,0-0.5-0.2-0.7 c0,0,0,0,0,0c-1.4-0.7-2.2-1-2.3-1c-0.3-0.1-0.5,0-0.6,0.3C30.3,22.2,30.4,22.5,30.7,22.6z" />
                    <path className="fill-warning" d="M22.6,23.6l-1.1-4.1c0,0-11.7-7.5-11.9-7.6c-0.1-0.2-4.9-6.5-4.9-6.5l8.2,3.5l12.2,8.4L22.6,23.6z" />
                    <polygon className="fill-warning opacity-6" points="31.2,12.3 4.7,5.4 25.1,17.2" />
                    <polygon className="fill-warning opacity-6" points="21.5,19.5 15,24.8 4.7,5.4 " />
                  </svg>
                </figure>
                {/* Body */}
                <div className="card-body">
                  {/* Title */}
                  <h5 className="card-title text-white mb-2">Access 25K Online courses from 120 institutions, Start today!</h5>
                  <p className="text-white text-opacity-75">Here is the description of premium features which will allow users to get benefits and save a lot of money</p>
                  {/* Button */}
                  <a href="#" className="btn btn-sm btn-dark mb-0">Purchase Premium</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li> <a className="dropdown-item" href="#">Music</a></li>
      <li> <a className="dropdown-item" href="#">Lifestyle</a></li>
      <li> <a className="dropdown-item" href="#">IT &amp; software</a></li>
      <li> <a className="dropdown-item" href="#">Personal development</a></li>
      <li> <a className="dropdown-item" href="#">Health &amp; fitness</a></li>
      <li> <a className="dropdown-item" href="#">Teaching</a></li>
      <li> <a className="dropdown-item" href="#">Social science</a></li>
      <li> <a className="dropdown-item" href="#">Math &amp; logic</a></li>
      <li> <hr className="dropdown-divider" /></li>
      <li> <a className="dropdown-item bg-primary text-primary bg-opacity-10 rounded-2 mb-0" href="#">View all categories</a></li>
    </ul>
  </li>
</ul>

              </div>
              <div className='linkss' >
              <Nav.Link  href="#library">Library</Nav.Link>
              <Nav.Link  href="#become-instructor">Become an Instructor</Nav.Link>
              <Nav.Link  href="#about">About Us</Nav.Link>
              </div>
              
            </Nav>
            <div className='left-nav'>
            <div className='search'>
            <Form className="d-flex">
      <InputGroup>
        <Form.Control
          type="search"
          placeholder="Search courses or e-books"
          aria-label="Search"
        />
        <InputGroup.Text>
          <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
      </InputGroup>
    </Form>
            </div>
            
          <div className='signin'>
          <Nav className="ml-auto">
              <Nav.Link className='login' href="#sign-in">Sign In</Nav.Link>
              <Nav.Link className='login' href="#sign-in">log in</Nav.Link>
              <Nav.Link href="#cart" className="d-flex align-items-center">
      <FontAwesomeIcon icon={faShoppingCart} />
    </Nav.Link>
            </Nav>
          </div>
            </div>
          
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
