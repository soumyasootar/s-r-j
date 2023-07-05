import React from 'react';

const Map = () => {
  return (
    // <div id="map" style={{ width: '251px', height: '202px' }}>
      <iframe 
      
        title='map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.9840347322665!2d86.1290222108994!3d20.953156280596822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a195180de5804d9%3A0xfd5b18ea43fa123!2sHOTEL%20SARITA!5e0!3m2!1sen!2sin!4v1688511888128!5m2!1sen!2sin"
        width="100%"
        height="750"
        style={{ border: '0',marginBottom:"100px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    // </div>
  );
};

export default Map;
