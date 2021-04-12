import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export const  Browse = ({ navigation }) => {
	return (
		<View style={styles.container} >
			<View style={styles.searchContainer}>
				<TextInput 
					style={styles.input}
					placeholder="Search"
					placeholderTextColor="#A0A4B1"
				/>
				<AntDesign name="filter" size={38} color="#A0A4B1" />
			</View>
			<View style={styles.content}>
				<Text>
					Serch content
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,

	},
	searchContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 20,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		paddingBottom: 5,
		borderBottomColor: '#A0A4B1',
		marginTop: 15,
	},
	input: {
		width: '85%',
		borderColor: 'black',
		borderWidth: 1,
		borderStyle: 'solid',
		paddingHorizontal:4,
		borderRadius: 8,
		borderColor: '#A0A4B1',
		paddingVertical: 5,
	},

	content: {
		paddingTop: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	}
})