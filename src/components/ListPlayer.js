import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';

function ListPlayer({list}) {

  const lastElementRef = React.useRef(null);

  useEffect(() => {
    // Lorsque la liste est modifiée, animer le dernier élément
    if (lastElementRef.current) {
     
      gsap.from(lastElementRef.current, { scale: 0.5})
      gsap.to(lastElementRef.current, { scale: 1, yoyo: true, duration: 1, ease: 'elastic' })
      
    }
  }, [list]);

  if(!list){
    return null;
  }

   

    

  return (
    <div className= " rounded-md w-2/3 m-16 ">
        {list.map((player, index) => (
            <div key={index} ref={index === list.length - 1 ? lastElementRef : null} className="bg-white rounded-md py-2  m-4  inline-block px-6">
                <p className="text-2xl text-center">{player}</p>
            </div>
        ) 
        )}
        

        
        
    </div>
  );
}

export default ListPlayer;