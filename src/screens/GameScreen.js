import React, {useState} from 'react';
import LogoHorizontal from '../components/LogoHorizontal';
import Quiz from '../components/Quiz';
import Timer from '../components/Timer';
import BtnBack from '../components/BtnBack';
import PlayerNumber from '../components/PlayerNumber';
import PlayerLife from '../components/PlayerLife';


function GameScreen() {


  return (
    <div class = "h-screen flex items-center flex-col font-Lexend pt-8">
       <LogoHorizontal/>
       <div class="bg-white rounded-md py-2 mt-10 inline-block px-6">
         <p class=" text-lg text-center font-bold">Question 1</p>
        </div>
        <Quiz/>
        <Timer time={10}/>
        <BtnBack/>
        <PlayerNumber number = {10}/>
        <PlayerLife number={2} life = {1}/>


      
    </div>
  );
}

export default GameScreen;