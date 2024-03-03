import React from 'react';

function PlayerNumber(props) {
  return (
    <div className= "bg-primary py-2 px-4 rounded-xl font-Lexend mt-4 absolute right-4 bottom-4 flex items-center ">

        <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6875 18C13.4834 18 15.75 15.7334 15.75 12.9375C15.75 10.1416 13.4834 7.875 10.6875 7.875C7.89156 7.875 5.625 10.1416 5.625 12.9375C5.625 15.7334 7.89156 18 10.6875 18Z" fill="white"/>
            <path d="M16.4531 20.8125C14.4731 19.807 12.2878 19.4062 10.6875 19.4062C7.55297 19.4062 1.125 21.3286 1.125 25.1719V28.125H11.6719V26.9951C11.6719 25.6591 12.2344 24.3197 13.2188 23.2031C14.0041 22.3116 15.1038 21.484 16.4531 20.8125Z" fill="white"/>
            <path d="M23.9062 20.25C20.2451 20.25 12.9375 22.5113 12.9375 27V30.375H34.875V27C34.875 22.5113 27.5674 20.25 23.9062 20.25Z" fill="white"/>
            <path d="M23.9062 18C27.3235 18 30.0938 15.2298 30.0938 11.8125C30.0938 8.39524 27.3235 5.625 23.9062 5.625C20.489 5.625 17.7188 8.39524 17.7188 11.8125C17.7188 15.2298 20.489 18 23.9062 18Z" fill="white"/>
        </svg>


        <p className=" text-white text-2xl font-bold text-center ml-2 ">{props.number}</p>
        
    </div>
  );
}

export default PlayerNumber;