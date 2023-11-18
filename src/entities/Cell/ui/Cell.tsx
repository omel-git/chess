import { classNames } from 'shared/lib/classNames/classNames';
import { Cell } from 'entities/Cell';
import cls from './Cell.module.scss';

interface CellProps {
  className?: string;
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

export const CellComponent = ({
  className, cell, selected, click,
}: CellProps) => (
  <div
    className={classNames(cls.Cell, {}, [
      cls[cell.color],
      selected ? cls.selected : '',
      cell.available && cell.figure ? cls.CellAvailable : '',
    ])}
    onClick={() => click(cell)}
  >
    {cell.available && !cell.figure && <div className={classNames(cls.available, {}, [])} />}
    {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
  </div>
);
