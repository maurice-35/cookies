import React from 'react';

const HelpersButtons = ({ cookies, handleClick, price }) => {
	return (
		<div><button onClick={() => handleClick(price)} disabled={cookies < price}>{price}</button></div>
	)
}

export default HelpersButtons;