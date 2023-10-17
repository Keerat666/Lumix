import React, { Fragment, useState, useRef } from 'react'
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import ColorPicker from '../shared/ColorPicker';

function RectangleSkeleton({
    width = 180,
    height = 15,
    customize = false
}) {
    const [customWidth, setCustomWidth] = useState(400);
    const [customHeight, setCustomHeight] = useState(20);
    const [customBaseColor, setCustomBaseColor] = useState("");
    const [customHighlightColor, setCustomHighlightColor] = useState("");

    const handleBaseColorChange = (color) => {
        setCustomBaseColor(color.hex);
    };

    const handleHighlightColorChange = (color) => {
        setCustomHighlightColor(color.hex);
    };
    return (
        <Fragment>
            <div>
                <Skeleton
                    width={customize ? `${customWidth}px` : width}
                    height={customize ? `${customHeight}px` : height}
                    baseColor={customBaseColor}
                    highlightColor={customHighlightColor}
                />
            </div>
            {customize && <div style={{ padding: "10px 0px", display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                    <label>Width&nbsp;:&nbsp;</label>
                    <input
                        value={customWidth || 0}
                        type='number'
                        onChange={(event) => {
                            setCustomWidth(event.target.value);
                        }}
                    /> px
                </div>
                <div>
                    <label>Height&nbsp;:&nbsp;</label>
                    <input
                        value={customHeight || 0}
                        type='number'
                        onChange={(event) => {
                            setCustomHeight(event.target.value);
                        }}
                    /> px
                </div>
                <div>
                    <label>Base color&nbsp;:&nbsp;</label>
                    <input
                        value={customBaseColor || ""}
                        type='text'
                        onChange={(event) => {
                            setCustomBaseColor(event.target.value);
                        }}
                    />
                    <ColorPicker
                        color={customBaseColor}
                        handleColorChange={handleBaseColorChange}
                    />
                </div>
                <div>
                    <label>Highlight color&nbsp;:&nbsp;</label>
                    <input
                        value={customHighlightColor || ""}
                        type='text'
                        onChange={(event) => {
                            setCustomHighlightColor(event.target.value);
                        }}
                    />
                    <ColorPicker
                        color={customHighlightColor}
                        handleColorChange={handleHighlightColorChange}
                    />
                </div>
            </div>
            }
        </Fragment>
    )
}

export default RectangleSkeleton