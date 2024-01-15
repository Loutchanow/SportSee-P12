import React from 'react';
import styled from 'styled-components';

const StyledFood = styled.div`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  gap: .5rem;
  padding: 1rem;
  color: black;
  background-color: #FBFBFB;
`;

const StyledIconFood = styled.div`
  font-size: 1.4rem;
  display: flex;
  text-decoration: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 1.4rem 1.4rem;
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${props => props.color};
  background-color: ${props => `${props.bcolor}30`};
`;
const StyledInfoFood = styled.div`
  text-decoration: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 1rem;
`;

const IconFood = ({ icon, color, bcolor, typeOfFood, quantity }) => {
  return (
    <StyledFood>
      <StyledIconFood color={color} bcolor={bcolor}>
        <i className={icon}></i>
      </StyledIconFood>
      <StyledInfoFood>
        <h3>{quantity}g</h3>
        <p>{typeOfFood}</p>
      </StyledInfoFood>
    </StyledFood>
  );
};

export default IconFood;