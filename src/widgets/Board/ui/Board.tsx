import { classNames } from 'shared/lib/classNames/classNames';
import { Board } from 'widgets/Board';
import React, { useEffect, useState } from 'react';
import { Cell, CellComponent } from 'entities/Cell';
import { Player } from 'shared/Player/Player';
import cls from './Board.module.scss';

interface BoardProps {
  className?: string;
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

export const BoardComponent = ({
  className, board, setBoard, currentPlayer, swapPlayer,
}: BoardProps) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  function click(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
      updateBoard();
    } else if (cell.figure?.color === currentPlayer?.color) {
      setSelectedCell(cell);
    }
  }

  function highlightCells() {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <>
      <h3>
        Текущий игрок
        {currentPlayer?.color}
      </h3>
      <div className={classNames(cls.Board, {}, [className])}>
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <CellComponent
                click={click}
                cell={cell}
                key={cell.id}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
