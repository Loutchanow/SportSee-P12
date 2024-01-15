import React from 'react';
import styled from 'styled-components';
import Bouton from '../Bouton';
import fetchData from '../../utils/Hook';
import { useData } from '../../utils/DataContext';

const AccueilContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const BlockFetch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fbfbfb;
  margin-top: 2rem;
  padding: 0.7rem;
  border-radius: 5px;
  gap: 2rem;
  color: red;
`;

const BlockUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;



const Accueil = () => {
  const { updateUser, updateUserId, setIsBack } = useData();
  const fetchBackDataForUser = async (id) => {
    try {
    let url= "http://localhost:4000"
      const data = await fetchData(url, `/user/${id}`);
      updateUser(data);
      updateUserId(id)
      setIsBack(true)
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  const fetchFrontUserData = async (userId) => {
    try {
      let url = 'data.json';
      const data = await fetchData(url, "");
      const user = data.USER_MAIN_DATA.find(user => user.id === userId);
        updateUser(user);
        updateUserId(userId)
        setIsBack(false)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  // let data = activity?.data?.session

  return (
    <AccueilContainer>
      <BlockFetch>
        <h1>Fetch user  back</h1>
        <BlockUser>
          <Bouton title={'Karl'} onClick={() => fetchBackDataForUser(12)} />
          <Bouton title={'Cécilia'} onClick={() => fetchBackDataForUser(18)} />
        </BlockUser>
      </BlockFetch>
      <BlockFetch>
        <h1>Fetch  user  front</h1>
        <BlockUser>
          <Bouton title={'Karl'} onClick={()=>fetchFrontUserData(12)} />
          <Bouton title={'Cécilia'} onClick={()=>fetchFrontUserData(18)} />
        </BlockUser>
      </BlockFetch>
    </AccueilContainer>
  );
};

export default Accueil;
