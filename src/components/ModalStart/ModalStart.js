import React from 'react'
import '../Modal/modal.css'
import './modalStart.css'
import App from '../../App'

export default function ModalStart() {
  return (
    <div className="modal">

        <div>
          <h1>Выберите уровень сложности</h1>
          <button className="button-3" onClick = {<App dificulty = {5}/>}>Легкий</button>
          <button className="button-3" onClick = {<App dificulty = {7}/>}>Средний</button>
          <button className="button-3" onClick = {<App dificulty = {10}/>}>Сложный</button>
        </div>
      
     
        
    </div>
  )
}
