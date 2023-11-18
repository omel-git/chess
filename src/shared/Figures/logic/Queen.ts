import { Colors } from 'shared/types/Colors/Colors';
import { Cell } from 'entities/Cell';
import blackLogo from 'shared/Figures/images/black-queen.png';
import whiteLogo from 'shared/Figures/images/white-queen.png';
import { Figure, FigureNames } from './Figure';

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyVertical(target)
      || this.cell.isEmptyHorizontal(target)
      || this.cell.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
