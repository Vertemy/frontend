import React from 'react'
import Navbar from "../pages/NavbarComponet";
import Footer from "../pages/Dfooter";
import Header from "../pages/DashboarHeader";
import { NavLink } from 'react-router-dom';


const IntructorQuiz = () => {
  return (
    <div>
       <Navbar />
       <Header />
     {/* =======================
Inner part START */}
<section className="pt-0">
  <div className="container">
    <div className="row">
      {/* Left sidebar START */}
      <div className="col-xl-3">
        {/* Responsive offcanvas body START */}
        <div className="offcanvas-xl offcanvas-end" tabIndex={-1} id="offcanvasSidebar">
          {/* Offcanvas header */}
          <div className="offcanvas-header bg-light">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close" />
          </div>
          {/* Offcanvas body */}
          <div className="offcanvas-body p-3 p-xl-0">
            <div className="bg-dark border rounded-3 pb-0 p-3 w-100">
              {/* Dashboard menu */}
              <div className="list-group list-group-dark list-group-borderless">
              <NavLink className="list-group-item" activeClassName="active" to="/become">
        <i className="bi bi-ui-checks-grid fa-fw me-2" /> Dashboard
      </NavLink>
      <NavLink className="list-group-item" activeClassName="active" to="/IntructorCourses">
        <i className="bi bi-basket fa-fw me-2" /> My Courses
      </NavLink>
      <NavLink className="list-group-item" activeClassName="active" to="/IntructorQuiz">
        <i className="bi bi-question-diamond fa-fw me-2" /> Quiz
      </NavLink>
      <NavLink className="list-group-item" activeClassName="active" to="/IntructorEarning">
        <i className="bi bi-graph-up fa-fw me-2" /> Earnings
      </NavLink>
      <NavLink className="list-group-item" activeClassName="active" to="/IntructorStudent">
        <i className="bi bi-people fa-fw me-2" /> Students
      </NavLink>
      <NavLink className="list-group-item" activeClassName="active" to="/IntructorOrder">
        <i className="bi bi-folder-check fa-fw me-2" /> Orders
      </NavLink>
      <NavLink className="list-group-item" activeClassName="active" to="/Intructorreveiw">
        <i className="bi bi-star fa-fw me-2" /> Reviews
      </NavLink>
      <NavLink className="list-group-item" activeClassName="active" to="/EditIntructorProfile">
        <i className="bi bi-pencil-square fa-fw me-2" /> Edit Profile
      </NavLink>
      <NavLink className="list-group-item" activeClassName="active" to="/IntructorPayout">
        <i className="bi bi-wallet2 fa-fw me-2" /> Payouts
      </NavLink>
      <NavLink className="list-group-item" activeClassName="active" to="/Setting">
        <i className="bi bi-gear fa-fw me-2" /> Settings
      </NavLink>
      <NavLink className="list-group-item" activeClassName="active" to="/DeleteAccout">
        <i className="bi bi-trash fa-fw me-2" /> Delete Profile
      </NavLink>
      <NavLink className="list-group-item text-danger bg-danger-soft-hover" to="/Signout">
        <i className="fas fa-sign-out-alt fa-fw me-2" /> Sign Out
      </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* Responsive offcanvas body END */}
      </div>
      {/* Left sidebar END */}
      {/* Main content START */}
      <div className="col-xl-9">
        {/* Card START */}
        <div className="card border bg-transparent rounded-3">
          {/* Card header START */}
          <div className="card-header bg-transparent border-bottom px-3">
            <div className="row g-4 align-items-center">
              <div className="col-md-2">
                <img src="assets/images/courses/4by3/01.jpg" className="rounded-2" alt="Card image" />
              </div>
              <div className="col-md-10">
                {/* Title */}
                <h3 className="card-title mb-0"><a href="#">The Complete Digital Marketing Course - 12 Courses in 1</a></h3>
              </div>
            </div>
          </div>
          {/* Card header END */}
          {/* Card body START */}
          <div className="card-body p-4">
            {/* Accordion START */}
            <div className="accordion accordion-icon accordion-bg-light" id="accordionExample">
              {/* Item */}
              <div className="accordion-item mb-3">
                <h6 className="accordion-header" id="headingOne">
                  <button className="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <span className="text-secondary fw-bold me-3">01</span>  
                    <span className="fw-bold">How do you protect your business against cyber-crime?</span> 
                  </button>
                </h6>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body mt-3">
                    {/* Answer options */}
                    <p className="mb-3"><b className="text-dark">A</b> We have cybersecurity insurance coverage</p>
                    <p className="mb-3"><b className="text-dark">B</b> Our dedicated staff will protect us</p>
                    <p className="mb-3"><b className="text-dark">C</b> We give regular training for best practices</p>
                    <p className="mb-3"><b className="text-dark">D</b> Third-party vendor protection</p>
                    {/* Button */}
                    <a href="#" className="btn btn-sm btn-success-soft mb-0" data-bs-toggle="modal" data-bs-target="#editQuestion">Edit</a>
                    <button className="btn btn-danger-soft btn-sm mb-0">Delete</button>
                  </div>
                </div>
              </div>
              {/* Item */}
              <div className="accordion-item mb-3">
                <h6 className="accordion-header" id="headingTwo">
                  <button className="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <span className="text-secondary fw-bold me-3">02</span>  
                    <span className="fw-bold">What is SEO?</span> 
                  </button>
                </h6>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body mt-3">
                    {/* Answer options */}
                    <p className="mb-3"><b className="text-dark">A</b> We have cybersecurity insurance coverage</p>
                    <p className="mb-3"><b className="text-dark">B</b> Our dedicated staff will protect us</p>
                    <p className="mb-3"><b className="text-dark">C</b> We give regular training for best practices</p>
                    <p className="mb-3"><b className="text-dark">D</b> Third-party vendor protection</p>
                    {/* Button */}
                    <a href="#" className="btn btn-sm btn-success-soft mb-0" data-bs-toggle="modal" data-bs-target="#editQuestion">Edit</a>
                    <button className="btn btn-danger-soft btn-sm mb-0">Delete</button>
                  </div>
                </div>
              </div>
              {/* Item */}
              <div className="accordion-item mb-3">
                <h6 className="accordion-header" id="headingThree">
                  <button className="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <span className="text-secondary fw-bold me-3">03</span>  
                    <span className="fw-bold">Who should join this course?</span> 
                  </button>
                </h6>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body mt-3">
                    {/* Answer options */}
                    <p className="mb-3"><b className="text-dark">A</b> We have cybersecurity insurance coverage</p>
                    <p className="mb-3"><b className="text-dark">B</b> Our dedicated staff will protect us</p>
                    <p className="mb-3"><b className="text-dark">C</b> We give regular training for best practices</p>
                    <p className="mb-3"><b className="text-dark">D</b> Third-party vendor protection</p>
                    {/* Button */}
                    <a href="#" className="btn btn-sm btn-success-soft mb-0" data-bs-toggle="modal" data-bs-target="#editQuestion">Edit</a>
                    <button className="btn btn-danger-soft btn-sm mb-0">Delete</button>
                  </div>
                </div>
              </div>
              {/* Item */}
              <div className="accordion-item">
                <h6 className="accordion-header" id="headingFour">
                  <button className="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <span className="text-secondary fw-bold me-3">04</span>  
                    <span className="fw-bold">What are the T&amp;C for this program?</span> 
                  </button>
                </h6>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body mt-3">
                    {/* Answer options */}
                    <p className="mb-3"><b className="text-dark">A</b> We have cybersecurity insurance coverage</p>
                    <p className="mb-3"><b className="text-dark">B</b> Our dedicated staff will protect us</p>
                    <p className="mb-3"><b className="text-dark">C</b> We give regular training for best practices</p>
                    <p className="mb-3"><b className="text-dark">D</b> Third-party vendor protection</p>
                    {/* Button */}
                    <a href="#" className="btn btn-sm btn-success-soft mb-0" data-bs-toggle="modal" data-bs-target="#editQuestion">Edit</a>
                    <button className="btn btn-danger-soft btn-sm mb-0">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Accordion END */}
          </div>
          {/* Card body START */}
        </div>
        {/* Card END */}
        {/* Student quiz result START */}
        <div className="card border bg-transparent rounded-3 mt-4">
          {/* Card header START */}
          <div className="card-header bg-transparent border-bottom">
            <h3 className="mb-0">Student quiz result</h3>
          </div>
          {/* Card header END */}
          {/* Card body START */}
          <div className="card-body">
            {/* Search and select START */}
            <div className="row g-3 align-items-center justify-content-between mb-4">
              {/* Search */}
              <div className="col-md-8">
                <form className="rounded position-relative">
                  <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                  <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                    <i className="fas fa-search fs-6 " />
                  </button>
                </form>
              </div>
              {/* Select option */}
              <div className="col-md-3">
                {/* Short by filter */}
                <form>
                  <select className="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm">
                    <option value>Sort by</option>
                    <option>Free</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                </form>
              </div>
            </div>
            {/* Search and select END */}
            {/* Student list table START */}
            <div className="table-responsive border-0">
              <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                {/* Table head */}
                <thead>
                  <tr>
                    <th scope="col" className="border-0 rounded-start">Student name</th>
                    <th scope="col" className="border-0">Course name</th>
                    <th scope="col" className="border-0">Date</th>
                    <th scope="col" className="border-0">Points</th>
                    <th scope="col" className="border-0 rounded-end">Action</th>
                  </tr>
                </thead>
                {/* Table body START */}
                <tbody>
                  {/* Table item */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center">
                        {/* Image */}
                        <div className="avatar avatar-sm me-2">
                          <img src="assets/images/avatar/01.jpg" className="rounded" alt />
                        </div>
                        <div>
                          {/* Title */}
                          <h6 className="mb-0"><a href="#">Lori Stevens</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <h6 className="table-responsive-title mt-2 mt-md-0 mb-0"><a href="#">The complete Digital Marketing Courses - 12 Course in 1</a></h6>
                    </td>
                    {/* Table data */}
                    <td>7/1/2023</td>
                    {/* Table data */}
                    <td>450/500</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-success-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message"><i className="far fa-envelope" /></a>
                    </td>
                  </tr>
                  {/* Table item */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center">
                        {/* Image */}
                        <div className="avatar avatar-sm me-2">
                          <img src="assets/images/avatar/03.jpg" className="rounded" alt />
                        </div>
                        <div>
                          {/* Title */}
                          <h6 className="mb-0"><a href="#">Dennis Barrett</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <h6 className="table-responsive-title mt-2 mt-md-0 mb-0"><a href="#">The complete Digital Marketing Courses - 12 Course in 1</a></h6>
                    </td>
                    {/* Table data */}
                    <td>6/1/2023</td>
                    {/* Table data */}
                    <td>425/500</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-success-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message"><i className="far fa-envelope" /></a>
                    </td>
                  </tr>
                  {/* Table item */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center">
                        {/* Image */}
                        <div className="avatar avatar-sm me-2">
                          <img src="assets/images/avatar/04.jpg" className="rounded" alt />
                        </div>
                        <div>
                          {/* Title */}
                          <h6 className="mb-0"><a href="#">Billy Vasquez</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <h6 className="table-responsive-title mt-2 mt-md-0 mb-0"><a href="#">The complete Digital Marketing Courses - 12 Course in 1</a></h6>
                    </td>
                    {/* Table data */}
                    <td>5/1/2023</td>
                    {/* Table data */}
                    <td>385/500</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-success-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message"><i className="far fa-envelope" /></a>
                    </td>
                  </tr>
                  {/* Table item */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center">
                        {/* Image */}
                        <div className="avatar avatar-sm me-2">
                          <img src="assets/images/avatar/09.jpg" className="rounded" alt />
                        </div>
                        <div>
                          {/* Title */}
                          <h6 className="mb-0"><a href="#">Carolyn Ortiz</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <h6 className="table-responsive-title mt-2 mt-md-0 mb-0"><a href="#">The complete Digital Marketing Courses - 12 Course in 1</a></h6>
                    </td>
                    {/* Table data */}
                    <td>5/1/2023</td>
                    {/* Table data */}
                    <td>398/500</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-success-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message"><i className="far fa-envelope" /></a>
                    </td>
                  </tr>
                  {/* Table item */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center">
                        {/* Image */}
                        <div className="avatar avatar-sm me-2">
                          <img src="assets/images/avatar/07.jpg" className="rounded" alt />
                        </div>
                        <div>
                          {/* Title */}
                          <h6 className="mb-0"><a href="#">Larry Lawson</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <h6 className="table-responsive-title mt-2 mt-md-0 mb-0"><a href="#">The complete Digital Marketing Courses - 12 Course in 1</a></h6>
                    </td>
                    {/* Table data */}
                    <td>4/1/2023</td>
                    {/* Table data */}
                    <td>428/500</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-success-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message"><i className="far fa-envelope" /></a>
                    </td>
                  </tr>
                  {/* Table item */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center">
                        {/* Image */}
                        <div className="avatar avatar-sm me-2">
                          <img src="assets/images/avatar/06.jpg" className="rounded" alt />
                        </div>
                        <div>
                          {/* Title */}
                          <h6 className="mb-0"><a href="#">Frances Guerrero</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <h6 className="table-responsive-title mt-2 mt-md-0 mb-0"><a href="#">The complete Digital Marketing Courses - 12 Course in 1</a></h6>
                    </td>
                    {/* Table data */}
                    <td>4/1/2023</td>
                    {/* Table data */}
                    <td>486/500</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-success-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message"><i className="far fa-envelope" /></a>
                    </td>
                  </tr>
                </tbody>
                {/* Table body END */}
              </table>
            </div>
            {/* Student list table END */}
            {/* Pagination START */}
            <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
              {/* Content */}
              <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
              {/* Pagination */}
              <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                  <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></a></li>
                  <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                  <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
                  <li className="page-item mb-0"><a className="page-link" href="#">3</a></li>
                  <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-right" /></a></li>
                </ul>
              </nav>
            </div>
            {/* Pagination END */}
          </div>
          {/* Card body START */}
        </div>
        {/* Student quiz result END */}
      </div>
      {/* Main content END */}
    </div>{/* Row END */}
  </div>
</section>
{/* =======================
Inner part END */}


       <Footer />
    </div>

  )
}

export default IntructorQuiz