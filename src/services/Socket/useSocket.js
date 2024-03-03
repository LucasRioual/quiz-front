import { socket } from "./SocketManage";







export const useSocket = () => {

  const connectRoom = (room, userName) => {
    socket.emit('join_room', { "gameCode": room, "userName": userName });
  }

  


 return { connectRoom };




    


};


