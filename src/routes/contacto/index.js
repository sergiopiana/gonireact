
import React from 'react';
import Contacto from './Contacto';
import Layout from '../../components/Layout';

async function action() {
  return {
    chunks: ['contacto'],
    title: 'Contacto',
    component: (
      <Layout>
        <Contacto />
      </Layout>
    ),
  };
}

export default action;
