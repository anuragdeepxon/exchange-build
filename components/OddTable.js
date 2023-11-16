"use client";

import React, { useState } from "react";
import TableRow from "./Table/TableRow";
import Popup from "./Table/Popup"; // This is a component you'll need to create

const OddTable = () => {
  const [popupData, setPopupData] = useState(null);

  const rows = [
    {
      rowData: [
        {
          content: "Kings Bay Royals vs Pigeon Point Skiers",
          textAlign: "text-left",
          additionalClasses: "font-medium",
        },
        { content: "PTE0" },
        { content: "1.91", bgColor: "bg-pink-200" },
        { content: "1.55", bgColor: "bg-blue-200" },
        { content: "2.64", bgColor: "bg-pink-200" },
      ],
    },
    {
      rowData: [
        {
          content: "Central Stags vs Canterbury Kings",
          textAlign: "text-left",
          additionalClasses: "font-medium",
        },
        { content: "PTE0" },
        { content: "2.9", bgColor: "bg-pink-200" },
        { content: "2.5", bgColor: "bg-blue-200" },
        { content: "2.24", bgColor: "bg-pink-200" },
      ],
    },
    {
      rowData: [
        {
          content: "Western Australia vs South Australia Redbacks",
          textAlign: "text-left",
          additionalClasses: "font-medium",
        },
        { content: "PTE2,809" },
        { content: "4.4", bgColor: "bg-pink-200" },
        { content: "", bgColor: "bg-blue-200" },
        { content: "", bgColor: "bg-pink-200" },
      ],
    },
    {
      rowData: [
        {
          content: "Karachi Region Whites vs Multan Region",
          textAlign: "text-left",
          additionalClasses: "font-medium",
        },
        { content: "PTE2,491" },
        { content: "", bgColor: "bg-pink-200" },
        { content: "", bgColor: "bg-blue-200" },
        { content: "", bgColor: "bg-pink-200" },
      ],
    },
    {
      rowData: [
        {
          content: "Melbourne Stars WBBL vs Hobart Hurricanes WBBL",
          textAlign: "text-left",
          additionalClasses: "font-medium",
        },
        { content: "PTE1,440" },
        { content: "1.87", bgColor: "bg-pink-200" },
        { content: "1.91", bgColor: "bg-blue-200" },
        { content: "2.08", bgColor: "bg-pink-200" },
      ],
    },
    {
      rowData: [
        {
          content: "Brisbane Heat WBBL vs Melbourne Renegades WBBL",
          textAlign: "text-left",
          additionalClasses: "font-medium",
        },
        { content: "PTE2,759" },
        { content: "2.16", bgColor: "bg-pink-200" },
        { content: "2.82", bgColor: "bg-blue-200" },
        { content: "3", bgColor: "bg-pink-200" },
      ],
    },
    {
      rowData: [
        {
          content: "Tasmania Tigers vs New South Wales Blues",
          textAlign: "text-left",
          additionalClasses: "font-medium",
        },
        { content: "PTE348" },
        { content: "1.61", bgColor: "bg-pink-200" },
        { content: "3.6", bgColor: "bg-blue-200" },
        { content: "", bgColor: "bg-pink-200" },
      ],
    },
    {
      rowData: [
        {
          content: "Sydney Thunder WBBL vs Perth Scorchers WBBL",
          textAlign: "text-left",
          additionalClasses: "font-medium",
        },
        { content: "PTE0" },
        { content: "2.44", bgColor: "bg-pink-200" },
        { content: "2.9", bgColor: "bg-blue-200" },
        { content: "1.53", bgColor: "bg-pink-200" },
      ],
    },
    {
      rowData: [
        {
          content: "Sydney Sixers WBBL vs Adelaide Strikers WBBL",
          textAlign: "text-left",
          additionalClasses: "font-medium",
        },
        { content: "PTE0" },
        { content: "2.16", bgColor: "bg-pink-200" },
        { content: "2.5", bgColor: "bg-blue-200" },
        { content: "1.67", bgColor: "bg-pink-200" },
      ],
    },
    {
      rowData: [
        {
          content: "Melbourne Renegades WBBL vs Hobart Hurricanes WBBL",
          textAlign: "text-left",
          additionalClasses: "font-medium",
        },
        { content: "PTE1" },
        { content: "1.75", bgColor: "bg-pink-200" },
        { content: "2.24", bgColor: "bg-blue-200" },
        { content: "1.81", bgColor: "bg-pink-200" },
      ],
    },
    {
      rowData: [
        {
          content: "Melbourne Stars WBBL vs Brisbane Heat WBBL",
          textAlign: "text-left",
          additionalClasses: "font-medium",
        },
        { content: "PTE10" },
        { content: "2.08", bgColor: "bg-pink-200" },
        { content: "4.4", bgColor: "bg-blue-200" },
        { content: "1.3", bgColor: "bg-pink-200" },
      ],
    },
  ];

  const showPopup = (data) => {
    setPopupData(data);
  };

  const hidePopup = () => {
    setPopupData(null);
  };

  return (
    <>
      <div className="bg-yellow-500 mt-4 p-2 shadow-md flex items-center justify-between">
        <div className="font-bold text-sm text-gray-800">Sports Highlights</div>

        <div className="flex items-center">
          <label htmlFor="view-by" className="text-sm text-gray-800">
            View by
          </label>
          <select
            id="view-by"
            className="bg-yellow-600 ml-4 text-sm text-gray-800 py-2 px-4 rounded cursor-pointer transition duration-300"
          >
            <option>Time</option>
          </select>
        </div>
      </div>

      <div className="bg-yellow-500 p-2 pb-0 shadow-md flex items-center justify-between">
        <div className="font-bold text-sm text-gray-800">
          <div className="flex gap-1">
            {["Cricket", "Soccer", "Tennis", "E-Soccer"].map((sport) => (
              <button
                key={sport}
                className="gradient-sports text-slate-50 py-1 px-8 rounded-tl rounded-tr"
              >
                {sport}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white pb-0 shadow-md flex items-center justify-between">
        <div className="overflow-x-auto min-w-full">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-sm">Matched</th>
                <th className="px-6 py-3 text-sm">Matched</th>
                <th className="px-6 py-3 text-sm">1</th>
                <th className="px-6 py-3 text-sm">X</th>
                <th className="px-6 py-3 text-sm">2</th>
                <th className="px-1 py-3 text-sm"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  rowData={row.rowData}
                  showPopup={showPopup}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup Component */}
      {popupData && <Popup data={popupData} onClose={hidePopup} />}
    </>
  );
};

export default OddTable;
