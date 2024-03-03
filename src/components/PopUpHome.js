import React,{useRef, useEffect} from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useSocket } from '../services/Socket/useSocket';

function PopUpHome({ isJoin, isVisible }) {


  const navigate = useNavigate();
  const userInput = useRef(null);
  const gameCodeInput = useRef(null);
  const { connectRoom} = useSocket();

  useEffect(() => {
    if (isVisible) {
        gsap.from('#containerPopUp',{scale: 0.8})
        gsap.from('#containerPopUp',{opacity: 0})
        
        gsap.to('#containerPopUp', { scale: 1, yoyo: true, duration: 1, ease: 'elastic' })
        gsap.to('#containerPopUp', { opacity: 1, duration: 1, ease: 'power2.out' })
    
    }
  }, [isVisible]);


    if(!isVisible) {
        return null;
        }

    const validGame = () => {
      if(userInput.current.value === ''){
        inputAnimation(userInput);
        return;
      };
      if(isJoin && gameCodeInput.current.value === ''){
        inputAnimation(gameCodeInput);
        return;
      }
      if(isJoin){
        navigate("/Salon", { state: { userName: userInput.current.value, isHost: false, gameCode: gameCodeInput.current.value } });

      }
      else{
        navigate("/Salon", { state: { userName: userInput.current.value, isHost: true } });
      }
    }

    const inputAnimation = (inputRef) =>{
      gsap.fromTo(
        inputRef.current,
        { x: 0 },
        {
          x: 15,
          duration: 0.1,
          repeat: 3,
          yoyo: true,
          onComplete: () => {
            gsap.set(inputRef.current, { x: 0 });
          },
        }
      );
    }
    
    return (
      <div id='containerPopUp' className="bg-white rounded-md py-8 font-Lexend items-center flex flex-col">
        <h3 className="font-bold text-3xl text-center mb-4">
          {isJoin ? 'Rejoindre' : 'Créer'}
        </h3>
        <input
          ref={userInput}
          type="text"
          id="username"
          name="username"
          className="w-2/3 text-xl p-2 m-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Ton super pseudo !"
        />
        {isJoin && (
          <input
            ref={gameCodeInput}
            type="text"
            id="gameCode"
            name="gameCode"
            className="w-2/3 text-xl p-2 m-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Le code de la partie !"
          />
        )}
        <Button label="Valider" click={validGame}  />
      </div>
    );
  }
  
  export default PopUpHome;