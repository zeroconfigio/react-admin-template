import { RaThemeOptions, defaultTheme } from 'react-admin';

const theme: RaThemeOptions = {
  ...defaultTheme,
  // palette: {
  //   mode: 'dark', // Switching the dark mode on is a single property value change.
  // },
  // palette: {
  //   background: {
  //     default: '#fafafb',
  //   },
  // },
  components: {
    ...defaultTheme.components,
    // RaDatagrid: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: 'Lavender',
    //       '& .RaDatagrid-headerCell': {
    //         backgroundColor: 'MistyRose',
    //       },
    //     },
    //   },
    // },
  },
};

export default theme;
