// navigators/AppNavigator.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';

function AppNavigator() {
  return (
    <Routes>
        <Route path="/" element={<HomeScreen />}/>
      </Routes>
  );
}

export default AppNavigator;
