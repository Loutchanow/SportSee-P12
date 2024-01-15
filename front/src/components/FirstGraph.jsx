import React from 'react';
import styled from 'styled-components';
import LineChartData from './recharts/graphData/LineChartData.jsx';



export const LineGraphContainer= styled.div`
background-color: #FF0000;
width:300px;
border-radius: 5px;
height: 250px;
display: flex;
align-items: center;
`;

const FirstGraph = () => {
  return (
    <LineGraphContainer>
      <LineChartData/>
    </LineGraphContainer>
  );
};

export default FirstGraph;