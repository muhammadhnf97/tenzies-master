import React from 'react'
import ResultGame from './ResultGame'

export default function FirstGame(props){
    return (
        <>
            {!props.resultGame && 
                <div className='w-full h-full relative border'>
                <button onClick={props.startFirstGame} className='w-72 h-28 rounded-md shadow-md absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#CFB69A] hover:bg-[#ac957b] active:bg-[#8a7660]'><span className='font-chakraPetch text-3xl font-bold'>START NEW GAME</span></button>
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