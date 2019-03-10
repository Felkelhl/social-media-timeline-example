import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  border-bottom: 1px solid white;
  height: 46px;
  position: relative;
  width: 100%;
  background-color: #0077c8;
`;
const NavbarTitle = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 16px;
  font-size: 20px;
  font-weight: 500;
  cursor: default;
`;

const Navbar = () => (
  <NavbarContainer>
    <NavbarTitle> Social Media Timeline Example </NavbarTitle>
  </NavbarContainer>
);

export default Navbar;