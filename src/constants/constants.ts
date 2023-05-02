const AUTHORS = [
  {
    name: 'Pavel',
    url: 'https://github.com/BondPV',
  },
  {
    name: 'Marina',
    url: 'https://github.com/MarinaStepanchuk',
  },
  {
    name: 'Alesia',
    url: 'https://github.com/Alesia-V175',
  },
];

const REGEX_NAME =
  /^(?:[A-ZА-ЯЁ][a-zа-яё]{2,}\s){0,2}[A-ZА-ЯЁ][a-zа-яё]{2,}(?:\s[A-ZА-ЯЁ][a-zа-яё]{2,})?$/;

const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/;

export { AUTHORS, REGEX_NAME, REGEX_EMAIL, REGEX_PASSWORD };
