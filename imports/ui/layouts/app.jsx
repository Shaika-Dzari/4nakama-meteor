import React from 'react';
import Header from '../components/header/header.jsx';

export const App = ( { children } ) => (
  <div>
    <Header />
    { children }
  </div>
)