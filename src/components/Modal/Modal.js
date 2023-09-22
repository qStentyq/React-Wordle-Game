import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './modal.css'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
export default function Modal({ isCorrect, solution, turn}) {
    let message1 = '',
        message2 = `Правильное слово - `,
        turns = 'хода'
    if(turn === 1)
    {
        turns = 'ход'
    }
    if(turn > 5) {
        turns = 'ходов'
    }
  
    if(isCorrect) {
        message1 = `Поздравляю! Вы нашли решение за ${turn} ${turns}!`
    }
    else {
        message1 = `У вас закончились ходы. Повезет в следующий раз :(`
    }
  return (
    <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      {message1}
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      <p>{message2} <span className='solution'>{solution}</span></p>
    </Typography>
    <div>
    <button className="button-3"onClick={() => window.location.reload(false)}>Начать заного</button>
    </div>
  </Box>
  )
}
