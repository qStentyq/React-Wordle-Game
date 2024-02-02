import React from 'react'
import Row from '../Row/Row.js'

export default function Grid({currentGuess, guesses, turn, dificulty}) {
  return ( 
    <div>
        {guesses.map((g, i) => {
            if(turn === i) {
                return <Row key = {i} currentGuess={currentGuess} dificulty = {dificulty}/>
            }
            return <Row key={i} guess ={g} dificulty = {dificulty} />
        })}
    </div>
  )
}
