import React from "react"
import Box from "./Box"

export default function GameBoard(props){

    return (
        <>          
        <div className='grid grid-cols-4 md:grid-cols-5 place-content-center justify-items-center gap-5 border rounded-md py-1 px-2 md:px-20 md:py-10 h-full'>
        <Box 
          dices = {props.dices}
          holdThisDice = {props.holdThisDice}
        />
      </div>
      <div className='mt-5 flex'>
        <div className="flex-1 md:border "></div>
        <button className='md:mx-10 flex-1 h-10 my-4 md:my-0 rounded-md bg-[#CFB69A] hover:bg-[#ac957b] hover:text-white' onClick={props.rollDice}><span className='text-2xl font-chakraPetch font-bold text-[#584634]'>
          {!props.gameSet ? "Roll" :  "New Game"}</span>
        </button>
          <div className=" md:border flex-1 font-chakraPetch text-lg md:text-2xl md:flex justify-evenly font-bold text-[#584634] my-1">
            <div>{props.minute} Min</div>
            <div>{props.second} Sec</div>
          </div>
      </div>
        </>
    )
} 
