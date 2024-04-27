import React from 'react';
import RegisteredImage from '/Registered.png';
import NotRegisteredImage from '/NotRegistered.png';

const Registered = ({ isRegistered }) => {
  return (
    <div className="map register">
      {/* Image */}
      <img src={isRegistered ? RegisteredImage : NotRegisteredImage} alt={isRegistered ? 'Registered' : 'Not Registered'} />
    </div>
  );
};

export default Registered;
