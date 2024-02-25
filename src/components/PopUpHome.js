import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function PopUpHome({ isJoin, isVisible }) {

  const navigate = useNavigate();


    if(!isVisible) {
        return null;
        }

    const validGame = () => {
      navigate('/salon');
    }
    
    return (
      <div className="bg-white rounded-md py-8 font-Lexend items-center flex flex-col">
        <h3 className="font-bold text-3xl text-center mb-4">
          {isJoin ? 'Rejoindre' : 'Créer'}
        </h3>
        <input
          type="text"
          id="username"
          name="username"
          className="w-2/3 text-xl p-2 m-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Ton super pseudo !"
        />
        {isJoin && (
          <input
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