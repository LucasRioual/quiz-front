import React from 'react';

function MainMenu(props) {
  return (
    <div class="font-Lexen">
        <h2 onClick={props.create} class="duration-75 text-5xl my-7 text-white hover:-translate-y-2 hover:text-primary cursor-pointer font-bold">Créer une partie</h2>
        <h2 onClick={props.join} class="duration-75 text-5xl my-7 text-white hover:-translate-y-2 hover:text-primary cursor-pointer font-bold">Rejoindre une partie</h2>
        <h2 class="duration-75 text-2xl my-7 text-white hover:-translate-y-2 hover:text-primary cursor-pointer">Comment jouer ?</h2>
    </div>
  );
}

export default MainMenu;