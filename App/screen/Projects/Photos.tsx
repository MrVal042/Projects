import React from 'react';
import {RootContainer} from '@component';
import WebView from 'react-native-webview';

export default function Photos() {
  return (
    <RootContainer title="Photos">
      <WebView
        source={{uri: 'https://photos.google.com/'}}
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
      />
    </RootContainer>
  );
}
