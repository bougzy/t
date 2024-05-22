import React, { useEffect } from 'react';

const TidioChatWidget = () => {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = '//code.tidio.co/jl1qdt03uplvpse85zh7wbizokm3rp3p.js';
        script.async = true;

        // Append the script to the document body
        document.body.appendChild(script);

        // Clean up by removing the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return null; // You can return null as the component doesn't render anything
};

export default TidioChatWidget;



