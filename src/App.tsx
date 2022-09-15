import { Admin, Resource } from 'react-admin';
import { BrowserRouter } from 'react-router-dom';

import queryClient from '@app/config/clients/query';
import authProvider from '@app/config/providers/auth';
import dataProvider from '@app/config/providers/data';
import defaultTheme from '@app/config/theme/default';

import DashboardPage from '@app/pages/DashboardPage';
import LoginPage from '@app/pages/LoginPage';
// Modules
import UserResourceConfig from '@app/pages/users';

import MainLayout from '@app/layouts/MainLayout';

const AdminConfig = {
  theme: defaultTheme,
  layout: MainLayout,
  // i18nProvider: i18nProvider,
  loginPage: LoginPage,
  dashboard: DashboardPage,
  queryClient: queryClient,
  authProvider: authProvider,
  dataProvider: dataProvider,
  requireAuth: true,
};

export default function App() {
  return (
    <BrowserRouter>
      <Admin {...AdminConfig}>
        <Resource {...UserResourceConfig} />
      </Admin>
    </BrowserRouter>
  );
}
