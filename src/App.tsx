import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Board from './components/Board'

function App() {
  const playerBoardRef = useRef<{
    focus:()=>void
  }>(null);
  useEffect(()=>{
    handleFocusOnPlayer()
    window.addEventListener('click',handleFocusOnPlayer);
    return()=>{
      window.removeEventListener('click',handleFocusOnPlayer)
    }
  },[playerBoardRef])

  const handleFocusOnPlayer=()=>{
    playerBoardRef?.current?.focus()
  }

  return (
    <div className="App">
      <Board ref={playerBoardRef} />
    </div>
  )
}

export default App
