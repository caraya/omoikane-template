import omoikane from '@elrond25/omoikane-eslint-config';

export default [
  ...omoikane,
  {
    ignores: ['dist', 'public'],
  }
];
