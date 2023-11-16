"use client";

import React from "react";

const TableCell = ({
  content,
  bgColor = "",
  textAlign = "text-center",
  additionalClasses = "",
  showPopup,
  field, // Additional prop to identify the type of content
}) => {
  // Helper function to determine box style
  const getBoxStyle = (field, data) => {
    let boxStyle = additionalClasses;
    if (["away", "draw", "home"].includes(field)) {
      switch (field) {
        case "away":
        case "home":
          boxStyle += " text-2xl font-bold text-gray-900";
          break;
        case "draw":
          boxStyle += " text-2xl font-bold text-gray-900 bg-gray-300";
          break;
        default:
          boxStyle += "";
      }
    }
    return boxStyle;
  };

  // Helper function to format data
  const formatData = (data, field) => {
    if (field === "teams") {
      // Add your logic here to format 'teams' data
      // You may need to adjust this based on your data structure
    }
    return data;
  };

  const boxStyle = getBoxStyle(field, content);
  const formattedContent = formatData(content, field);

  // Implement onClick logic based on your requirements
  const onClick = () => {
    if (data !== "------") {
      showPopup(data);
    }
    // Add any additional onClick logic here
  };

  return (
    <td
      className={`px-6 py-3 whitespace-no-wrap ${bgColor} ${textAlign} ${boxStyle}`}
      // onClick={onClick}
    >
      {formattedContent}
    </td>
  );
};

export default TableCell;
