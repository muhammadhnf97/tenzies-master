import React from 'react'

export default function Box(props){
    const renderDice = props.dices.map(prevDice => {
    const style = {
        backgroundColor: prevDice.isHeld ? "#CFB69A" : "#FFFFFF"
    }
        return (
            <div onClick={()=>props.holdThisDice(prevDice.id)} style={style} key={prevDice.id} className='w-12 h-12 md:w-16 md:h-16 border rounded-md shadow-md relative hover:bg-slate-100'><span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-chakraPetch font-semibold text-2xl md:text-4xl'>{prevDice.value}</span></div>
        )
    })

    return (
        <>
            {renderDice}
        </>
    )
}