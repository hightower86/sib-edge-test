import React from 'react';

import UsersList from './UsersList';
import aStyle from './app.module.scss';

const App = () => {
  return (
    <div className={aStyle.container}>
      <h1>Users list from sibEDGE</h1>
      <UsersList />
    </div>
  );
};

export default App;
