/**
 * DatePicker component allows user to select a date from a calendar.
 * @module DatePicker
 * @param {function} props.onDateChange - A function to be called when the date changes.
 * @param {number} props.borderWidth - The thickness of the border.
 * @param {string} props.borderColor - The color of the border.
 * @param {number} props.pickerHeight - The height of the date picker.
 * @param {number} props.pickerWidth - The width of the date picker.
 * @param {number} props.fontSize - The font size of the date picker.
 * @return {JSX.Element} - A JSX element representing the DatePicker component.
 */

import { useState } from "react";
import PropTypes from 'prop-types';

const DatePicker = ({ 
    onDateChange, 
    borderWidth, 
    borderColor, 
    pickerHeight, 
    pickerWidth, 
    fontSize 
}) => {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    if (onDateChange) {
      onDateChange(e.target.value);
    }
  };

  return (
    <input
      type="date"
      value={date}
      onChange={handleDateChange}
      style={{
        borderWidth: `${borderWidth}px`,
        borderColor: `${borderColor}`,
        height: `${pickerHeight}px`,
        width: `${pickerWidth}px`,
        fontSize: `${fontSize}px`,
        padding: "0 10px",
      }}
    />
  );
};

DatePicker.propTypes = {
    onDateChange: PropTypes.func,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    pickerHeight: PropTypes.number,
    pickerWidth: PropTypes.number,
    fontSize: PropTypes.number
};

DatePicker.defaultProps = {
    onDateChange: () => {},
    borderWidth: 2,
    borderColor: "#000000",
    pickerHeight: 50,
    pickerWidth: 160,
    fontSize: 20
};

export default DatePicker;
