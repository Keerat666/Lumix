import React, { useMemo, useState } from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import PropTypes from "prop-types";
function Rate({ count, rating, color, onRating }) {
  const [hoverRating, sethoverRating] = useState(0);
  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    } else {
      return color.unfilled;
    }
  };
  const startRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((index) => (
        <StarRoundedIcon
          key={index}
          className="cursor-pointer"
          onClick={() => onRating(index)}
          style={{ color: getColor(index) }}
          onMouseEnter={() => sethoverRating(index)}
          onMouseLeave={() => sethoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);
  return <div>{startRating}</div>;
}
Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onRating: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};
Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#f5eb3b",
    unfilled: "#DCDCDC",
  },
};

export default Rate;
