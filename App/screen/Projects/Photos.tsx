import React from 'react';
import {RootContainer} from '@component';
import WebView from 'react-native-webview';

export default function Photos() {
  return (
    <RootContainer title="Photos">
      <WebView
        style={{flex: 1}}
        scrollEnabled={true}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        source={{uri: 'https://photos.google.com/'}}
      />
    </RootContainer>
  );
}
