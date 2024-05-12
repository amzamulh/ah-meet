import { useState } from "react";
import AhCard from "../../cards"
import UserCard from "../UserCard"

// eslint-disable-next-line react/prop-types
const RoomView = ({chatBoxOpen}) => {
    const [numUsers] = useState(2); // State to track the number of UserCard components
  const userCards = Array.from({ length: numUsers }, (_, index) => (
    <UserCard key={index} />
  ));
    
  return (
    <div
    className={` ${
      chatBoxOpen ? "md:w-[calc(100%-16rem)]" : "md:w-[calc(100%-0rem)] relative"
    } h-full  bg-[#0e0e0e] flex ease-in-out duration-300 overflow-y-auto`}
  >
    <AhCard>
      <div className=" grid grid-cols-2 gap-4 w-full h-auto">
        {userCards}
      </div>
    </AhCard>
  </div>
  )
}

export default RoomView