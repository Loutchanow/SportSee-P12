// Profil.jsx

import React from 'react';
import Nav from '../Nav';
import styled from "styled-components";
import Hello from '../Hello';
import IconFoodContainer from '../IconFoodContainer';
import GraphContainer from '../GraphContainer';
import { useData } from '../../utils/DataContext.jsx';

const ProfilPage = styled.div`
  display: flex;
`;

const ProfilContainer = styled.div`
  width: 100%;
`;

const AllStatContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Profil = () => {
  const { userId, user } = useData();
  if (!userId && !user) {
    return <h3>Veuillez d'abord sélectionner un profil front ou back dans l'onglet Acceuil.</h3>;
  }

  return (
    <ProfilPage>
      <Nav />
      <ProfilContainer>
        
        <Hello />
        <AllStatContainer>
          <GraphContainer />
          <IconFoodContainer />
        </AllStatContainer>
      </ProfilContainer>
    </ProfilPage>
  );
};

export default Profil;