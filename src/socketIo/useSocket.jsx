import { useContext } from "react";
import { SocketContext } from "./";

const  useSocket=()=>{
    const socketIo= useContext(SocketContext)
    return socketIo;
}

export default useSocket;