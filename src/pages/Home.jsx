import { AddAlarmSharp } from "@mui/icons-material";
import AhIcon from "../components/icons";
import StatisticCard from "../components/cards/StatisticCard";
import MeetingCard from "../components/cards/MeetingCard";
import AhCard from "../components/cards";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useSocket from "../socketIo/useSocket";
import Btn from "../components/buttons/Button";


const Home = () => {
  const navigator= useNavigate();
 
  const socket = useSocket();

  const newMeetingHandler=()=>{
    navigator('/room/12')
  }
  useEffect(() => {

    socket?.emit('join', {
      name: "amzamul",
      email: "amzamulh@gmail.com"
    })  

  }, [socket]);

  return (
    <>
      <AhCard heading={"New Meeting"}>
        <AhCard>
          <Btn/>
        </AhCard>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <StatisticCard
            onClick={newMeetingHandler}
            icon={
              <AhIcon>
                <AddAlarmSharp fontSize="medium" />
              </AhIcon>
            }
            title={"New Meeting"}
            description={"Create a new invention"}
            color="bg-[#FF742E]"
          />
          <StatisticCard
            icon={
              <AhIcon>
                <AddAlarmSharp fontSize="medium" />
              </AhIcon>
            }
            title={"Join Meeting"}
            description={"Via invitation link"}
            color="bg-[#0E78F9]"
          />
          <StatisticCard
            icon={
              <AhIcon>
                <AddAlarmSharp fontSize="medium" />
              </AhIcon>
            }
            title={"Schedule"}
            description={"Setup your meeting"}
            color="bg-[#830EF9]"
          />
          <StatisticCard
            icon={
              <AhIcon>
                <AddAlarmSharp fontSize="medium" />
              </AhIcon>
            }
            title={"Recordings"}
            description={"Meeting recording"}
            color="bg-[#F9A90E]"
          />
        </div>
      </AhCard>
      <br />
      <AhCard>
        <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
          <MeetingCard
            icon={
              <AhIcon type="transparent" size="auto">
                <AddAlarmSharp fontSize="medium" />
              </AhIcon>
            }
            title={"Web Team: Batch-132"}
            description={"21 April 2024, 2:00pm"}
          />
          <MeetingCard
            icon={
              <AhIcon type="transparent" size="auto">
                <AddAlarmSharp fontSize="medium" />
              </AhIcon>
            }
            title={"Full Stack Team: Batch-132"}
            description={"21 April 2024, 2:00pm"}
          />
          <MeetingCard
            icon={
              <AhIcon type="transparent" size="auto">
                <AddAlarmSharp fontSize="medium" />
              </AhIcon>
            }
            title={"Rect Team: Batch-132"}
            description={"21 April 2024, 2:00pm"}
          />
          <MeetingCard
            icon={
              <AhIcon type="transparent" size="auto">
                <AddAlarmSharp fontSize="medium" />
              </AhIcon>
            }
            title={"Nodejs Team: Batch-132"}
            description={"21 April 2024, 2:00pm"}
          />
        </div>
      </AhCard>
    </>
  );
};

export default Home;
