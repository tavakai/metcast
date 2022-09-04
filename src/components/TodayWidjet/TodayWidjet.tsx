import { FC } from 'react';
import style from './TodayWidjet.module.scss';
import sun_icon from '../../assets/icons/sun.png';

const TodayWidjet: FC = () => {
  return (
    <div className={style.TodayWidjet_wrapper}>
      <div className={style.top_block}>
        <div className={style.today_info}>
          <p className={style.this_temp}>20º</p>
          <p className={style.this_day}>Сегодня</p>
        </div>
        <img src={sun_icon} alt="#" className={style.weather_state_icon} />
      </div>
      <div className={style.bottom_block}>
         <p className={style.current_time}>
           Время: 20:54
         </p>
         <p className={style.city}>
           Санкт-Петербург
         </p>
      </div>
    </div>
  )
}

export default TodayWidjet;