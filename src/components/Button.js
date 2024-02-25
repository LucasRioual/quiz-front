import React from 'react';

function Button(props) {




  return (
    <div onClick={props.click} class= "bg-primary py-2 px-4 rounded-xl font-Lexend mt-4 cursor-pointer hover:scale-110 duration-75 ">
        <p class=" text-white text-xl text-center ">{props.label}</p>
        
    </div>
  );
}

export default Button;