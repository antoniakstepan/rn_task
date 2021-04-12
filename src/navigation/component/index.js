import React from 'react';
import { createAppContainer } from 'react-navigation';
import NavigationServise from '../../servises/NavigationServise';
import  Navigator from './Navigator';
 
const NavigationContainer = createAppContainer(Navigator)

export default () => <NavigationContainer ref={(nav) => NavigationServise.init(nav)} /> 