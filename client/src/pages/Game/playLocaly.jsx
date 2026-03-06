import { useState } from "react";
import Board from "../../components/Game/Board.jsx";
import { useChessGame } from "../../hooks/useChessGame.js";
import "./playLocaly.css";

function PlayLocally() {
  const { fen, onPieceDrop, history, resetGame } = useChessGame();
  const [movesOpen, setMovesOpen] = useState(false);
  const [difficulty, setDifficulty] = useState("Normal");

  const difficulties = ["Easy", "Normal", "Hard"];

  return (
    <>
      <div className="container">
        <div className="boardContainer">
          <Board fen={fen} onPieceDrop={onPieceDrop} />
        </div>

        <div className="menu">

          <div className="menu-top">
            <div className="menu-header">
              <h1>Game Info</h1>
              <span className="turn-badge">
                {history.length % 2 === 0 ? "White" : "Black"}'s Turn
              </span>
            </div>

            <div className="section">
              <p className="section-label">Bot Difficulty</p>
              <div className="difficulty-group">
                {difficulties.map((d) => (
                  <button
                    key={d}
                    className={`diff-btn diff-btn--${d.toLowerCase()} ${difficulty === d ? "active" : ""}`}
                    onClick={() => setDifficulty(d)}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="section">
              <button
                className="dropdown-toggle"
                onClick={() => setMovesOpen((o) => !o)}
              >
                <span>Move History</span>
                <span className="dropdown-meta">
                  <span className="move-count">{history.length}</span>
                  <svg
                    className={`chevron ${movesOpen ? "open" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              <div className={`moves-panel ${movesOpen ? "open" : ""}`}>
                {history.length === 0 ? (
                  <p className="no-moves">No moves yet</p>
                ) : (
                  <ul className="moves">
                    {history.map((move, i) => (
                      <li key={i} className={i % 2 === 0 ? "white-move" : "black-move"}>
                        <span className="move-num">{Math.floor(i / 2) + 1}{i % 2 === 0 ? "." : "…"}</span>
                        <span className="move-san">{move.san}</span>
                        <span className="move-to">{move.to}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="btns">
            <button className="btn btn--reset" onClick={() => resetGame()}>
              ↺ Reset Game
            </button>
            <button className="btn btn--secondary">something</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default PlayLocally;