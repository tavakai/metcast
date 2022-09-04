import React, { FC } from "react";
import Select from 'react-select';
import GlobalScgSelector from "../GlovalSvgSelector/GobalSvgSelector";
import style from './Header.module.scss';
import { IHome } from "./types";

const Header: FC<IHome> = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px'
    })
  }

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <GlobalScgSelector id="header-logo" />
        </div>
        <p className={style.appTitle}>Weather App</p>
      </div>
      <div className={style.wrapper}>
        <div className={style.changeTheme}>
          <GlobalScgSelector id="change-theme" />
        </div>
        <Select defaultValue={options[0]} styles={selectStyles} options={options} />
      </div>
    </header>
  )
}

export default Header;