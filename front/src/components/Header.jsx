import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import logo from '../assets/logo.png'


const HeaderContainer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  padding: 1rem;
  min-width: 1024px;

`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  display: flex;
  text-decoration: none;
  color: white;
  &:hover {
    color: red;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Logo logo={logo} size={200} />
      </StyledLink>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/profil">Profil</StyledLink>
      <StyledLink to="/réglage">Réglage</StyledLink>
      <StyledLink to="/communauté">Communauté</StyledLink>

 
    </HeaderContainer>
  );
}

export default Header;
