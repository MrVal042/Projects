import React from 'react';
import {RootContainer} from '@component';
import WebView from 'react-native-webview';

export default function Google() {
  return (
    <RootContainer title="Google">
      <WebView
        style={{flex: 1}}
        scrollEnabled={true}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        source={{uri: 'https://www.google.com'}}
      />
    </RootContainer>
  );
}
