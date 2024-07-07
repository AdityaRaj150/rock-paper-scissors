import { useEffect, useState } from "react";
import Hands from "./hand";
import { handSignsSvg } from "../util/HandSvg";


export default function Play({playerName, result, keyValue}){
    const[startPlaying, setStartPlaying] = useState()
    const[countDown, setCountDown] = useState(3)
    useEffect(()=> {
        const timer = setTimeout(()=> {
         setStartPlaying(true)
        }, 3000)

        return ()=> {
            clearTimeout(timer)
        }
    }, [])

    useEffect(()=> {
        let count
        if(!startPlaying){
            count = setInterval(()=> {
                setCountDown(count => count-1) 
            }, 1000)
        }

        return () => {
            clearInterval(count)
        }

    }, [startPlaying])

    let countDownColor
    if(countDown == 3){
        countDownColor = "text-red-500"
    }
    else if(countDown == 2){
        countDownColor = "text-green-500"
    }
    else{
        countDownColor = "text-yellow-500"
    }

    return<div className="flex flex-col gap-10 w-full">{!startPlaying && 
    <div className="flex w-full items-center justify-around" >
        <img className="w-1/3"  src={handSignsSvg[countDown-1]} />
        <h1 className={`text-center font-mono w-1/3 text-8xl ${countDownColor}`} >{countDown}</h1>
        <img className="w-1/3" src={handSignsSvg[countDown-1]} />
    </div>
    }

    {startPlaying && <Hands keyValue={keyValue} playerName={playerName} result={result} />}
        
    </div>
}