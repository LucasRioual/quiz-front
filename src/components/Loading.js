import React, { useEffect } from 'react';
import gsap from 'gsap';




function Loading({active}) {

    useEffect(() => {
        if (active) {
          
          gsap.to('#loadingSVG', { rotation: 360, repeat: -1, duration: 3, ease: 'elastic' });
        }
      }, [active]);
    
      if (!active) {
        return null;
      }
  return (
    <div className = " absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg py-10 px-10">
        <div id="loadingSVG">
          <svg width="221" height="221" viewBox="0 0 221 221" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M110.5 18.417C72.4418 18.417 53.4082 18.417 47.8648 30.3878C47.3884 31.4191 46.9882 32.484 46.6677 33.5739C42.8923 46.3459 56.3549 61.1529 83.2616 90.7577L101.292 110.5H119.708L137.738 90.7669C164.645 61.1529 178.098 46.3459 174.332 33.5831C174.013 32.4868 173.613 31.4157 173.135 30.3786C167.592 18.417 148.558 18.417 110.5 18.417Z" fill="#E5386F"/>
          <path  d="M47.8648 190.613C53.4082 202.583 72.4419 202.583 110.5 202.583C148.558 202.583 167.592 202.583 173.135 190.613C173.612 189.581 174.012 188.516 174.332 187.426C178.107 174.654 164.645 159.847 137.738 130.243L119.708 110.5H101.292L83.2617 130.233C56.3549 159.847 42.9015 174.654 46.6677 187.417C46.99 188.522 47.386 189.581 47.8648 190.613Z" fill="#FFF"/>
          </svg>
        </div>
        

      </div>
  );
}

export default Loading;