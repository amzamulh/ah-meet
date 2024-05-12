import GitHub from "@mui/icons-material/GitHub";
import AhButton from "../buttons";
import AhIcon from "../icons";

// eslint-disable-next-line react/prop-types
const MeetingCard = ({ icon, title, description }) => {
  return (
    <div
      className={`bg-[#1C1F2E] w-full h-auto text-white p-4 rounded-lg cursor-pointer`}
    >
      <div className="w-full flex justify-between">{icon}</div>
      <div className="mt-2">
        <div className="text-2xl font-medium tracking-wider ">{title}</div>
        <div className="text-base pt-1">{description}</div>
      </div>
      <div className="button-section flex justify-end gap-4">
      <AhButton  type="fill">Start</AhButton>
        <AhButton className="bg-[#252A41]" type="outline"><AhIcon type="transparent" size="auto"><GitHub fontSize="medium"/></AhIcon> Copy Invitation</AhButton>
      </div>
    </div>
  );
};

export default MeetingCard;