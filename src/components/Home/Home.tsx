import { FC } from "react";
import { Days } from "../Days/Days";
import { Modal } from "../Modal/Modal";
import TableInfo from "../TableInfo/TableInfo";
import TodayWidjet from "../TodayWidjet/TodayWidjet";
import style from './Home.module.scss';
import { IHome } from "./types";

const Home: FC<IHome> = () => {
  const hanldeCloseModal = () => {

  }
  return (
    <main className={style.main}>
      <section className={style.today}>
        <TodayWidjet />
        <TableInfo />
      </section>
      <section className={style.days}>
        <Days />
      </section>
      <Modal hideModal={hanldeCloseModal} />
    </main>
  )
}

export default Home;