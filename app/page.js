import Navbar from "../components/Navbar";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";
import HeaderImage from "@/components/HeaderImage";
import OddTable from "@/components/OddTable";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 flex flex-col mx-4 overflow-y-scroll">
          <HeaderImage />

          <OddTable />
        </main>
        <RightSidebar />
      </div>
    </>
  );
}
