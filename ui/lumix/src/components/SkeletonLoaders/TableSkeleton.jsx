import React, { Fragment, useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TableSkeleton = ({
    columns,
    rows,
    customize
}) => {
    const [columnSize, setColumnSize] = useState(columns);
    const [rowSize, setRowSize] = useState(rows);
    const [paddingY, setpaddingY] = useState(2);
    const [paddingX, setpaddingX] = useState(20);

    return (
        <Fragment>
            {customize && <>
                <div style={{ padding: "10px 0px", display: "flex", flexDirection: "row", gap: 20 }}>
                    <div>
                        <label>Columns Size&nbsp;:&nbsp;</label>
                        <input
                            value={columnSize || 0}
                            type='number'
                            onChange={(event) => {
                                setColumnSize(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label>Rows size&nbsp;:&nbsp;</label>
                        <input
                            value={rowSize || 0}
                            type='number'
                            onChange={(event) => {
                                setRowSize(event.target.value);
                            }}
                        />
                    </div>
                </div>
                <div style={{ padding: "10px 0px", display: "flex", flexDirection: "row", gap: 20 }}>
                    <div>
                        <label>Padding Y&nbsp;:&nbsp;</label>
                        <input
                            value={paddingY || 0}
                            type='number'
                            onChange={(event) => {
                                setpaddingY(event.target.value);
                            }}
                        /> px
                    </div>
                    <div>
                        <label>Padding X&nbsp;:&nbsp;</label>
                        <input
                            value={paddingX || 0}
                            type='number'
                            onChange={(event) => {
                                setpaddingX(event.target.value);
                            }}
                        /> px
                    </div>
                </div></>
            }
            <table>
                <thead>
                    <tr
                        style={{ borderBottom: "1px solid #e1e3ea" }}
                    >
                        {Array.from({ length: customize ? columnSize : columns }).map((_, index) => (
                            <th key={index} style={{ padding: "00px 20px" }}>
                                Column {index + 1}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: customize ? rowSize : rows }).map((_, index) => (
                        <tr key={index}>
                            {Array.from({ length: customize ? columnSize : columns }).map((_, index) => (
                                <td key={index} style={{ padding: `${paddingY}px ${paddingX}px` }}>
                                    <Skeleton width={40} enableAnimation={true} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default TableSkeleton