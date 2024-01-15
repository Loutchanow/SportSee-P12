import React from 'react';
import styled from 'styled-components';
import { useData } from '../utils/DataContext';


const HelloContainer = styled.div`
background-color: white;
margin: 3rem;
h2{
  font-size: 30px;
}
p{
  font-size: 15px;
  padding-top: 1rem;
}
`;

const Hello = () => {
  const {user, isBack} = useData()
  let name
    name = isBack?
    name = user.data.userInfos.firstName : name = user.userInfos.firstName
  
  return (
    <HelloContainer>
      <h2>Bonjour <strong>{name}</strong> </h2>
      <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
    </HelloContainer>
  );
};

export default Hello;