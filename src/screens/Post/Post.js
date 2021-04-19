import React from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const Post = () => {
	return (
		<ScrollView>
			<View style={styles.header}>
				<Text style={styles.headerText}>New Post</Text>
			</View>
			<View style={styles.createPostWrap}>
				<Text>
					KEY INFORMATION
				</Text>
				<TextInput 
					style={styles.titleInput}
					placeholder="Title"
				/>
				<TextInput 
					style={styles.descrtiptonInput}
					placeholder="Description"
				/>
			</View>
			<View style={styles.addPostWrap}>
				<Text style={styles.addPostTitle}>PHOTOS</Text>
				<View style={styles.addButtonWrap}>
					<TouchableOpacity>
						<AntDesign name="plussquareo" size={48} color="#a0a4b1" />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.priceContainer}>
				<Text style={styles.priceTitle}>
					PRICE
				</Text>
				<View style={styles.priceContent}>
					
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},

	headerText: {
		paddingTop: 20,
		fontSize: 28,
		fontWeight: "700",
	},

	createPostWrap: {
		paddingHorizontal: 20,
		paddingVertical: 20,
	},

	titleInput: {
		backgroundColor: 'white',
		color: "#A0A4B1",
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginTop: 20,
	},

	descrtiptonInput: {
		backgroundColor: 'white',
		color: "#A0A4B1",
		paddingHorizontal: 10,
		paddingVertical: 50,
		marginTop: 20,
	},

	addPostWrap: {
		paddingHorizontal: 20,
	},

	addButtonWrap: {
		paddingVertical: 10,
		backgroundColor: 'white',
		marginVertical: 10,
		paddingLeft: 10,
	},
	
	priceContainer: {
		marginVertical: 10,
	},

	priceTitle: {
		marginLeft: 20,
	}
})