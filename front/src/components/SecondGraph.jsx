import React from 'react';
import styled from 'styled-components';
import RadarChartData from './recharts/graphData/RadarChartData';

export const RadarGraphContainer= styled.div`
background-color: #282d30;
width:300px;
border-radius: 5px;
height: 250px;
display: flex;
align-items: center;
`;

const SecondGraph = () => {
  return (
    <RadarGraphContainer>
      <RadarChartData/>
    </RadarGraphContainer>
  );
};

export default SecondGraph;