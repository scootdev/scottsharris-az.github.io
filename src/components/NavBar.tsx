import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end; // Right-align the child elements
  padding: 30px 7%;
  background-color: var(--background-color);
`;

const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavbarLink = styled.li`
  margin-left: 20px;
  a {
    color: #333; /* Default text color for light mode */
  
    @media (prefers-color-scheme: dark) {
      color: #fff; /* Light text color for dark mode */
    }
    text-decoration: none;
  }
`;

const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            {/* Removed the NavbarBrand component */}
            <NavbarLinks>
                <NavbarLink><a href="#aboutme">About Me</a></NavbarLink>
                <NavbarLink><a href="#showcase">Showcase</a></NavbarLink>
                <NavbarLink><a href="#contact">Contact</a></NavbarLink>
            </NavbarLinks>
        </NavbarContainer>
    );
};

export default Navbar;
