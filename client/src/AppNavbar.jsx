// import React, { useState } from 'react';
// import { Container, Form, Nav, Navbar } from 'react-bootstrap';
// import { HiMagnifyingGlass } from "react-icons/hi2";
// import hallmarkk from "./assets/hallmarkk.png";
// import Sidebar from './Sidebar';

// function AppNavbar({ isLoggedIn }) {
//   const [showForm, setShowForm] = useState(false);

//   const handleSearchButtonClick = () => {
//     setShowForm(!showForm); // Toggle the showForm state
//   };

//   const handleHideFormButtonClick = () => {
//     setShowForm(false); // Hide the form
//   };

//   const handleLogout = () => {
//     // Handle logout logic here
//     // For simplicity, let's assume logout just updates the isLoggedIn state to false
//     // You can add more logic like clearing localStorage, etc.
//     // Redirect to the home page
//     navigate('/');
//   };

//   return (
//     <>
//       <Navbar expand="lg" className="p-3" style={{ backgroundColor: "purple" }}>
//         <Container fluid>
//           {/* Navbar Brand */}
//           <Navbar.Brand href="#home">
//             <img src={hallmarkk} alt="Hallmarkk" className="w-50" />
//           </Navbar.Brand>

//           {/* Hamburger menu toggle */}
//           <Navbar.Toggle aria-controls="navbarScroll" className="fs-4" style={{ borderColor: "white" }} />

//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: '100px' }}
//               navbarScroll
//             >
//               <Nav.Link href="/" className="fw-bold fs-3 text-white"></Nav.Link>

//               {isLoggedIn ? (
//                 <>
//                 <Button variant="outline-white" onClick={handleLogout} className="me-2">Logout</Button>
//                 </>
//               ) : (
//                 <>
//               <Nav.Link href="#action1" className="fw-bold fs-3 text-white"></Nav.Link>
//               <Nav.Link href="/register" className="fw-bold fs-3 text-white">REGISTER</Nav.Link>
//               <Nav.Link href="/login" className="fw-bold fs-3 text-white">LOGIN</Nav.Link>
//               {/* <Nav.Link href="/my" className="fw-bold fs-3 text-white">MY</Nav.Link> */}
           

//             {showForm && (
//               <Form className="d-flex ">
//                 <Form.Control
//                   type="search"
//                   placeholder="Search"
//                   className="me-2"
//                   aria-label="Search"
//                   />
//                 <div
//                   style={{
//                     backgroundColor: 'purple',
//                   }}
//                   >
//                   <HiMagnifyingGlass
//                     style={{
//                       color: '#ffffff',
//                     }}
//                     onClick={handleHideFormButtonClick} className="fw-bold fs-3 text-white" />
//                 </div>
//               </Form>
//                 )}
//                 </>
//             )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <Sidebar />
//     </>
//   );
// }

// export default AppNavbar;

import React, { useState } from 'react';
import { Container, Form, Nav, Navbar, Button } from 'react-bootstrap';
import { HiMagnifyingGlass } from "react-icons/hi2";
import hallmarkk from "./assets/hallmarkk.png";
import Sidebar from './Sidebar';
import Logout from './Logout'; // Import Logout component

function AppNavbar({ isLoggedIn }) {
    const [showForm, setShowForm] = useState(false);

    const handleSearchButtonClick = () => {
        setShowForm(!showForm); // Toggle the showForm state
    };

    const handleHideFormButtonClick = () => {
        setShowForm(false); // Hide the form
    };

    const handleLogout = () => {
        // Handle logout logic here
        // For simplicity, let's assume logout just updates the isLoggedIn state to false
        // You can add more logic like clearing localStorage, etc.
        // Redirect to the home page
        // navigate('/');
    };

    return (
        <>
            <Navbar expand="lg" className="p-3" style={{ backgroundColor: "purple" }}>
                <Container fluid>
                    {/* Navbar Brand */}
                    <Navbar.Brand href="/">
                        <img src={hallmarkk} alt="Hallmarkk" className="w-50" />
                    </Navbar.Brand>

                    {/* Hamburger menu toggle */}
                    <Navbar.Toggle aria-controls="navbarScroll" className="fs-4" style={{ borderColor: "white" }} />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/" className="fw-bold fs-3 text-white"></Nav.Link>

                            {isLoggedIn ? (
                                <>
                                    <Logout /> {/* Render Logout component */}
                                </>
                            ) : (
                                <>
                                    {/* Render register and login links only if not logged in */}
                                    <Nav.Link href="/register" className="fw-bold fs-3 text-white">REGISTER</Nav.Link>
                                    <Nav.Link href="/login" className="fw-bold fs-3 text-white">LOGIN</Nav.Link>
                                </>
                            )}

                            {/* Search form */}
                            {showForm && (
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <div
                                        style={{
                                            backgroundColor: 'purple',
                                        }}
                                    >
                                        <HiMagnifyingGlass
                                            style={{
                                                color: '#ffffff',
                                            }}
                                            onClick={handleHideFormButtonClick} className="fw-bold fs-3 text-white" />
                                    </div>
                                </Form>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Sidebar />
        </>
    );
}

export default AppNavbar;

