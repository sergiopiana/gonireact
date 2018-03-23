/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */

/* eslint-disable global-require */
const routes = {
  path: '/',
  children: [
    {
      path: '/',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/catalogo',
      load: () => import(/* webpackChunkName: 'catalogo' */ './catalogo'),
    },
    {
      path: '/contacto',
      load: () => import(/* webpackChunkName: 'contacto' */ './contacto'),
    },    
  ],

  async action({ next }) {
    const route = await next();
    route.title = `${route.title || 'Untitled Page'} - Goñi Automotores`;
    route.description = route.description || '';
    return route;
  },
};

if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
