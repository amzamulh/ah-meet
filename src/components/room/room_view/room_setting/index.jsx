import GitHub from "@mui/icons-material/GitHub";
import AhIcon from "../../../icons";


// eslint-disable-next-line react/prop-types
const RoomSetting = ({onClose}) => {
 
 
  return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video min-w-[20rem] max-w-96 w-full mx-4">
          <div
            className={`bg-[#121212] w-full h-auto text-white rounded-lg border-[1px] border-[#1C1F2E] shadow-xl overflow-hidden`}
          >
            <div className="bg-[#1C1F2E] py-2 px-4 flex items-center justify-between text-xl leading-normal ">
              <div>Setting</div>
              <AhIcon
                onClick={onClose}
                size="auto"
                className="cursor-pointer"
              >
                <GitHub />
              </AhIcon>
            </div>
            <div className="p-4">Bangladesh</div>
          </div>
        </div>

  );
};

export default RoomSetting;
