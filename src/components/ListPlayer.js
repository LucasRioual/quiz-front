import React from 'react';
import  Player  from '../Player.json';

function ListPlayer() {

   

    

  return (
    <div class= " rounded-md w-2/3 m-16 ">
        {Player.map((player, index) => (
            <div class="bg-white rounded-md py-2  m-4  inline-block px-6">
                <p class="text-2xl text-center">{player.name}</p>
            </div>
        ) 
        )}
        

        
        
    </div>
  );
}

export default ListPlayer;