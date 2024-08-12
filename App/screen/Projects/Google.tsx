import React from 'react';
import {RootContainer} from '@component';
import WebView from 'react-native-webview';

export default function Google() {
  return (
    <RootContainer title="Google">
      <WebView
        source={{uri: 'https://www.google.com'}}
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
      />
    </RootContainer>
  );
}
