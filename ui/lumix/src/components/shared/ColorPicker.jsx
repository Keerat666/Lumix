import React, { Fragment, useState } from 'react'
import { SketchPicker } from 'react-color';

const ColorPicker = ({
    color,
    handleColorChange
}) => {
    const [showPicker, setShowPicker] = useState(false);

    return (
        <Fragment>
            <span
                onClick={() => setShowPicker(!showPicker)}
                style={{ cursor: 'pointer' }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={color}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 18.59V16h4v4.59L17.59 14H14v-4h-4v4H6.41L10 16.59z" />
                </svg>
            </span>
            {showPicker &&
                <span >
                    <SketchPicker
                        color={color}
                        onChange={handleColorChange}
                    />
                </span>
            }
        </Fragment>
    )
}

export default ColorPicker