import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import IconNav from './IconNav';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  justify-content: end;
  width: 10vh;
  height: 90vh;
  min-height: 780px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  padding: 0.5rem;
`;

const StyledCopyright = styled.div`
  font-size: 0.8rem;
  color: white;
  transform: rotate(-90deg);
  margin-top: 20vh;
  margin-bottom: 15vh;
  white-space: nowrap;
`;

const Nav = () => {
  return (
    <NavContainer>
      <IconContainer>
        <StyledLink to="/profil/yoga" > 
          <IconNav icon={<SelfImprovementIcon fontSize='large'/>} />
        </StyledLink>
        <StyledLink to="/profil/natation">
          <IconNav icon={<PoolIcon fontSize='large'/>}/>
        </StyledLink>
        <StyledLink to="/profil/vélo">
          <IconNav icon={<DirectionsBikeIcon fontSize='large'/>}/>
        </StyledLink>
        <StyledLink to="/profil/musculation">
          <IconNav icon={<FitnessCenter fontSize='large'/>}/>
        </StyledLink>
      </IconContainer>
      <StyledCopyright>Copright, SportSee 2020</StyledCopyright>
    </NavContainer>
  );
};

export default Nav;
