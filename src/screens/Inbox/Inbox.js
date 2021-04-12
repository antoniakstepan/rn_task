import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Inbox = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.text}>Inbox</Text>
			</View>
			<View style={styles.content}>
				<Image 
					style={styles.image}
					source={require('../../../assets/inbox.png')}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		height: 70,
		backgroundColor: 'white',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	text: {
		fontSize: 32,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},	
	image: {
		width: 200,
		height: 200,
	}
})