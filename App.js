import React from 'react';
import Navigator from './src/navigation/component/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react';
import { useStore } from './src/store/rootStore';
import { StateProvider} from './src/store/rootStore';



const App = () => { 
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
}

export default App