import { Layout, LayoutProps } from 'react-admin';
import { ReactQueryDevtools } from 'react-query/devtools';

import CssBaseline from '@mui/material/CssBaseline';

export default function MainLayout(props: LayoutProps) {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Layout {...props} />
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}
