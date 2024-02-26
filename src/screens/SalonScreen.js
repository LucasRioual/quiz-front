import React, {useState, useEffect } from 'react';
import LogoHorizontal from '../components/LogoHorizontal';
import ListPlayer from '../components/ListPlayer';
import Button from '../components/Button';
import PlayerNumber from '../components/PlayerNumber';
import BtnBack from '../components/BtnBack';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';


function SalonScreen() {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


 const startGame = () => {
    navigate('/game');
 }



  return (
    <div>
    
    <div id="mainContainer" class = "h-screen flex flex-col items-center font-Lexend opacity-1">
      <div class = "bg-white rounded-md py-4 mt-10 mb-10 inline-block px-6">
        <p class="text-2xl text-center">Code de la partie : <span class="font-bold">45784</span></p>
      </div>
      <LogoHorizontal/>
      <ListPlayer/>
      <Button label="Lancer la partie" click={startGame} />
      <PlayerNumber number = {10}/>
      <BtnBack/>
      

    </div>
    <Loading active={isLoading}/>
    </div>
    
  );
}

export default SalonScreen;