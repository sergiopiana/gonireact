
import React from 'react';
import Admin from './Admin';
import Layout from '../../components/Layout';

async function action() {
  return {
    chunks: ['admin'],
    title: 'Admin',
    component: (
      <Layout>
        <Admin />
      </Layout>
    ),
  };
}

export default action;
