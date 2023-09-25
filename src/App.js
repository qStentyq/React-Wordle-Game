import React, { useEffect, useState } from 'react'
import Wordle from './components/Wordle/Wordle'

function App({ dificulty = 5, language = 'RU'}) {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    console.log(dificulty, language)
    fetch(`http://localhost:3001/solutions${dificulty}${language}`)
    .then(res => res.json())
    .then(json => {
      const randomSolution = json[Math.floor(Math.random()*json.length)]
      setSolution(randomSolution.word)
    })
  }, [setSolution, dificulty, language])
  return (
    <div className="App">
      <h1>слоВО</h1>
      {solution && <div> <Wordle solution = {solution} dificulty = {dificulty} language = {language}/></div>}
    </div>
  );
}

export default App

