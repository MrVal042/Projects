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
          '@screen': './app/screen',
          '@service': './app/service',
          '@store': './app/store',
          '@navigation': './app/navigation',
          '@utils': './app/utils',
          '@hooks': './app/hooks',
        },
      },
      'react-native-reanimated/plugin',
    ],
  ],
  presets: ['module:@react-native/babel-preset'],
};
