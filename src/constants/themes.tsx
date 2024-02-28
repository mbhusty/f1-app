import {Colors} from './colors';

export const lightTheme = {
  dark: false,
  colors: {
    primary: Colors.totalBlack,
    card: Colors.background,
    border: Colors.background,
    notification: '',
    background: Colors.background,
    text: '#FFFFFF',
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    primary: Colors.background,
    border: Colors.totalBlack,
    notification: '',
    background: Colors.totalBlack,
    card: Colors.totalBlack,
    text: Colors.totalBlack,
  },
};
