import React from 'react';
import {Dashboard} from 'src/components/Dashboard/Dashboard';
import {widgets} from "src/mocks/dashboard.data";

import './styles/main.scss';

const App =() => {
  return (
    <div className="App">
      <Dashboard widgets={widgets} title="My Awesome SOLID Dashboard" />
    </div>
  );
}

export default App;
