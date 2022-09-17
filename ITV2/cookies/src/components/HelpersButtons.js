import React from "react";

const HelpersButtons = ({ cookies, handleClick, price }) => {
  return (
    <div>
      <button
        id="butt"
        onClick={() => handleClick(price)}
        disabled={cookies < price}
      >
        {price}
      </button>
    </div>
  );
};

export default HelpersButtons;
