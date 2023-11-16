// components/Sidebar.js
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-[17vw]  ml-5" aria-label="Sidebar">
      <div className="overflow-y-auto min-h-screen mt-1 bg-gray-50 font-semibold">
        <ul className="">
          <li className="gradient-sports  p-2">
            <p className="text-xs text-white">Sports</p>
          </li>
          <li>
            <Link
              href="#"
              className="block p-2 text-xs font-normal text-sky-700 rounded-lg  "
            >
              All Sports
            </Link>
          </li>
        </ul>

        <ul className="">
          <li className="gradient-sports  p-2">
            <p className="text-xs text-white">Cricket</p>
          </li>
          <li className="bg-[#ced5da]  p-2">
            <p className="text-xs text-slate-900">Top Competitions</p>
          </li>
          <li>
            <Link
              href="#"
              className="block p-2 border-b-[1px] text-xs font-normal text-sky-700 rounded-lg  "
            >
              ICC Cricket World Cup
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block p-2 border-b-[1px] text-xs font-normal text-sky-700 rounded-lg  "
            >
              ICC World Twenty20 2024
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block p-2 border-b-[1px] text-xs font-normal text-sky-700 rounded-lg  "
            >
              Indian Premier League
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block p-2 border-b-[1px] text-xs font-normal text-sky-700 rounded-lg  "
            >
              Plunket Shield
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block p-2 border-b-[1px] text-xs font-normal text-sky-700 rounded-lg  "
            >
              WBBL
            </Link>
          </li>
        </ul>
        <ul className="">
          <li className="bg-[#ced5da]  p-2">
            <p className="text-xs text-slate-900">Top Countries</p>
          </li>
          <li>
            <Link
              href="#"
              className="block p-2 border-b-[1px] text-xs font-normal text-sky-700 rounded-lg  "
            >
              Australia
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block p-2 border-b-[1px] text-xs font-normal text-sky-700 rounded-lg  "
            >
              India
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block p-2 border-b-[1px] text-xs font-normal text-sky-700 rounded-lg  "
            >
              International
            </Link>
          </li>
        </ul>
        <ul className="">
          <li className="bg-[#ced5da]  p-2">
            <p className="text-xs text-slate-900">International Competitions</p>
          </li>
          <li>
            <Link
              href="#"
              className="block p-2 border-b-[1px] text-xs font-normal text-sky-700 rounded-lg  "
            >
              ICC Cricket World Cup
            </Link>
          </li>
        </ul>

        <ul className="">
          <li className="bg-[#ced5da]  p-2">
            <p className="text-xs text-slate-900">Common</p>
          </li>
          <li>
            <Link
              href="#"
              className="block p-2 border-b-[1px] text-xs font-normal text-sky-700 rounded-lg  "
            >
              All Countries
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="block p-2 border-b-[1px] text-xs font-normal text-sky-700 rounded-lg  "
            >
              All Competitions
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="block p-2 border-b-[1px] text-xs font-normal text-sky-700 rounded-lg  "
            >
              Others
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
