import { useState } from "react";
import RoomView from "../components/room/room_view/RoomView";
import RoomSidebar from "../components/room/room_sidebar";
import RoomControlbar from "../components/room/room_controll";

const Room = () => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  const chatBoxHandler = () => {
    setIsChatBoxOpen(!isChatBoxOpen);
  };
  return (
    <div className="w-full h-screen bg-[#0e0e0e] ">
      <div className="w-full h-[calc(100vh-5rem)] flex relative overflow-hidden" >
        <RoomView chatBoxOpen={isChatBoxOpen} />
       
        <RoomSidebar isShowSidebar={isChatBoxOpen} />
      </div>
      <RoomControlbar onclickHandler={chatBoxHandler} />
    </div>
  );
};

export default Room;
