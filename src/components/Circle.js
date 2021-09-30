import React from "react";

const Circle = ({ icon }) => {
  return (
    <div className="circle">
      <img src={icon} alt="link" className="circle__icon" />
    </div>
  );
};

export default Circle;
