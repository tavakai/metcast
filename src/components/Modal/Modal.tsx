import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import DaysSvgSelector from '../DaysSvgSelector/DaysSvgSelector';
import GlobalScgSelector from '../GlovalSvgSelector/GobalSvgSelector';
import { TableInfoItem } from '../TableInfoItem/TableInfoItem';
import { IItem } from '../TableInfoItem/types';
import s from './Modal.module.scss';

interface IModal {
  hideModal: () => void
}

export const Modal: React.FC<IModal> = ({ hideModal }) => {
  const modal = true;
  const modalRoot = document.getElementById("modals") as HTMLElement;
  const tableInfoItems = [
    {
      id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
    {
      id: 'wind',
      name: 'Ребейз',
      value: 'Научиться делать',
    },
    {
      id: 'pressure',
      name: 'Новый параметр',
      value: '-300 чего-то',
    },
    {
      id: 'pressure',
      name: 'Еще одно',
      value: 'блаблаблао',
    },
    {
      id: 'snow',
      name: 'Снег',
      value: 'Снегопад',
    },
    {
      id: 'precipitation',
      name: 'Влажность',
      value: 'Кожа трескается',
    },
    {
      id: 'precipitation',
      name: 'Через sourceTree',
      value: 'aslkdjaskjdh',
    },
  ];
  const handleEsc = (e: KeyboardEvent) => {
    e.code === 'Escape' && hideModal();
  }
  useEffect(() => {
    if (modal) {
      document.addEventListener('keydown', handleEsc)
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [modal]);

  return ReactDOM.createPortal(
    <React.Fragment>
      <section className={s.overlay + ' ' + s.overlay_show}>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>Среда</div>
          <div className={s.img}>
            <DaysSvgSelector id="sun" />
          </div>
          <div className={s.day__time}>
            Время: <span>21:54</span>
          </div>
          <div className={s.day__city}>
            Время: <span>Санкт-Петербург</span>
          </div>
        </div>
        <div className={s.this__day_info_items}>
          {tableInfoItems.map((item: IItem) => (
            <TableInfoItem key={item.id} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalScgSelector id="close" />
        </div>
        </div>
      </section>
    </React.Fragment>,
    modalRoot
  )
}