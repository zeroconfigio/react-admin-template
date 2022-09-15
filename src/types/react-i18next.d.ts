import { i18nextResources } from 'i18n/i18n';

// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  type DefaultResources = typeof i18nextResources['en-US'];
  interface Resources extends DefaultResources {}
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof i18nextResources['en-US'];
  }
}
