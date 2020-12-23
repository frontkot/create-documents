import React from 'react';
import './App.scss';
import AppRoutes from './routes/AppRoutes';
import './Container.scss';

const App = () => {
  return (
    <div className="App">
      <div className='container'>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;