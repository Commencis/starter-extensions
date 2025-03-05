import commencisPrettierConfig from '@commencis/prettier-config';

export default {
  ...commencisPrettierConfig,
  overrides: [
    {
      files: 'templates/markdown/**/*.hbs',
      options: {
        parser: 'markdown',
      },
    },
  ],
};
