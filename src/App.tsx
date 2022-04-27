/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route index element={<h1>MAIN PAGE</h1>} />
    <Route path="*" element={<h1>NOT FOUND</h1>} />
  </Routes>
);

export default App;
