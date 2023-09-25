import React, { useState } from 'react'
import '../Modal/modal.css'
import './modalStart.css'
import App from '../../App'

export default function ModalStart() {

  const [dificulty, setDificulty] = useState(5)
  const [click, setClick] = useState(false)
  const [language, setLanguage] = useState('RU')
  const [isClosed, setIsClosed] = useState(false)

  const message = click ? 'Выберите язык' : 'Выберите уровень сложности'

  const easmedhard = (<>
  <button className={`button-3`} onClick = {() => {setDificulty(5); setClick(true)}}>Легкий</button>
    <button className={`button-3`} onClick = {() => {setDificulty(7); setClick(true)}}>Средний</button>
    <button className={`button-3`} onClick = {() => {setDificulty(10); setClick(true)}}>Сложный</button>
  </>)

  const langChoice = (<>
  <button className={`button-3`} onClick = {() => {setLanguage('RU'); console.log(language); setIsClosed(true)}}>RU</button>
    <button className={`button-3`} onClick = {() => {setLanguage('EN'); console.log(language);setIsClosed(true)}}>EN</button>
  </>)

  const buttons = click ? langChoice : easmedhard

  return (
    <>
    <div className={`modal ${!isClosed && "modal-active"}`}>


      <div>
    <h1>{message}</h1>
    {buttons}
      </div>



    </div>
    <App dificulty={dificulty} language = {language}/>
    </>
  )
}
