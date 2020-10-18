import React from 'react';

import GlobalStyle from './styles/global';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
