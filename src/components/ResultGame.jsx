import React from 'react'

export default function ResultGame(props){
    return (
        <>
        <div className='h-full w-full flex flex-col justify-center rounded-xl'>
            <h1 className=' font-chakraPetch font-bold text-3xl'>Congratulation !</h1>
            <h1 className=' font-chakraPetch font-semibold text-xl'>Waktumu adalah </h1>
            <div className="font-chakraPetch text-2xl flex justify-center font-bold text-[#584634] my-10">
                <div className='mx-3'>{props.minute} Min</div>
                <div className='mx-3'>{props.second} Sec</div>
            </div>
            <div className='block'>
            <button onClick={props.startFirstGame} className='border mx-auto w-full h-28 rounded-md shadow-md  bg-[#CFB69A] hover:bg-[#ac957b] active:bg-[#8a7660]'>
                <span className='font-chakraPetch text-3xl font-bold'>START NEW GAME</span>
            </button>
            </div>
        </div>
        </>
    )
}