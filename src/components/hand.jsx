const handSigns = ["Paper", "Rock", "Scissors"]
import { useMemo } from "react"
import { handSignsSvg } from "../util/HandSvg"
import trophyImg from "../assets/trophy.svg"

const winnerFnc = (sign1, sign2) => {
    if(sign1 === sign2) return "draw"
    if(sign1 === "Paper"){
        if(sign2 === "Rock") return "1"
        else return "2"
    }
    if(sign1 === "Rock"){
        if(sign2 === "Scissors") return "1"
        else return "2"
    }
    if(sign1 === "Scissors"){
        if(sign2 === "Paper") return "1"
        else return "2"
    }
}




export default function Hands({keyValue, playerName, result}){
    let randomNumber = useMemo(()=> Math.floor(Math.random()*3),[keyValue])
    const sign1Svg = handSignsSvg[randomNumber]
    const sign1 = handSigns[randomNumber]
    randomNumber = useMemo(()=> Math.floor(Math.random()*3),[keyValue])
    const sign2Svg = handSignsSvg[randomNumber]
    const sign2 = handSigns[randomNumber]
    const winner = winnerFnc(sign1, sign2)
   
    let resultText
    if(winner == "draw"){
        resultText = "It's a Draw!"
    }
    else if(winner === "1"){
        resultText = `${playerName['1']} Won!`
    }
    else {
        resultText = `${playerName['2']} Won!`
    }
   
    const res = useMemo(() => result(winner), [keyValue])

    return <>
        <div className="flex w-full justify-center items-center " >
            <div className="flex justify-center w-1/2" ><img className="w-48" src={sign1Svg} alt="rockpaperscissor" /></div>
            <div className="flex justify-center w-1/2" ><img className="w-48"  src={sign2Svg} alt="rockpaperscissor" /></div>
        </div>
        <div className="flex justify-center flex-col items-center gap-5" >
            <h1 className="text-center text-4xl font-medium font-sans bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-800 text-transparent" >
                {resultText}
            </h1>
            {winner !== "draw" && <img className="w-10" src={trophyImg} alt="rockpaperscissor"/>}
        </div>
      
        
    </>
    
}