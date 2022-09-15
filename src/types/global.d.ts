import { SxProps, Theme } from '@mui/material/styles';

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_API_URL?: string;
  }
}

declare global {
  type LocalStyles = Record<string, SxProps<Theme>>;
}
