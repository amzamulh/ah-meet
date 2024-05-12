import LeftItems from "./LeftItems";
import RightItems from "./RightItems";
import MiddleItems from "./MiddleItems";
// import Check from "../../../utils/Check";

// eslint-disable-next-line react/prop-types
const RoomControlbar = ({onclickHandler}) => {
  return (
    <div className="w-full h-20 bg-[#161925] flex justify-between items-center px-8">
      
      <LeftItems/>
      <MiddleItems/>
      <RightItems isShowSidebar={onclickHandler}/>
      {/* <Check/> */}
  </div>
  )
}

export default RoomControlbar