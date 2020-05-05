import React from 'react';

import { FaBars } from 'react-icons/fa';

import { Container, Content, Logo, Profile } from './styles';

import logo from '../../assets/foxlogo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>globofeed</Logo>
        <Profile>
          <img
            src="https://i.pinimg.com/736x/c7/d4/0d/c7d40d264aae4f4119cdf4e893ba0268.jpg"
            alt="Boy Profile"
          />
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
