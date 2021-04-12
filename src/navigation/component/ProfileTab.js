import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Browse } from '../../screens/Browse/Browse';
import { Saved } from '../../screens/Saved/Saved';
import { Inbox } from '../../screens/Inbox/Inbox';
import { Profile } from '../../screens/Profile/Profile';
import { AntDesign , Ionicons, Entypo, Fontisto} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const ProfileTab = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen 
				name="Browse" 
				component={Browse}
				headerTitle="Icon"
				options={{
					tabBarIcon: ({}) => (
						<AntDesign name="search1" size={24} color="#A0A4B1"/>
					),
					tabBarLabel: "Browse"
				}}
			/>
			<Tab.Screen 
				name="Saved" 
				component={Saved}
				options={{
					tabBarIcon: ({}) => (
						<Entypo name="bookmark" size={24} color="#A0A4B1"/>
					),
					tabBarLabel: "Saved"
				}}
			/>
			<Tab.Screen 
				name="Inbox" 
				component={Inbox}
				options={{
					tabBarIcon: ({}) => (
						<Fontisto name="mobile-alt" size={24} color="#A0A4B1"/>
					),
					tabBarLabel: "Browse"
				}}
			/>
			<Tab.Screen 
				name="Profile" 
				component={Profile}
				options={{
					tabBarIcon: ({}) => (
						<Ionicons name="person" size={24} color="#A0A4B1"/>
					),
					tabBarLabel: "Profile"
				}}
			/>
		</Tab.Navigator>
	);
}

export default ProfileTab;