import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login/Login';
import Navigator from './src/navigation/component/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { observer, Provider } from 'mobx-react';
import { rootStore } from './src/store/rootStore';

function App({store}) {
  return (
    <Provider>
      <NavigationContainer>
        <Navigator store={store}/>
      </NavigationContainer>
    </Provider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default observer((rootStore) => <App store={rootStore}/>)