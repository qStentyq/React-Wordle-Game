import React, { useEffect, useState } from 'react'
import useWordle from '../../hooks/useWordle'
import Grid from '../Grid/Grid'
import Keypad from '../Keypad/Keypad'
import Modal from '../Modal/Modal'



export default function Wordle({ solution, dificulty, language}) {

const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWordle(solution, dificulty)
const [showModal, setShowModal] = useState(false)

useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    
    if(isCorrect){
      setTimeout(() =>setShowModal(true),2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if(turn > 5) {
      setTimeout(() =>{setShowModal(true)},2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    return () => window.removeEventListener('keyup', handleKeyup)
}, [handleKeyup], isCorrect, turn)

  return (
    <>
        <div>solution - {solution} </div>
        <div>current guess - {currentGuess}</div>
        <Grid currentGuess = {currentGuess} guesses={guesses} turn = {turn} dificulty={dificulty}/>
        <Keypad usedKeys = {usedKeys} language={language}/>
        {showModal && <Modal isCorrect={isCorrect} turn = {turn} solution = {solution}/>}
        
    </>
  )
}
