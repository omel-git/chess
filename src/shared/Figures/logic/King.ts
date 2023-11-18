import { Colors } from 'shared/types/Colors/Colors';
import { Cell } from 'entities/Cell';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../images/black-king.png';
import whiteLogo from '../images/white-king.png';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    return false;
  }
}
