import React from 'react';
import styled from 'styled-components';
import RadialChartData from './recharts/graphData/RadialChartData.jsx';

export const RadialGraphContainer= styled.div`
background-color: #FBFBFB;
width: 300px;
border-radius: 5px;
height: 250px;
display: flex;
align-items: center;
`;


const ThirdGraph = () => {
  return (
    <RadialGraphContainer>
      <RadialChartData/>
    </RadialGraphContainer>
  );
};

export default ThirdGraph;