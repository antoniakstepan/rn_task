import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export const  Profile = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.text}>Profile</Text>
			</View>
			<View style={styles.imageContainer}>
				<ImageBackground 
					style={styles.image}
					source={require('../../../assets/profile_logo.png')}
				>
				</ImageBackground>
				<Text style={styles.containerText}>Apico Marketplace App Ver. 1.1.1</Text>
			</View>
			<View style={styles.content}>
				<View style={styles.wrap}>
					<Text style={styles.wrapText}>
						Email
					</Text>
					<Text style={styles.wrapErrow}>
						{'>'}
					</Text>
				</View>
				<View style={styles.wrap}>
					<Text style={styles.wrapText}>
						Password
					</Text>
					<Text style={styles.wrapErrow}>
						{'>'}
					</Text>
				</View>
				<View style={styles.wrap}>
					<Text style={styles.wrapText}>
						Notifications
					</Text>
					<Text style={styles.wrapErrow}>
						{'>'}
					</Text>
				</View>
				<View style={styles.wrap}>
					<Text style={styles.wrapText}>
						Privacy Policy
					</Text>
					<Text style={styles.wrapErrow}>
						{'>'}
					</Text>
				</View>
				<View style={styles.wrap}>
					<Text style={styles.wrapText}>
						Terms {'&'} Conditions
					</Text>
					<Text style={styles.wrapErrow}>
						{'>'}
					</Text>
				</View>
			</View>
			<TouchableOpacity onPress={() => navigation.navigate('Login')}>
				<View style={styles.logOut}>
					<ImageBackground
						style={styles.logOutPhoto}
						source={require('../../../assets/log-out.png')}
					>
					</ImageBackground>
					<Text style={styles.logOutText}>
						LOG OUT
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},

	text: {
		fontSize: 32
	},

	header: {
		height: 70,
		backgroundColor: 'white',
		justifyContent: 'flex-end',
		alignItems: 'center',
		borderBottomColor: '#D6D6D6',
		borderBottomWidth: 1,
	},

	imageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 40,
		borderBottomColor: '#D6D6D6',
		borderBottomWidth: 1,
	},

	containerText: {
		color: '#A0A4B1',
	},

	image: {
		width: 250,
		height: 100,
		resizeMode: 'cover',
	},

	content: {
		backgroundColor: 'white',
	},

	wrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 40,
		height: 50,
		borderBottomColor: '#D6D6D6',
		borderBottomWidth: 1,
	},

	wrapText: {
		fontSize: 16,
	},

	wrapErrow: {
		fontSize: 32,
		color: '#D6D6D6',	
	},

	logOut: {
		marginTop: 50,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		height: 50,
	},

	logOutPhoto: {
		height: 20,
		width: 20,
		marginRight: 5,
	},

	logOutText: {
		color: '#349A89'
	}
})