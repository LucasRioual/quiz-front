import React from 'react';

function PlayerLife(props) {
    const { number, life } = props;

  const hearts = Array.from({ length: number }, (_, index) => (
    <Heart key={index} isPink={index < life} />
  ));

  return (
    <div class= "bg-white py-2 px-4 rounded-xl font-Lexend mt-4 absolute top-4 right-4 flex items-center ">

        <p class=" text-xl font-bold text-center mx-2 ">Vie restante</p>

        {hearts}

        
    </div>
  );
}

function Heart({ isPink }) {
    return (
      <div className="mx-1">
        <svg width="25" height="20" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.1379 33.8242L21.1334 33.8266C21.0353 33.8787 20.925 33.9062 20.8125 33.9062C20.7 33.9062 20.5897 33.8787 20.4916 33.8266L20.4871 33.8242C20.1125 33.6283 15.2649 31.0192 10.523 26.9187C5.73815 22.7811 1.28146 17.3137 1.28125 11.4158C1.2845 8.68243 2.38551 6.05989 4.34604 4.12404C6.30692 2.18785 8.96757 1.09695 11.7449 1.09375C15.2654 1.09387 18.306 2.58515 20.1906 5.06357L20.8125 5.8814L21.4344 5.06357C23.319 2.58515 26.3596 1.09387 29.8801 1.09375C32.6574 1.09695 35.3181 2.18785 37.279 4.12404C39.2396 6.06 40.3406 8.68273 40.3438 11.4163C40.3433 17.314 35.8867 22.7812 31.102 26.9187C26.3601 31.0192 21.5125 33.6283 21.1379 33.8242Z" fill={isPink ? '#E5386F' : 'white'} stroke="black" strokeWidth="1.5625" />
        </svg>
      </div>
    );
  }

export default PlayerLife;