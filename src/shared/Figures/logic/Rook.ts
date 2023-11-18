import { Colors } from 'shared/types/Colors/Colors';
import { Cell } from 'entities/Cell';
import blackLogo from 'shared/Figures/images/black-rook.png';
import whiteLogo from 'shared/Figures/images/white-rook.png';
import { Figure, FigureNames } from './Figure';

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyVertical(target) || this.cell.isEmptyHorizontal(target)) {
      return true;
    }
    return false;
  }
}
