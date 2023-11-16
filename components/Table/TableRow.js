import React from 'react';
import TableCell from './TableCell';


const TableRow = ({ rowData, rowClasses = '' }) => {
    return (
        <tr className={`text-xs text-gray-700 p-1 border-2 ${rowClasses}`}>
            {rowData.map((cell, index) => (
                <TableCell
                    key={index}
                    content={cell.content}
                    bgColor={cell.bgColor}
                    textAlign={cell.textAlign}
                    additionalClasses={cell.additionalClasses}
                />
            ))}
        </tr>
    );
};

export default TableRow;
