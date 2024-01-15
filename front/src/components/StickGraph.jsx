import React from 'react';
import styled from 'styled-components';
import BarChartData from './recharts/graphData/BarChartData.jsx';



const StickContainer = styled.div`
background-color: #FBFBFB;
height: 350px;
width: 96%;
display: flex;
padding-left: 1rem;
margin: auto;
`;

const StickGraph = () => {
  return (
    <StickContainer>
      <BarChartData/>
    </StickContainer>
  );
};

export default StickGraph;