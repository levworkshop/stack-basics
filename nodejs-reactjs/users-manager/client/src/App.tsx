import React from 'react';
import UsersManager from "./users/UsersManager";
// import logo from './logo.svg';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/solid.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <UsersManager />
    </div>
  );
};

export default App;
