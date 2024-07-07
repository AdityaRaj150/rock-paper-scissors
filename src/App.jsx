import { useState } from "react"
import Player from "./components/Player"
import Result from "./components/Result"
import Play from "./components/Play"
const INITIAL_PLAYERS_NAME = {
  1: "player 1",
  2: "player 2"
}
export default function App(){
 
  const[playersName, setPlayersName] =  useState(INITIAL_PLAYERS_NAME)
  const[matchResults, setMatchResults] = useState({1: 0, 2: 0, draw:0})
  const[gameNumber, setGameNumber] = useState(0)
  const[newMatch, setNewMatch] = useState(0)

  const handleOnClick = ()=> {
    setGameNumber(gameNum => gameNum+1)
    setNewMatch(newMatch+1)
  }

  const setResult = (winner) =>{
   
    if(winner === "draw"){
      setMatchResults({...matchResults, draw: matchResults['draw']+1})
    }
    else if(winner === '1'){
      setMatchResults({...matchResults, 1: matchResults['1']+1})
    }
    else {
      setMatchResults({...matchResults, 2: matchResults['2']+1})
    }
    setNewMatch(newMatch+1)
  }

  const handlePlayerNameChange = (playerName, playerNumber)=> {
      setPlayersName({
        ...playersName, [playerNumber]:playerName
  })



  }
  return <>
    <h1 className="text-center my-20 font-sans font-medium text-5xl bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-800 text-transparent" >Rock, paper, Scissors</h1>
    <div className="w-fit m-auto">
    <section className="flex items-center flex-col min-[810px]:flex-row justify-center gap-10 my-20" >
    <Player playerName={playersName['1']} playerNumber="1" changePlayerName={handlePlayerNameChange} />
    <Player playerName={playersName['2']} playerNumber="2" changePlayerName={handlePlayerNameChange} />
    </section>
    <section className="flex justify-center items-center flex-col " >
    {newMatch==0 && <button onClick={handleOnClick} className="py-2 max-w-fit px-6 my-2 rounded-3xl bg-cyan-300 hover:shadow-lg hover:shadow-cyan-100 hover:scale-105  text-stone-900 duration-150 ease-linear active:scale-95">Play</button>}
    {newMatch !=0 && newMatch%2 == 0 && <button onClick={handleOnClick} className="py-2 my-2 max-w-fit px-6 rounded-3xl hover:shadow-lg hover:shadow-cyan-100 hover:scale-105 duration-150 ease-linear active:scale-95 bg-cyan-300 text-stone-900">Play again</button>}
      {newMatch>0 && <Play keyValue={gameNumber} key={gameNumber} result={setResult} playerName={playersName} />}
    </section>
    <Result matchResult={matchResults} playerName={playersName}/>
    </div>
  
   
  </>
}