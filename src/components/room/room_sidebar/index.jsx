// eslint-disable-next-line react/prop-types
const RoomSidebar = ({ isShowSidebar }) => {
  return (
    <div className={`h-[calc(100vh-5rem)]  bg-[#1C1F2E] absolute top-0 w-64 ${
        isShowSidebar ? "right-0" : "right-[-16rem]"
      } ease-in-out duration-300 overflow-y-auto text-white p-4 `}
    >
      Bangla
    </div>
  );
};

export default RoomSidebar;
