import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext(null);

const socketHost = 'http://localhost:4000';

// eslint-disable-next-line react/prop-types
export const SocketProvider = ({ children }) => {
    const [socketServer, setSocketServer] = useState(null);
    console.log("Data check", socketServer);

    useEffect(() => {
        const socket = io(socketHost);
        console.log("Socket connecting...");
        socket.on('connect', () => {
            console.log('Connected to server');
        });
        socket.on("connect_error", (err) => {
            console.error("Socket connection error:", err);
        });
        socket.on("disconnect", () => {
            console.log("Socket disconnected");
        });
        // console.log(socket);
    
        setSocketServer(socket);
    
        // Clean up the socket connection when the component unmounts
        return () => {
            socket.disconnect();
            console.log("Socket disconnected and cleaned up");
        };
    }, []);

    return (
        <SocketContext.Provider value={socketServer}>
            {children}
        </SocketContext.Provider>
    );
};
