/**
 * Accordion component allows user to view a list of items in an expandable format.
 * @module Accordion
 * @param {array} props.items - An array of items to be displayed in the accordion. Each item should be an object with a `title` and `content` property.
 * @param {string} props.verticalAlignment - The vertical alignment of the accordion items. It can be `flex-start`, `flex-end`, `center`, `space-between`, or `space-around`.
 * @param {string} props.titleColor - The color of the title in hex format.
 * @param {number} props.width - The width of the accordion in px.
 * @param {string} props.contentColor - The color of the content in hex format.
 * @param {number} props.titleSize - The font size of the title in px.
 * @param {number} props.contentSize - The font size of the content in px.
 * @return {JSX.Element} - A JSX element representing the Accordion component.
 */

import { useState } from "react";
import PropTypes from "prop-types";

const Accordion = ({
  items,
  verticalAlignment,
  titleColor,
  width,
  contentColor,
  titleSize,
  contentSize,
}) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleClick = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        justifyContent: `${verticalAlignment}`,
      }}
    >
      <div className="accordion">
        {items.map((item, index) => (
          <div
            className="section"
            key={index}
            style={{
              marginBottom: "5px",
            }}
          >
            <div
              className="title"
              onClick={() => handleClick(index)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
                backgroundColor: `${titleColor}`,
                fontSize: `${titleSize}px`,
                width: `${width}px`,
                border: openIndexes.includes(index) ? "1px solid black" : "",
              }}
            >
              {item.title}
              <span>{openIndexes.includes(index) ? "-" : "+"}</span>
            </div>
            {openIndexes.includes(index) && (
              <div
                className="content"
                style={{
                  marginBottom: "5px",
                  padding: "10px 20px",
                  backgroundColor: `${contentColor}`,
                  fontSize: `${contentSize}px`,
                  width: `${width}px`,
                }}
              >
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  verticalAlignment: PropTypes.string,
  titleColor: PropTypes.string,
  width: PropTypes.number,
  contentColor: PropTypes.string,
  titleSize: PropTypes.number,
  contentSize: PropTypes.number,
};

Accordion.defaultProps = {
  verticalAlignment: "flex-start",
  titleColor: "#dbd9d9",
  width: 800,
  titleSize: 30,
  contentSize: 20,
  contentColor: "#e8e6e6",
};

export default Accordion;