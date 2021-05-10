import React from 'react'
// import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// const authenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#/" className="nav-bg">Home</Nav.Link>
//     <Nav.Link href="#favorites" className="nav-bg">Favorites</Nav.Link>
//     <Nav.Link href="#change-password" className="nav-bg">Change Password</Nav.Link>
//     <Nav.Link href="#sign-out" className="nav-bg">Sign Out</Nav.Link>
//   </Fragment>
// )
//
// const unauthenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#sign-up" className="nav-bg">Sign Up</Nav.Link>
//     <Nav.Link href="#sign-in" className="nav-bg">Sign In</Nav.Link>
//   </Fragment>
// )
//
// const alwaysOptions = (
//   <Fragment>
//   </Fragment>
// )

const Header = ({ user }) => (
  <Navbar className="nav-header" variant="dark" expand="md">
    <Navbar.Brand href="#">
      Exoplanets
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    { /* <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse> */ }
  </Navbar>
)

export default Header
