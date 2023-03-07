import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './components/home/home';
import Login from './components/auth/login';
import PrivateRoute from './components/utils/router/privateRoute';


function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
