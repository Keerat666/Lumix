import React from "react";

const Button = ({ name, handleOnClick }) => {
	return (
		<button
			className="btn btn-primary btn-lg btn-block w-25"
			onClick={handleOnClick}>
			{name}
		</button>
	);
};

export default Button;
