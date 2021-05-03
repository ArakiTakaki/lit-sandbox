import { Router } from '@vaadin/router';
import '../pages/index';

const INDEX = {
  path: '/',
  component: 'page-index',
};

const USERS = {
  path: '/users',
  component: 'page-users',
  action: () => import('../pages/users'),
};

const NOT_FOUND = {
  path: '(.*)',
  component: 'page-errors-notfound',
  action: () => import('../pages/errors/notfound'),
}


const paths = [
  INDEX,
  USERS,
  NOT_FOUND,
];
export const PATHS = {
  INDEX,
  USERS,
  NOT_FOUND,
} as const;

const definitionRouter = (element: HTMLElement) => {
  const router = new Router(element);
  router.setRoutes(paths);
}

export default definitionRouter;
