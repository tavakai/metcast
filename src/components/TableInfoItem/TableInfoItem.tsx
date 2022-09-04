import React from 'react'
import { IItem } from './types';
import style from './TableInfoItem.module.scss';
import TableSvgSelector from '../TableSvgSelector/TableSvgSelector';

interface ITableInfoItem {
  item: IItem
}

export const TableInfoItem:React.FC<ITableInfoItem> = ({item}) => {
  const {id, name, value} = item;
  return (
    <div className={style.item}>
      <div className={style.indicator}>
        <TableSvgSelector id={id} />
      </div>
      <div className={style.indicator_name}>{name}</div>
      <div className={style.indicator_value}>{value}</div>
    </div>
  )
}
