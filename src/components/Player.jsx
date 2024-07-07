import { useState } from "react"

export default function Player({playerName,playerNumber,changePlayerName}){
    const[playerNameState, setPlayerNameState] = useState(playerName)
    const[isEditing, setIsEditing] = useState(false)
    const handleOnchange = (event) => {
        setPlayerNameState(event.target.value)
    }

    const handleOnClick = () => {
        setIsEditing(isEditing => !isEditing)
        if(isEditing){
            changePlayerName(playerNameState, playerNumber)
        }
    }

    return <div className="flex w-fit gap-2 min-[500px]:gap-3 bg-zinc-200 p-2 min-[500px]:p-4 rounded">
        <input className="bg-stone-800 max-[500px]:w-64  rounded py-2 px-4 min-[500px]:py-1 min-[500px]:px-2 text-slate-100" value={playerNameState} onChange={isEditing? handleOnchange: null} readOnly={!isEditing}  />
        <button className={`rounded duration-150 ease-linear active:scale-95 hover:shadow-lg py-1 px-2 min-[500px]:py-2 min-[500px]:px-4 ${isEditing? "bg-green-400 hover:shadow-green-200": "bg-cyan-300 hover:shadow-cyan-200"}`}  onClick={handleOnClick} >{isEditing? "Save": "Edit"}</button>
    </div>
}