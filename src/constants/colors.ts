import { red } from '@mui/material/colors';

export const COLORS = {
  default: '#DADEEA',
  background: '#FFFFFF',
  primaryLight: '#DADEEA',
  primaryMain: '#929fc1',
  primaryDark: '#001E6A',
  primaryContrastText: '#FFFFFF',
  secondaryMain: '#19857b',
  errorMain: red.A400,
  doc: {
    fieldName: '#5F89D8',
    arguments: '#d32f2f',
    returnType: '#EB9C00',
  },
  gradient: {
    light: 'linear-gradient(222.57deg, #FFFFFF -5.18%, #EBEEF3 24.79%, #DADEEA 71.54%)',
    dark: 'radial-gradient(83.22% 83.22% at 38.66% 1.86%, #000B26 0%, #001E6A 100%)',
    gridItem:
      'radial-gradient(97.45% 330.08% at 4.95% 10.11%, #929fc1 0%, rgba(0, 30, 106, 0.5) 100%)',
  },
} as const;
