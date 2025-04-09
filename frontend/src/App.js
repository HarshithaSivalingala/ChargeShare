import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Renders the matched child route */}
    </>
  );
};

export default App;
