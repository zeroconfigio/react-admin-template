/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
import { AuthProvider } from 'react-admin';

// import { Auth } from 'aws-amplify';
// const authProvider = {
//     login: ({ username, password }) => Auth.signIn(username, password),
//     logout: Auth.signOut,
//     checkAuth: Auth.currentAuthenticatedUser,
// };

const authProvider: AuthProvider = {
  login: ({ username, password }: any): Promise<any> => {
    if (username !== 'admin' || password !== 'admin') {
      return Promise.reject();
    }
    localStorage.setItem('session', username);
    return Promise.resolve(true);
  },

  logout: (params: any): Promise<string | false | void> => {
    localStorage.removeItem('session');
    return Promise.resolve();
  },

  checkAuth: (params: any): Promise<void> => {
    return localStorage.getItem('session') ? Promise.resolve() : Promise.reject();
  },

  checkError: (error: any): Promise<void> => {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem('session');
      return Promise.reject();
    }

    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },

  // getIdentity?: (() => Promise<UserIdentity>) | undefined;
  getIdentity: () => {
    return Promise.resolve({
      id: 'user',
      fullName: 'Igor S.',
    });
  },

  // authorization
  getPermissions: (params: any): Promise<any> => {
    return Promise.resolve({});
  },
  // getPermissions: (params: any): Promise<any> => {
  //   return Promise.resolve({
  //     accountant: [
  //       { action: ['list', 'show'], resource: 'products' },
  //       { action: 'read', resource: 'products.*' },
  //       { type: 'deny', action: 'read', resource: 'products.description' },
  //       { action: 'list', resource: 'categories' },
  //       { action: 'read', resource: 'categories.*' },
  //       { action: ['list', 'show'], resource: 'customers' },
  //       { action: 'read', resource: 'customers.*' },
  //       { action: '*', resource: 'invoices' },
  //     ],
  //     contentEditor: [
  //       {
  //         action: ['list', 'create', 'edit', 'delete', 'export'],
  //         resource: 'products',
  //       },
  //       { action: 'read', resource: 'products.*' },
  //       { type: 'deny', action: 'read', resource: 'products.stock' },
  //       { type: 'deny', action: 'read', resource: 'products.sales' },
  //       { action: 'write', resource: 'products.*' },
  //       { type: 'deny', action: 'write', resource: 'products.stock' },
  //       { type: 'deny', action: 'write', resource: 'products.sales' },
  //       { action: 'list', resource: 'categories' },
  //       { action: ['list', 'edit'], resource: 'customers' },
  //       { action: ['list', 'edit'], resource: 'reviews' },
  //     ],
  //     stockManager: [
  //       { action: ['list', 'edit', 'export'], resource: 'products' },
  //       { action: 'read', resource: 'products.*' },
  //       {
  //         type: 'deny',
  //         action: 'read',
  //         resource: 'products.description',
  //       },
  //       { action: 'write', resource: 'products.stock' },
  //       { action: 'write', resource: 'products.sales' },
  //       { action: 'list', resource: 'categories' },
  //     ],
  //     administrator: [{ action: '*', resource: '*' }],
  //   });
  // },
};

export default authProvider;
