import React, {useState, useEffect } from 'react';
import LogoHorizontal from '../components/LogoHorizontal';
import ListPlayer from '../components/ListPlayer';
import Button from '../components/Button';
import PlayerNumber from '../components/PlayerNumber';
import BtnBack from '../components/BtnBack';
import Loading from '../components/Loading';
import { useNavigate, useLocation } from 'react-router-dom';
import { createGame, joinGame } from '../services/Game/GameService';
import { useSelector, useDispatch } from 'react-redux';
import { gsap } from 'gsap';
import { useSocket } from '../services/Socket/useSocket';


function SalonScreen() {

  const [isLoading, setIsLoading] = useState(true);
  
  
  const { connectRoom } = useSocket();
  const newPLayer = useSelector((state) => state.game.newPlayer);
  
  const navigate = useNavigate();
  const userName = useLocation().state.userName;
  const isHost = useLocation().state.isHost;
  const gameCodeNavigation = useLocation().state.gameCode;
  const [listPlayer, setListPlayer] = useState([]);
  const [gameCode, setGameCode] = useState(gameCodeNavigation);

  


 const startGame = () => {
    navigate('/game');
 }

 //

 useEffect(() => {
  const getGameCode = async () => {
    const gameCodeResponse = await createGame(userName);
    console.log(gameCodeResponse);
    setGameCode(gameCodeResponse);
    setListPlayer([userName]);
    console.log(typeof listPlayer)
    setIsLoading(false);
    gsap.to('#mainContainer', { opacity: 1,  duration: 2, ease: 'power2.out'});

    connectRoom(gameCodeResponse, userName);

  }
  const getListPlayer = async () => {
    const listPlayerResponse = await joinGame(gameCode, userName);
    console.log("listPlayerResponse",listPlayerResponse);
    console.log(typeof listPlayerResponse);
    setListPlayer(listPlayerResponse);
    console.log('listPlayer',listPlayer);
    setIsLoading(false);
    gsap.to('#mainContainer', { opacity: 1,  duration: 2, ease: 'power2.out'});
    connectRoom(gameCode, userName);

  }

  if(isHost){
    getGameCode();
  }
  else{
    getListPlayer();
  }
  
  
}, []);


useEffect(() => {
  if(newPLayer !== null){
    setListPlayer([...listPlayer, newPLayer]);
  }
  console.log('useEffect',listPlayer);
}
, [newPLayer]);



  return (
    <div>
    
    <div id="mainContainer" className = "h-screen flex flex-col items-center font-Lexend opacity-0">
      <div className = "bg-white rounded-md py-4 mt-10 mb-10 inline-block px-6">
        <p className="text-2xl text-center">Code de la partie : <span className="font-bold">{gameCode}</span></p>
      </div>
      <LogoHorizontal/>
      <ListPlayer list={listPlayer}/>
      {isHost && <Button label="Lancer la partie" click={startGame} />}
      
      <PlayerNumber number = {listPlayer.length}/>
      
      <BtnBack />
      

    </div>
    <Loading active={isLoading}/>
    </div>
    
  );
}

export default SalonScreen;