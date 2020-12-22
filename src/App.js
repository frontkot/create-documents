import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;