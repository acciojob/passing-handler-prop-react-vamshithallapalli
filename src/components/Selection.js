import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({ background: "" });

  const handleClick = () => {
    applyColor(setStyle);
  };

  return (
    <div className="fix-box" style={style} onClick={handleClick}>
      <h4 className="subheading">Selection</h4>
    </div>
  );
};

export default Selection;
