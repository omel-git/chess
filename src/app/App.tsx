import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Board, BoardComponent } from 'widgets/Board';
import { useEffect, useState } from 'react';
import { Player } from 'shared/Player/Player';
import { Colors } from 'shared/types/Colors/Colors';
import { LostFigures } from 'entities/LostFigures';

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  return (
    <div className={classNames('app', {}, [])}>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <LostFigures
        title="Черные фигуры"
        figures={board.lostBlackFigures}
      />
      <LostFigures
        title="Белые фигуры"
        figures={board.lostWhiteFigures}
      />
    </div>
  );
}

export default App;
