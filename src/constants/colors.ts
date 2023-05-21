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
} as const;
