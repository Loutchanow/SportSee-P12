import React from 'react';
import styled from 'styled-components'
import SmallerGraph from './SmallerGraph';
import StickGraph from './StickGraph';



const Container = styled.div`
width: 75%;
display: flex;
height: 600px;
flex-direction: column;
align-items: center;
`;


const GraphContainer = () => {
  return (
    <Container>
      <StickGraph />
      <SmallerGraph/>
    </Container>
  );
};

export default GraphContainer;