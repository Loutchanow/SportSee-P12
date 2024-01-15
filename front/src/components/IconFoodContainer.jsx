import React from 'react';
import IconFood from './IconFood';
import styled from 'styled-components';
import { useData } from '../utils/DataContext';

const Container = styled.div`
height: 600px;
display: flex;
width: 20%;
flex-direction: column;
justify-content: space-between;
`;


const IconFoodContainer = () => {
  const {user, isBack} = useData()
  let quantity 
  quantity = isBack ? quantity = user.data.keyData : user.keyData

  return (
    <Container>
      <IconFood icon={"fa-solid fa-fire"} color={"#FF0000"} bcolor={"#FF3939"} typeOfFood={"Calories"} quantity={quantity.calorieCount}/>
      <IconFood icon={"fa-solid fa-drumstick-bite"} color={"#4AB8FF"} bcolor={"#73C8FF"} typeOfFood={"Protéines"} quantity={quantity.proteinCount}/>
      <IconFood icon={"fa-solid fa-apple-whole"} color={"#FDCC0C"} bcolor={"#FFD840"} typeOfFood={"Glucides"} quantity={quantity.carbohydrateCount}/>
      <IconFood icon={"fa-solid fa-burger"} color={"#FD5481"} bcolor={"#FE7FA1"} typeOfFood={"Lipides"} quantity={quantity.lipidCount}/>
    </Container>
  );
};

export default IconFoodContainer;