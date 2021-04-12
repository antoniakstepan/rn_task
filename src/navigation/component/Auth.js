import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { screens } from './screens'
import { Login } from '../../screens/Login/Login'
import { Register } from '../../screens/Register/Register'

const Stack = createStackNavigator();

function Auth() {
	return (
	<Stack.Navigator>
		<Stack.Screen 
			name="Login" 
			component={Login}
			options={{
					headerTintColor: 'black',
					headerTitleAlign: 'center'
		}}
		/>
		<Stack.Screen name="Register" component={Register}/>
	</Stack.Navigator>
	);
}

export default Auth;