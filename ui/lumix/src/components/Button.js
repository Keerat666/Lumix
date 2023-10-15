import React from "react";

const Button = ({ name, handleOnClick, className }) => {
	return (
		<button
			className={className}
			onClick={handleOnClick}>
			{name}
		</button>
	);
};

export default Button;
