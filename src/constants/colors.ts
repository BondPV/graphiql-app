import { red } from '@mui/material/colors';

export const COLORS = {
  default: '#DADEEA',
  primaryLight: '#DADEEA',
  primaryMain: '#929fc1',
  primaryDark: '#001E6A',
  primaryContrastText: '#FFFFFF',
  secondaryMain: '#19857b',
  errorMain: red.A400,
  doc: {
    fieldName: '#5F89D8',
    arguments: '#FF6B8B',
    returnType: '#EB9C00',
  },
} as const;
