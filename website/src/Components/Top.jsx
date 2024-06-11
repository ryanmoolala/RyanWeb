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

      <div class="flex justify-between w-1/2 border-b-2 mt-1 border-red-500 rounded-sm">

      <div class="bg-green-300 ml-8 w-16 h-16 mt-1 flex-shrink-0">Logo</div>

      <div class="flex flex-row space-x-14 mr-2 text-lg font-roboto-mono">
        {isActive == 0 ? <button class="text-red-500 mb-4 mt-5" id="button" onClick={() => pressButton(0)}>.home()</button> : <button class="text-zinc-200 mb-4 mt-5" onClick={() => pressButton(0)}>.home()</button>}
        {isActive == 1 ? <button class="text-red-500 mb-4 mt-5" id="button" onClick={() => pressButton(1)}>.about()</button> : <button class="text-zinc-200 mb-4 mt-5" onClick={() => pressButton(1)}>.about()</button>}
        {isActive == 2 ? <button class="text-red-500 mb-4 mt-5" id="button" onClick={() => pressButton(2)}>.skills()</button> : <button  class="text-zinc-200 mb-4 mt-5" onClick={() => pressButton(2)}>.skills()</button>}
        {isActive == 3 ? <button class="text-red-500 mb-4 mt-5" id="button" onClick={() => pressButton(3)}>.work()</button> : <button  class="text-zinc-200 mb-4 mt-5" onClick={() => pressButton(3)}>.work()</button>}
      </div>
      </div>

    </div>
  );
};

export default Top;
