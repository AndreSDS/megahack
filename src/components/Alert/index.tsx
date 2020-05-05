import React from 'react';
import { Link } from 'react-router-dom';

import { FaPlus } from 'react-icons/fa';

import { Container, Close, Profiles } from './styles';

import logo from '../../assets/foxlogo.svg';

const Alert: React.FC = () => {
  return (
    <Container>
      <h1>Selecione seu perfil</h1>
      <div>
        <img src={logo} alt="GloboFeed" />
        <Profiles>
          <Link to="Dashboard">
            <img
              src="https://i.pinimg.com/736x/c7/d4/0d/c7d40d264aae4f4119cdf4e893ba0268.jpg"
              alt="Boy Profile"
            />
          </Link>
          <img
            src="https://icons.iconarchive.com/icons/dapino/teenage-girl/256/girl-in-love-icon.png"
            alt="Girl Profile"
            className="no-registered"
          />
          <img
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/senior_citizen2.png"
            alt="Senior Profile"
            className="no-registered"
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/family-1576189-1334454.png"
            alt="Family Profile"
          />
          <img
            src="https://cdn.fidelizarmais.com/files/production/855a2c87-a11a-4380-97b3-4b6bc51a39bb/app-store/icon/417e4fc6072148b68fac0d06b20da634-31012020.png"
            alt="Kids Profile"
          />
        </Profiles>
        <span>ou</span>
        <Link className="button" to="Dashboard">
          Adicionar um novo
        </Link>
      </div>
    </Container>
  );
};

export default Alert;
