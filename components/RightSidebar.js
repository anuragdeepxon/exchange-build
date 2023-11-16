// components/RightSidebar.js
import Link from "next/link";

const RightSidebar = () => {
  return (
    <aside className="w-[20vw]  mr-5" aria-label="RightSidebar">
      <div className="overflow-y-auto min-h-screen mt-1 bg-gray-50">
        <div className="gradient-sports p-2 border-b border-gray-700">
          <h2 className="text-xs text-white">Bet Slip</h2>
        </div>
        <div className="p-4 text-center">
          <p className="text-sm">
            Click on the odds to add selections to the betslip.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
