import PlayerResult from "./PlayerResult"
export default function Result ({matchResult, playerName}){
    const player1Wins = parseInt(matchResult["1"])
    const player2Wins = parseInt(matchResult['2'])
    const draws = parseInt(matchResult["draw"])
    const totalMatches = player1Wins+player2Wins+draws
    return<div className=" flex flex-col gap-10 my-10 w-full justify-center items-center">
        <h1 className="text-center underline underline-offset-4 decoration-cyan-500" >Total Matches: {totalMatches}</h1>
        <div className="flex flex-col min-[810px]:flex-row w-full justify-between gap-10 items-center" >
        <PlayerResult name={playerName['1']} win={player1Wins} loss={totalMatches-player1Wins} draw={draws} />
        <PlayerResult name={playerName['2']} win={player2Wins} loss={totalMatches-player2Wins} draw={draws} />
        </div>
       
    </div>
}