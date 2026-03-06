import { Chessboard } from "react-chessboard";

export default function Board({ fen, onPieceDrop }) {
    const BoardOptions = {
        position: fen,
        onPieceDrop,
    }
  return <Chessboard options={BoardOptions} />;
}