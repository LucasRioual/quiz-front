// App.js
import React, {useEffect, useState} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './screens/HomeScreen'; // Assurez-vous d'importer correctement vos composants
import SalonScreen from './screens/SalonScreen'; // Assurez-vous d'importer correctement vos composants
import GameScreen from './screens/GameScreen'; // Assurez-vous d'importer correctement vos composants
import { SocketContext, socket } from './services/Socket/SocketManage';

import { useSelector, useDispatch } from 'react-redux';
import { setNewPlayer } from './Store/Reducer/gameSlice';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/salon',
    element: <SalonScreen />,
  },
  {
    path: '/game',
    element: <GameScreen />,
  },
]);


const App = () => {

  const dispatch = useDispatch();

  

    useEffect(() => {
    

         socket.on('connect', () => {
           console.log('Connexion socket établie !');
         });
     
         socket.on('new_player', ( newPlayer) => {
           console.log(newPlayer.userName + ' a rejoint la partie ' + newPlayer.gameCode);
           dispatch(setNewPlayer(newPlayer.userName));
           
         });
     
         
     
         
     
       }, []);

       



  return (

      <SocketContext.Provider value={socket}>
        <RouterProvider router={router}/>
      </SocketContext.Provider>
    
    

  );
};

export default App;
