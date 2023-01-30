import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router';
import { Dashboard } from './components/Dashboard';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:pageIndex" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
