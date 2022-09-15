// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// import i18next from 'i18next';
// import './i18n-init';

// Mock timezone and location for tests
process.env.TZ = 'America/Sao_Paulo';
process.env.LANG = 'pt_BR.UTF-8';

// i18next.changeLanguage('cimode');

if (!('clipboard' in navigator)) {
  Object.assign(navigator, {
    clipboard: {
      writeText: () => Promise.resolve(),
    },
  });
}
