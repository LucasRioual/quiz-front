import io from 'socket.io-client';
import React from 'react';


export const socket = io("http://localhost:8878/", {reconnection: false});
export const SocketContext = React.createContext();