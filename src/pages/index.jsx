import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";


export default function Main() {


  return (
   <div className="w-full flex ">
      <Sidebar/>
     <div className="w-[calc(100%-4rem)] md:w-[calc(100%-16rem)] h-screen ">
      <Header/>
      <main className="w-full h-[calc(100%-4.5rem)] p-4  bg-[#161925] overflow-y-auto">
        <Outlet/>
      </main>
    </div>
   </div>
  );
}
