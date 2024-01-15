import React from 'react';
import styled from "styled-components";



const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 0.7rem;
  border-radius: 5px;
  color: red;
  &:hover {
    background: red;
    color: white;
  }
`;

const IconNav = ({ icon }) => {
  return (
      <IconContainer>{icon}</IconContainer>
  );
};

export default IconNav;
