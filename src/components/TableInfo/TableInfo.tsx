import { FC } from "react";
import style from './TableInfo.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import { IItem } from "../TableInfoItem/types";
import { TableInfoItem } from "../TableInfoItem/TableInfoItem";

const TableInfo: FC = () => {
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
  ];

  return (
    <div className={style.tableInfo_wrapper}>
      <div className={style.tableInfo_content}>
        {
          tableInfoItems.map((item: IItem) => {
            return <TableInfoItem item={item} key={item.id} />
          })
        }
      </div>
    </div>
  )
}

export default TableInfo;