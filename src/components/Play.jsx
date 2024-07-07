import { useEffect, useState } from "react";
import Hands from "./hand";
import { handSignsSvg } from "../util/HandSvg";


export default function Play({playerName, result, keyValue}){
    const[startPlaying, setStartPlaying] = useState()
    const[countDown, setCountDown] = useState(1)
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
                setCountDown(count => count+1) 
            }, 1000)
        }

        return () => {
            clearInterval(count)
        }

    }, [startPlaying])

    return<>{!startPlaying && 
    <div className="flex w-full items-center justify-around" >
    <img className="w-48"  src={handSignsSvg[countDown-1]} />
    <h1 className="text-center font-mono text-8xl" >{countDown}</h1>
    <img className="w-48" src={handSignsSvg[countDown-1]} />
    </div>
    }

    {startPlaying && <Hands keyValue={keyValue} playerName={playerName} result={result} />}
        
    </>
}