import { useState } from "react"

const useWorld = (solution) =>
{
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)


    const formatGuess = () =>
    {
        console.log('formating the guess -',currentGuess)
        let solutionArray = [...solution]
        let formatedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        })

        //Zelenie knopki
        formatedGuess.forEach((l, i) =>{
            if(solutionArray[i] === l.key) {
                formatedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        //Zheltie
        formatedGuess.forEach((l,i) => {
            if(solutionArray.includes(l.key) && l.color !== 'green') {
                formatedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null 
            }
        })

        return formatedGuess
    }

    const addNewGuess = (newGuess) => {
        setHistory(history => [...history, newGuess])
        console.log(history)
    }

    const handleKeyup = ({ key }) =>
    {
        if(key === 'Backspace') {
            setCurrentGuess(prev => prev.slice(0, -1))
            return
        }
        if(key === 'Enter')
        {
            const compareCurrentGuess = history.filter(item => item === currentGuess)
            
            if(currentGuess.length < 5 ) {
                alert('Слово должно состоять из 5 букв');
                return
            }
            if(turn > 5) {
                alert('Вы уже использовали все свои попытки')
                return
            }
            if(compareCurrentGuess.length > 0 ){
                alert('Вы уже использовали это слово, введите другое')
                return
            }
            const formatted = formatGuess()
            console.log(formatted)
            addNewGuess(currentGuess)
            setCurrentGuess('')
            setTurn(turn => turn + 1)
            return
        }
        if(/^[A-Za-z]$/.test(key)) {
            if(currentGuess.length < 5){
                setCurrentGuess(current => current + key)
            }
        }
    }


    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWorld