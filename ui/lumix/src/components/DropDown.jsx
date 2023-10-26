import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from "prop-types";

function DropDown({ options, name, onChange }) {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(true);
    onChange && onChange({ target: { name, value: option.value } });
  };

  return (
    <div className="relative">
      <button
        className="flex w-full border-2 border-solid border-black justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-lg px-2">{selectedOption.label}</div>
        {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </button>
      <div className="absolute bg-white w-full flex flex-col shadow-2xl">
        {options.map((option) => (
          <button
            className={`text-left ${
              isOpen ? "hidden" : "block"
            } px-2 hover:bg-slate-300 text-base py-2 m-0`}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
DropDown.propTypes = {
  options: PropTypes.array,
};
export default DropDown;
