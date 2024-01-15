import React from 'react';
import styled from 'styled-components';
import FirstGraph from './FirstGraph';
import SecondGraph from './SecondGraph';
import ThirdGraph from './ThirdGraph';

const SmallerGraphContainer = styled.div`
width: 96%;
margin-top: 1rem;
gap: 1rem;
display: flex;
justify-content: space-between;
`;

const SmallerGraph = () => {
  return (
 <SmallerGraphContainer>
    <FirstGraph />
     <SecondGraph />
    <ThirdGraph/>  
 </SmallerGraphContainer>
  );
};

export default SmallerGraph;