import React, { useState } from "react";
import './styles.css';

const Top = ({setBodyNumber}) => {
  const [isActive, setActive] = useState(0);

  const pressButton = (number) => {
    setBodyNumber(number);
    return (number == isActive ? null : setActive(number));
  }

  return (
    <div class="flex justify-center">
      <div class="flex w-1/3 border-b-2 mt-3 border-red-500 rounded-sm space-x-5 min-w-fit justify-between text-sm font-roboto-mono md:text-lg">
          {isActive == 0 ? 
            <button class="text-red-500 md:text-red-500 mb-4 mt-5" id="button" onClick={() => pressButton(0)}>.home()</button> : 
            <button class="text-white md:text-white mb-4 mt-5" onClick={() => pressButton(0)}>.home()</button>}
          
          {isActive == 1 ? 
            <button class="text-red-500 md:text-red-500 mb-4 mt-5" id="button" onClick={() => pressButton(1)}>.about()</button> : 
            <button class="text-white md:text-white mb-4 mt-5" onClick={() => pressButton(1)}>.about()</button>}
          
          {isActive == 2 ? 
            <button class="text-red-500 md:text-red-500 mb-4 mt-5" id="button" onClick={() => pressButton(2)}>.skills()</button> : 
            <button class="text-white md:text-white mb-4 mt-5" onClick={() => pressButton(2)}>.skills()</button>}
          
          {isActive == 3 ? 
            <button class="text-red-500 md:text-red-500 mb-4 mt-5" id="button" onClick={() => pressButton(3)}>.experience()</button> : 
            <button class="text-white md:text-white mb-4 mt-5" onClick={() => pressButton(3)}>.experience()</button>}
      </div>
    </div>
  );
};

export default Top;
