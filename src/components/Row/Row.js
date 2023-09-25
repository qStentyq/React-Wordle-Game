import React from 'react'
import './row.css'

export default function Row({ guess, currentGuess, dificulty }) {

  if(guess){
    return (
      <div className='row past'>
        {guess.map((l, i) => (
          <div key={i} className={l.color}>{l.key}</div>
        ))}
      </div>
    )
  }
  let dif7 = '',
      dif10 = ''
  if(dificulty === 7) { dif7 = <><div></div>
  <div></div></>}
  if(dificulty === 10) {dif10 = <><div></div>
  <div></div><div></div><div></div>
  <div></div></>}


  if(currentGuess) {
    let letters = currentGuess.split('')
    return (
      
        <div className='row current'>
          {letters.map((letter, i) => (
              <div key = {i} className='filled'>{letter}</div>
          ))}
          {[...Array(dificulty - letters.length)].map((_, i) => (
            <div key = {i}></div>
          ))}
        </div>
    )
  }

  return (
    <div className='row'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      {dif7}
      {dif10}
      {/* dangerouslySetInnerHTML={{ __html: dif7 }}
      dangerouslySetInnerHTML={{ __html: dif10 }} */}
    </div>  
  )
}
