import style from './Tabs.module.scss';
import { TabsItem } from './TabsItem';

export interface ITabs {
  title: string
}

export const Tabs = ({}) => {
  const tabs = [
    {
      title: 'На неделю'
    },
    {
      title: 'На 10 дней'
    },
    {
      title: 'На месяц'
    }
  ]
  return (
    <div className={style.tabs}>
      <ul className={style.tab_list}>
        {
          tabs.map((i: ITabs) => {
            return <TabsItem value={i} key={i.title} />
          })
        }
        </ul>
      <div className={style.cancel}>
        Отменить
      </div>
    </div>
  )
}