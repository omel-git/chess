import { classNames } from 'shared/lib/classNames/classNames';
import { Figure } from 'shared/Figures';
import cls from './LostFigures.module.scss';

interface LostFiguresProps {
  className?: string;
  title: string;
  figures: Figure[];
}

export const LostFigures = ({ className, title, figures }: LostFiguresProps) => (
  <div
    className={classNames(cls.LostFigures, {}, [])}
  >
    <h3>{title}</h3>
    {figures.map((figure) => (
      <div key={figure.id}>
        {figure.name}
        {figure.logo && <img src={figure.logo} alt="" />}
      </div>
    ))}
  </div>
);
