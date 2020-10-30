import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  pag: string;
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  pag,
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <Link to="/">
        <img src={Logo} alt="GoFinances" />
      </Link>
      {pag === 'import' && (
        <nav>
          <Link to="/">Listagem</Link>
          <Link className="active" to="/import">
            Import
          </Link>
          <Link to="/register">Cadastrar</Link>
        </nav>
      )}

      {pag === '/' && (
        <nav>
          <Link className="active" to="/">
            Listagem
          </Link>
          <Link to="/import">Import</Link>
          <Link to="/register">Cadastrar</Link>
        </nav>
      )}

      {pag === 'register' && (
        <nav>
          <Link to="/">Listagem</Link>
          <Link to="/import">Import</Link>
          <Link className="active" to="/register">
            Cadastrar
          </Link>
        </nav>
      )}
    </header>
  </Container>
);

export default Header;
