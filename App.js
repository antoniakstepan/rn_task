import React from 'react';
// import { StyleSheet } from 'react-native';
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// const Wrap = observer(() => (
//   <StateProvider>
//     <NavigationContainer>
//       <Navigator/>
//     </NavigationContainer>
//   </StateProvider>
//  )
//  )

export default App