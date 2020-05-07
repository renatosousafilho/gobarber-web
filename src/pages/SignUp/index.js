import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/asssets/logo.svg';

export default function index() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="name" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
