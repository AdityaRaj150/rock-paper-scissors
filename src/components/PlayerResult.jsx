import winImg from "../assets/win.svg"
import lossImg from "../assets/loss.svg"
import drawImg from "../assets/draw.svg"
export default function PlayerResult({name,win, loss, draw}){
        const nameToShow = name.substring(0, Math.min(name.length, 30))
        console.log(nameToShow)
        console.log(name)
        return <div className="rounded bg-stone-800 w-full m-auto p-10 text-xs sm:text-sm flex flex-col justify-center items-center">
            <div className="w-[65%]  max-[380px]:w-[70%] flex flex-col justify-start gap-7" >
                <h1 className="text-center max-w-full text-slate-100 text-sm sm:text-lg">{nameToShow}</h1>
                <div className="min flex gap-2 justify-between " >
                    <h2 className="text-green-400 w-1/3" >Win</h2>
                    <img className="w-5" src={winImg} />
                    <h2 className="text-green-400" >:</h2>
                    <h2 className="text-green-400" >{win}</h2>
                </div>  
                <div className="min-w-fit flex gap-2 justify-between" >
                    <h2 className="text-red-400 w-1/3" >Loss</h2>
                    <img className="w-5" src={lossImg} />
                    <h2 className="text-green-400" >:</h2>
                    <h2 className="text-red-400" >{loss}</h2>
                </div>
                <div className="min-w-fit flex gap-2 justify-between" >
                    <h2 className="text-cyan-400 w-1/3" >Draw</h2>
                    <img className="w-5" src={drawImg} />
                    <h2 className="text-green-400" >:</h2>
                    <h2 className="text-cyan-400" >{draw}</h2>
                </div>
            </div>
           
            
        </div>
}