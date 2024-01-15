import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Accueil from './components/pages/Accueil.jsx';
import Profil from './components/pages/Profil.jsx';
import Communauté from './components/pages/Communauté.jsx';
import Réglage from './components/pages/Réglage.jsx';
import GlobalStyle from './utils/GlobalStyle.jsx';
import { DataProvider } from './utils/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/profil" element={<Profil />}>
            <Route path="yoga" />
            <Route path="natation" />
            <Route path="vélo" />
            <Route path="musculation" />
          </Route>
          <Route path="/réglage" element={<Réglage />} />
          <Route path="/communauté" element={<Communauté />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
