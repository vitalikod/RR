import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './components/home/home';
import PrivateRoute from './components/utils/router/privateRoute';
import AuthRootComponent from './components/auth';


function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='login' element={<AuthRootComponent />} />
        <Route path='register' element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;
