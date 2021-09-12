import '../src/style/_globalStyles.scss';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'default',
        value: '#6C63FF',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'gray',
        value: '#818181'
      }

    ],
  },
};
