import React from 'react';

const Map = () => {
  return (
    <div id="map" style={{ width: '251px', height: '202px' }}>
      <iframe
        id="iGmap"
        width="251"
        height="202"
        src="https://www.google.com/maps/place/HOTEL+SARITA/@20.9531563,86.1316025,17z/data=!3m1!4b1!4m9!3m8!1s0x3a195180de5804d9:0xfd5b18ea43fa123!5m2!4m1!1i2!8m2!3d20.9531563!4d86.1316025!16s%2Fg%2F1q64hqtdq?entry=ttu"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default Map;