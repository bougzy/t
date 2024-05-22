import React, { useState, useEffect } from 'react';
import { Collapse } from 'react-bootstrap';
import './Sidebar.css'; // Import CSS for styling
import Hamburger from 'hamburger-react';

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as per your requirement
    };

    handleResize(); // Call once to set initial value

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className="text-white" style={{background: "purple"}}>

      {isDesktop && (
        <Hamburger
          toggled={open}
          toggle={setOpen}
          className="hamburger-icon"
        />
      )}
    </div>
      <Collapse in={open}>
        <div style={{background:"purple"}} id="sidebar-collapse" className={open ? 'show' : ''}>
          <ul className="list-unstyled">
            <li className="text-white fw-bold fs-4">MOVIES</li>
            <li className="text-white fw-bold fs-4">ABOUT</li>
          </ul>
        </div>
      </Collapse>
    </>
  );
}

export default Sidebar;
