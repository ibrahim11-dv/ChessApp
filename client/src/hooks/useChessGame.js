import { useRef, useState } from "react";
import { Chess } from "chess.js";

export function useChessGame() {
    const chessGameRef = useRef(new Chess());
    const game = chessGameRef.current;
    const [fen, setFen] = useState(game.fen());
    const [history, setHistory] = useState([])

    function onPieceDrop({ sourceSquare, targetSquare }) {
        console.log("Source squar : " +sourceSquare,
            "targetSquare : " + targetSquare
        )
    try {
        game.move({ from: sourceSquare, to: targetSquare, promotion: "q" });
        setFen(game.fen());
        setHistory(game.history({verbose : true}))
        return true;
    } catch {
        return false;
    }
    }
    const resetGame = ()=>{
        game.reset()
        setFen(game.fen())
        setHistory([])
    }

    return { fen, onPieceDrop , history, resetGame};
}