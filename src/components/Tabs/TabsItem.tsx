import React from 'react'
import { ITabs } from './Tabs';
import style from './Tabs.module.scss';

interface ITabsItem {
  value: ITabs
}

export const TabsItem = ({value}: ITabsItem) => {
  return (
    <li className={style.tab}>
      {value.title}
    </li>
  )
}
