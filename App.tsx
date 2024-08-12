import {PersistGate} from 'redux-persist/integration/react';
import {enableFreeze} from 'react-native-screens';
import {Provider} from 'react-redux';
import React from 'react';
import store, {persistor} from '@store';
import {LoadApp} from '@base';

enableFreeze(true);

export default function App() {
  return (
    <Provider {...{store}}>
      <PersistGate loading={null} {...{persistor}}>
        <LoadApp />
      </PersistGate>
    </Provider>
  );
}
