import ChatIcon from "@mui/icons-material/Chat";
import CallEndIcon from '@mui/icons-material/CallEnd';
import AhIcon from "../../icons";
import Badge from "../../badge";

// eslint-disable-next-line react/prop-types
const RightItems = ({ isShowSidebar }) => {
  return (
    <div className="h-full flex items-center justify-center gap-4 ">
      <AhIcon
        cornerType="roundedFull"
        type="fill"
        className="cursor-pointer"
        onClick={isShowSidebar}
        iconColor={'text-white'}
      >
        <Badge number={11} greaterThan={10} />
        <ChatIcon titleAccess="Chat" fontSize="medium" />
      </AhIcon>
      <AhIcon cornerType="roundedFull" type="fill" iconColor="text-[#EA023D]" className="cursor-pointer">
        <CallEndIcon fontSize="medium" />
      </AhIcon>
    </div>
  );
};

export default RightItems;
