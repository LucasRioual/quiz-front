import React from 'react';

function RoundButton({symbole, click}) {

  return (
    <div onClick={click}  className= "bg-gray-300 rounded-full w-14 h-14 group overflow-hidden cursor-pointer ">
        <div className= "bg-white rounded-full w-14 h-14 -translate-y-1 flex justify-center items-center group-hover:-translate-y-2 duration-75">
            <p className=' font-OneNine text-2xl'>{symbole}</p>
        </div>
        
        
        
    </div>
  );
}

export default RoundButton;