import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Auth from './Auth';
import ProfileTab from './ProfileTab';

// const routs = {
// 	[screens.Login]: Login,
// 	[screens.Register]: Register,
// }

// export default createStackNavigator(routs, {
// 	initialRouteName: screens.Login,
	
// })

const Stack = createStackNavigator()

function Navigator() {
	return (
		<Stack.Navigator initialRouteName={Auth}>
			<Stack.Screen name="Auth" component={Auth} options={{
				mode: 'screen',
				headerShown: false,
			}}/>
			<Stack.Screen 
				name="ProfileTab" 
				component={ProfileTab}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
} 

export default Navigator;