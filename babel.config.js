module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './app/assets',
          '@base': './app/base',
          '@component': './app/component',
          '@constant': './app/constant',
          '@data': './app/data',
          '@hooks': './app/hooks',
          '@navigation': './app/navigation',
          '@screen': './app/screen',
          '@service': './app/service',
          '@store': './app/store',
          '@utils': './app/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  presets: ['module:@react-native/babel-preset'],
};
