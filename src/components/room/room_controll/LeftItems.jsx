import { Settings } from "@mui/icons-material"
import AhIcon from "../../icons"
import useModal from "../../../hooks/useModal"
import RoomSetting from "../room_view/room_setting";

const LeftItems = () => {
 const {isOpen, toggleModal, closeModal} = useModal();
  return (
    <>
   
    <div className="h-full flex items-center justify-center gap-4 text-white">
      <AhIcon onClick={toggleModal} cornerType="roundedFull" type="fill">
        <Settings fontSize="medium" />
      </AhIcon>
    </div>
    {isOpen && <RoomSetting onClose={closeModal} />}
    </>
  )
}

export default LeftItems