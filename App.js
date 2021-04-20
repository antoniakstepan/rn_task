import React from 'react';
import Navigator from './src/navigation/component/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react';
import { Provider, createStore} from './src/store/rootStore';

const store = createStore()

const App = observer(() => { 
  return (
    <Provider value={store}>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    </Provider>
  
  )})

export default App