import React from 'react';
import styled from "styled-components";



const BoutonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F0F0F0;
  padding: 3rem;
  border-radius: 10px;
  margin-top: 10rem;
  color: red;
  cursor: pointer;
  &:hover {
    background: red;
    color: #FBFBFB;
  }
`;

const Bouton = ({title, onClick}) => {

  return (
  <BoutonContainer onClick={onClick}>
    <h2>{title}</h2>
  </BoutonContainer>
  );
};

export default Bouton;