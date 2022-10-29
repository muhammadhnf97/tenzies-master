import React, { useEffect, useState } from 'react'
import GameBoard from './components/GameBoard'
import FirstGame from './components/FirstGame'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

export default function App(){
  let manyDice = 20
  const thisDice = []
  
  for(let i=0; i<manyDice;i++){
    thisDice.push({
      id: nanoid(),
      value: Math.ceil(Math.random()*6),
      isHeld:false
    })
  }
  
  const [dices, setDice] = useState(thisDice)
  
  const [gameSet, setGameSet] = useState(false)
  const [firstGame, setFirstGame] = useState(true)
  const [resultGame, setResultGame] = useState(false)
  const [gameBoard, setGameBoard] = useState(false)

  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [mSecond, setMSecond] = useState(0)
  const [stopStopwatch, setStopStopwatch] = useState(true)


  const backgroundStyle = {
    backgroundImage:"url(./img/background.jpg)"
  }

  function rollDice(){
    if(gameSet){
      setDice(prevDice=>{
        return prevDice.map(()=>{
          return {
          id: nanoid(),
          value: Math.ceil(Math.random()*6),
          isHeld:false
          }
        })
      })
      setGameSet(false)
      console.log(manyDice)
    } else {
      setDice(prevDice=>{
        return prevDice.map(dice=>{
          return dice.isHeld ? {...dice} : {...dice, value:Math.ceil(Math.random()*6)} 
        })
      })
    }
  }

  function holdThisDice(id){
    setDice(prevDice=>{
      return prevDice.map(dice=>{
        return dice.id === id ? {...dice, isHeld : !dice.isHeld } : {...dice}
      })
    })
  }
  useEffect(()=>{
    const isHold = dices.every(dice=>dice.isHeld)
    const diceValue = dices[0].value
    const isValueSame = dices.every(dice=>dice.value === diceValue)

    if(isHold && isValueSame){
      setGameSet(prevGameSet=>{
        return prevGameSet = !prevGameSet 
      })
      setFirstGame(true)
      setStopStopwatch(true)
      setResultGame(true)
      setGameBoard(false)

    }
  }, [dices])

  useEffect(()=>{
    let interval
    if(!stopStopwatch){
      interval = setInterval(() => {
        if(mSecond <= 10){
          setMSecond(prevMSecond=>prevMSecond+1)
        } else {
          setMSecond(0)
          setSecond(prevSecond=>prevSecond+1)
          clearInterval(interval)
        }
        if(second > 59){
          setSecond(0)
          setMinute(prevMinute=>prevMinute+1)
          clearInterval(interval)
        }
      }, 100);
    } else {
      clearInterval(interval)
    }
    return ()=> clearInterval(interval)
  }, [firstGame] [stopStopwatch])

  function startFirstGame(){
    setMSecond(0)
    setSecond(0)
    setFirstGame(false)
    setStopStopwatch(false)
    setGameBoard(true)
    rollDice()
  }
  
  return (
    <>
    <main className='w-screen h-screen relative bg-cover' style={backgroundStyle}>
    {gameSet && <Confetti/>}
      <div className='max-w-4xl w-64 md:w-5/6 h-fit md:h-4/5 rounded-xl bg-[#584634] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md p-1 md:p-10'>
        <div className='w-full h-full bg-white rounded-md p-2 md:p-7 text-center flex flex-col'>
          <div className=''>
            <h1 className='text-5xl font-chakraPetch font-bold mb-2'>Tenzies Game</h1>
            <p className='text-xl font-chakraPetch mb-2'>Pilih angka yang sama, Jika tidak ada Rolls agar dapat angka yang sama.</p>
          </div>
          {firstGame && <FirstGame 
          startFirstGame={startFirstGame}
          resultGame={resultGame}
          minute={minute}
          second={second}/>}

          {gameBoard && <GameBoard 
          dices={dices}
          holdThisDice={holdThisDice}
          rollDice={rollDice}
          gameSet={gameSet}
          minute={minute}
          second={second}
          />}

        </div>
      </div>
    </main>
    </>
  )
}