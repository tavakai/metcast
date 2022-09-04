import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import MonthStatictics from '../MonthStatictics/MonthStatictics';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mothn-statistics' element={<MonthStatictics />} />
      </Routes>
    </div>
  );
}

export default App;
