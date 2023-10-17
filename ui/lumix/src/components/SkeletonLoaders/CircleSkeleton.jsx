import React, { Fragment, useState, useRef, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import ColorPicker from '../shared/ColorPicker';

function CircleSkeleton({
    width = '40px',
    height = '40px',
    customize = false
}) {
    const [CircleWHratio, setCircleWHratio] = useState(40);
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
            <div style={{
                width: customize ? `${CircleWHratio}px` : width,
                height: customize ? `${CircleWHratio}px` : height,
            }}>
                <Skeleton
                    circle
                    height="100%"
                    style={{
                        width: "100%",
                        height: "100%",
                        lineHeight: "1",
                        display: "block"
                    }}
                    baseColor={customBaseColor}
                    highlightColor={customHighlightColor}
                />
            </div>
            {customize && (
                <div style={{ padding: "10px 0px", display: "flex", flexDirection: "column", gap: 20 }}>
                    <div>
                        <label>Width Height ratio&nbsp;:&nbsp;</label>
                        <input
                            value={CircleWHratio || 0}
                            type='number'
                            onChange={(event) => {
                                setCircleWHratio(event.target.value);
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
            )}
        </Fragment>
    )
}

export default CircleSkeleton;
