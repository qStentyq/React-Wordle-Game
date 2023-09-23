import React, { useEffect, useState } from 'react'
import useWordle from '../../hooks/useWordle'
import Grid from '../Grid/Grid'
import Keypad from '../Keypad/Keypad'
import Modal from '../Modal/Modal'
import ModalStart from '../ModalStart/ModalStart'


export default function Wordle({ solution, dificulty }) {

const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWordle(solution, dificulty)
const [showModal, setShowModal] = useState(false)
useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    console.log(dificulty)
    if(isCorrect){
      console.log('You win')
      console.log(showModal)
      setTimeout(() =>setShowModal(true),2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if(turn > dificulty) {
      console.log('You lost')
      setTimeout(() =>{setShowModal(true)},2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    return () => window.removeEventListener('keyup', handleKeyup)
}, [handleKeyup], isCorrect, turn)

  return (
    <>
        {/* <ModalStart/> */}
        <div>solution - {solution} </div>
        <div>current guess - {currentGuess}</div>
        <Grid currentGuess = {currentGuess} guesses={guesses} turn = {turn} dificulty={dificulty}/>
        <Keypad usedKeys = {usedKeys}/>
        {showModal && <Modal isCorrect={isCorrect} turn = {turn} solution = {solution}/>}
        
    </>
  )
}
