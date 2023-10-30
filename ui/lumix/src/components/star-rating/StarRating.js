import React, { useState } from "react";
import PropTypes from "prop-types";
import Star from "./Star";

const wrapperStyle = {
	display: "flex",
	alignItems: "center",
	gap: "16px",
};

const starWrapperStyle = {
	display: "flex",
};

const StarRating = ({ 
	maxRating = 5,
	color = "#ffc107",
	size = 24,
	className = "",
	messages = [],
	defaultRating = 0,
	onSetRating,
}) => {
	const [rating, setRating] = useState(defaultRating);
	const [tempRating, setTempRating] = useState(0);

	const textStyle = {
		lineHeight: "0",
		margin: "0",
		color,
		fontSize: `${size / 1.5}px`,
		fontWeight: "500",
	};

	function handleRate(rating) {
		setRating(rating);
		onSetRating && onSetRating(rating);
	}

	return (
		<div style={wrapperStyle} className={className}>
			<div style={starWrapperStyle}>
				{Array.from({ length: maxRating }, (_, i) => (
				<Star
					key={i}
					full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
					onRate={() => handleRate(i + 1)}
					onHoverIn={() => setTempRating(i + 1)}
					onHoverOut={() => setTempRating(0)}
					color={color}
					size={size}
					className={className}
				/>
				))}
			</div>
			<p style={textStyle}>
				{messages.length === maxRating
				? messages[tempRating ? tempRating - 1 : rating - 1]
				: tempRating || rating || ""}
			</p>
		</div>
	)
};


StarRating.propTypes = {
	maxRating: PropTypes.number,
	color: PropTypes.string,
	size: PropTypes.number,
	className: PropTypes.string,
	messages: PropTypes.arrayOf(PropTypes.string),
	defaultRating: PropTypes.number,
	onSetRating: PropTypes.func,
};

export default StarRating;