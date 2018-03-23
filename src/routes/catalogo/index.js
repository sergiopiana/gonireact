
import React from 'react';
import Catalogo from './Catalogo';
import Layout from '../../components/Layout';

async function action() {
  return {
    chunks: ['catalogo'],
    title: 'Vehiculos',
    component: (
      <Layout>
        <Catalogo />
      </Layout>
    ),
  };
}

export default action;
