import React from "react";

const Popup = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="popup-container">
      {/* Render your popup content based on `data` */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;
