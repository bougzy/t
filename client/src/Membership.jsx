import React, { useState, useEffect } from 'react';

const Membership = () => {
  const [enlarged, setEnlarged] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Check if the screen width is less than or equal to 768px (considered as mobile view)
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handleResize initially to set isMobileView based on initial screen width

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleImageClick = () => {
    if (isMobileView) {
      setEnlarged(!enlarged); // Toggle the state between normal and enlarged only on mobile view
    }
  };

  return (
    <div className="p-5 mt-4 vh-100" style={{ background: "purple" }}>
      <h4 className="text-white text-center">Get our Membership Card</h4>
      <hr className="text-white fs-4" />
      <p className="text-white d-block">Are you ready to elevate your experience with our organization to new heights? Become a valued member today and unlock a world of exclusive benefits and privileges that will enhance every aspect of your journey with us.</p>
      <div className="text-center">
        <img 
          src="https://i.ibb.co/T80YWrh/HALLMARKCARD.png" 
          alt="Hallmarkk" 
          className={`img-fluid ${isMobileView && enlarged ? 'w-100' : 'w-75'} mb-5 text-center`} 
          style={{ cursor: isMobileView ? 'pointer' : 'default' }}
          onClick={handleImageClick} 
        />
      </div>
    </div>
  );
};

export default Membership;
