import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MicOffIcon from "@mui/icons-material/MicOff";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import AhIcon from "../../icons";
import Dropdown from "../../dropdown";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ahToggle } from "../../../utils/toggle";

const AudioItem = () => {
  return (
    <>
      <Menu.Item>
        <Link
          className="text-white block px-4 py-2 text-sm hover:bg-[#161925] ease-in duration-200"
          to={"/"}
        >
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          className="text-white block px-4 py-2 text-sm hover:bg-[#161925] ease-in duration-200"
          to={"/"}
        >
          Support
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          className="text-white block px-4 py-2 text-sm hover:bg-[#161925] ease-in duration-200"
          to={"/"}
        >
          Logout
        </Link>
      </Menu.Item>
    </>
  );
};
const VideoCamItems = () => {
    return (
      <>
        <Menu.Item>
          <Link
            className="text-white block px-4 py-2 text-sm hover:bg-[#161925] ease-in duration-200"
            to={"/"}
          >
            vidoe one
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            className="text-white block px-4 py-2 text-sm hover:bg-[#161925] ease-in duration-200"
            to={"/"}
          >
            Two
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            className="text-white block px-4 py-2 text-sm hover:bg-[#161925] ease-in duration-200"
            to={"/"}
          >
            Logout
          </Link>
        </Menu.Item>
      </>
    );
  };

const MiddleItems = () => {
  const [isMute, setIsMute] = useState(false);
  const [isVideo, setIsVideo] = useState(false);

  return (
    <div className="h-full flex items-center justify-center gap-4">
      <AhIcon
        cornerType="roundedFull"
        size="auto"
        type="fill"
        iconColor={isMute ? "text-white" : "text-[#EA023D]"}
        className="cursor-pointer  ease-in duration-200"
      >
        <div className="p-3" onClick={() => ahToggle(isMute, setIsMute)}>
          {isMute ? (
            <KeyboardVoiceIcon fontSize="medium" />
          ) : (
            <MicOffIcon fontSize="medium" />
          )}
        </div>
        <Dropdown
          displayPosition="topLeft"
          buttonLabel={
            <ArrowDropUpIcon
              fontSize="medium"
              className="my-3 ms-1 me-3 hover:bg-[#0e0e0e] rounded-full text-white"
            />
          }
        >
          <AudioItem />
        </Dropdown>
      </AhIcon>
      <AhIcon
        cornerType="roundedFull"
        size="auto"
        type="fill"
        iconColor={isVideo ? "text-white" : "text-[#EA023D]"}
        className="cursor-pointer  ease-in duration-200"
      >
        <div className="p-3" onClick={() => ahToggle(isVideo, setIsVideo)}>
          {isVideo ? (
            <VideocamIcon fontSize="medium" />
          ) : (
            <VideocamOffIcon fontSize="medium" />
          )}
        </div>
        <Dropdown
          displayPosition="topLeft"
          buttonLabel={
            <ArrowDropUpIcon
              fontSize="medium"
              className="my-3 ms-1 me-3 hover:bg-[#0e0e0e] rounded-full text-white"
            />
          }
        >
          <VideoCamItems />
        </Dropdown>
      </AhIcon>

      <AhIcon
        cornerType="roundedFull"
        type="fill"
        iconColor="text-white"
        className="cursor-pointer"
      >
        <ScreenShareIcon fontSize="medium" />
      </AhIcon>
    </div>
  );
};

export default MiddleItems;
