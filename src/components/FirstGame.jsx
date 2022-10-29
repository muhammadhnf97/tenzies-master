import React from 'react'
import ResultGame from './ResultGame'

export default function FirstGame(props){
    return (
        <>
            {!props.resultGame && 
                <div className='w-full h-full relative'>
                    <button onClick={props.startFirstGame} className='p-2 md:p-0 md:w-72 md:h-28 rounded-md shadow-md md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-[#CFB69A] hover:bg-[#ac957b] active:bg-[#8a7660]'><span className='font-chakraPetch text-lg md:text-3xl font-bold'>START NEW GAME</span></button>
                </div>
            }
            {props.resultGame && <ResultGame 
                minute={props.minute}
                second={props.second}
                startFirstGame={props.startFirstGame}
                gameSave={props.gameSave}
                onClickSave={props.onClickSave}/>}
        </>
    )
}