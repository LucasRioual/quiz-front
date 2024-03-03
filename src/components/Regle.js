import React, {useState, useEffect} from 'react';
import RoundButton from './RoundButton';
import gsap from 'gsap';

function Regle({cancel, isVisible}) {

   

    const TableauText = ["Bienvenue dans le Do_It Quiz ! Le battle royale de l'option Do_It",
     "Tous les joueurs démarrent avec 2 vies et doivent répondre à des questions sur Do_It",
     "Les joueurs perdent une vie à chaque mauvaise réponse",
     "Le dernier joueur en vie remporte la partie !"]

   
    const [text, setText] = useState(TableauText[0]);
    const [index, setIndex] = useState(0);

    const rightClick = () => {
        if(index < TableauText.length-1){
            setIndex(index + 1)
            setText(TableauText[index + 1])
        }
    }

    const leftClick = () => {
        if(index > 0){
            setIndex(index - 1)
            setText(TableauText[index - 1])
        }
    }


    useEffect(() => {
        if (isVisible) {
            gsap.from('#container',{scale: 0.8})
            gsap.from('#container',{opacity: 0})
            
            gsap.to('#container', { scale: 1, yoyo: true, duration: 2, ease: 'elastic' })
            gsap.to('#container', { opacity: 1, duration: 1, ease: 'power2.out' })
        
        }
      }, [isVisible]);

    

 

    if (!isVisible) {
        return null;
    }
    

  return (
    <div className='h-full w-full absolute flex items-center justify-center'>
        <div className= "h-full w-full bg-gray-900 opacity-70 absolute "></div>
        <div className='m-6'>
            <RoundButton symbole='<' click={leftClick}/>
        </div>
        <div id="container" className= "relative h-1/2 w-2/5 bg-white rounded-xl z-10 flex flex-col justify-center items-center ">
            <p className='font-Lexend text-2xl w-1/2 text-center'>{text}</p>
            <div className='absolute -top-7 right-10'>
                <RoundButton symbole='x' click={cancel}  />
            </div>
            
        </div>
        <div className='m-6'>
            <RoundButton symbole='>' click={rightClick} />
        </div>
        


    </div>
    

   
  );
}

export default Regle;