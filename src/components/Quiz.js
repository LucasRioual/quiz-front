import React, { useState } from 'react';

function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const disableAnswers = selectedAnswer !== null;

  const handleAnswerClick = (index) => {
    // Vérifiez si aucune réponse n'a été sélectionnée auparavant
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
    }
  };

  return (
    <div className='mb-8  w-1/3'>
        <div className="bg-gray-200 rounded-md py-2 mt-8 px-10">
        <p className="text-xl text-center my-6">Quelle est le véritable prénom de Samy Diafat ? </p>
        <Answer index={0} selected={selectedAnswer === 0} onClick={() => handleAnswerClick(0)} disable={disableAnswers} />
        <Answer index={1} selected={selectedAnswer === 1} onClick={() => handleAnswerClick(1)} disable={disableAnswers} />
        <Answer index={2} selected={selectedAnswer === 2} onClick={() => handleAnswerClick(2)} disable={disableAnswers} />
        <Answer index={3} selected={selectedAnswer === 3} onClick={() => handleAnswerClick(3)} disable={disableAnswers} />
        </div>
        {selectedAnswer !== null && <p className=" text-white text-md">En attente des autres joueurs ...</p>}

    </div>
   
  );
}

function Answer({ index, selected, onClick, disable }) {
  return (
    <div
      className={`py-2 px-4 my-4 ${selected ? 'bg-primary' : 'bg-white'} rounded-md cursor-pointer ${disable ? '' : 'hover:scale-105 hover:duration-75'}`}
      style={{ cursor: disable ? 'not-allowed' : 'pointer' }}
      onClick={() => {
        if (!disable) {
          onClick();
        }
      }}
    >
      <p className={`text-lg ${selected ? 'text-white' : 'text-black'}`}>{`A. Samy ${index + 1}`}</p>
    </div>
  );
}

export default Quiz;
