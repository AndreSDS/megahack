import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles';

import logo from '../../assets/globo.png';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Form>
        <img src={logo} alt="GloboFeed" />
        <input name="email" placeholder="Digite seu -email" />
        <input name="password" type="password" placeholder="Digite sua senha" />
        <Link to="Profile">Logar</Link>
        <Link to="SignUp">Criar uma conta Globo</Link>
      </Form>
    </Container>
  );
};

export default Dashboard;
