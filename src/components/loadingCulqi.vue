<template>
  <div class="container flex items-end justify-between">
      <div class="cube2 animate-[jump_1.5s_ease-in-out_infinite]"><div class="cube__inner2 w-full h-full rounded-[25%] bg-[#151929] animate-[morph_1.5s_ease-in-out_infinite]"></div></div>
      <div class="cube2 animate-[jump_1.5s_ease-in-out_infinite]"><div class="cube__inner2 w-full h-full rounded-[25%] bg-[#151929] animate-[morph_1.5s_ease-in-out_infinite]"></div></div>
      <div class="cube2 animate-[jump_1.5s_ease-in-out_infinite]"><div class="cube__inner2 w-full h-full rounded-[25%] bg-[#151929] animate-[morph_1.5s_ease-in-out_infinite]"></div></div>
    </div>
  </template>
  
  <style>
    .container {
      --uib-size: 35px;
      --uib-speed: 1.5s;
      height: calc(var(--uib-size) * 0.6);
      width: var(--uib-size);
    }
  
    .cube2 {
      flex-shrink: 0;
      height: calc(var(--uib-size) * 0.2);
      width: calc(var(--uib-size) * 0.2);
    }
  
    .cube__inner2 {
      transform-origin: center bottom;
      transition: background-color 0.3s ease;
    }
  
    .cube2:nth-child(2) {
      animation-delay: calc(var(--uib-speed) * -0.36);
    }
  
    .cube2:nth-child(2) .cube__inner2 {
      animation-delay: calc(var(--uib-speed) * -0.36);
    }
  
    .cube2:nth-child(3) {
      animation-delay: calc(var(--uib-speed) * -0.2);
    }
  
    .cube2:nth-child(3) .cube__inner2 {
      animation-delay: calc(var(--uib-speed) * -0.2);
    }
  
    @keyframes jump {
      0% {
        transform: translateY(0px);
      }
    
      30% {
        transform: translateY(0px);
        animation-timing-function: ease-out;
      }
    
      50% {
        transform: translateY(-200%);
        animation-timing-function: ease-in;
      }
    
      75% {
        transform: translateY(0px);
        animation-timing-function: ease-in;
      }
    }
    
    @keyframes morph {
      0% {
        transform: scaleY(1);
      }
    
      10% {
        transform: scaleY(1);
      }
    
      20%,
      25% {
        transform: scaleY(0.6) scaleX(1.3);
        animation-timing-function: ease-in-out;
      }
    
      30% {
        transform: scaleY(1.15) scaleX(0.9);
        animation-timing-function: ease-in-out;
      }
    
      40% {
        transform: scaleY(1);
      }
    
      70%,
      85%,
      100% {
        transform: scaleY(1);
      }
    
      75% {
        transform: scaleY(0.8) scaleX(1.2);
      }
    }
  </style>