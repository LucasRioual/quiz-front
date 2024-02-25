import React from 'react';
import LogoHorizontal from '../components/LogoHorizontal';
import ListPlayer from '../components/ListPlayer';
import Button from '../components/Button';
import PlayerNumber from '../components/PlayerNumber';
import BtnBack from '../components/BtnBack';


function SalonScreen() {

  return (
    <div class = "h-screen flex flex-col items-center font-Lexend ">
      <div class = "bg-white rounded-md py-4 mt-10 mb-10 inline-block px-6">
        <p class="text-2xl text-center">Code de la partie : <span class="font-bold">45784</span></p>
      </div>
      <LogoHorizontal/>
      <ListPlayer/>
      <Button label="Lancer la partie" />
      <PlayerNumber number = {10}/>
      <BtnBack/>

    </div>
    
  );
}

export default SalonScreen;