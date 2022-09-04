import DaysSvgSelector from '../DaysSvgSelector/DaysSvgSelector';
import { IDay } from './Days';
import style from './Days.module.scss';

interface ICard {
  day: IDay;
}

export const Card = ({ day }: ICard) => {
  return (
    <div className={style.card}>
      <div className={style.day}>{day.day}</div>
      <div className={style.day__info}>{day.day_info}</div>
      <div className={style.img}>
        <DaysSvgSelector id={day.icon_id} />
      </div>
      <div className={style.temp__day}>{day.temp_day}</div>
      <div className={style.temp__night}>{day.temp_day}</div>
      <div className={style.info}>{day.info}</div>
    </div>
  );
};