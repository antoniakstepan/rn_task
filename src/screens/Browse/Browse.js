import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, FlatList, StatusBar, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getProducts } from '../../helpers';
import { useStore } from '../../store/rootStore';
import { observer } from 'mobx-react'



export const  Browse = ({ navigation }) => {
	const [content, setContent] = useState([]);
	const [value, setValue] = useState('');

	useEffect(() => {
		getProducts().then(result => {
			return setContent(result)
		})
	}, [value, setValue]);

	const onSearch = () => {
		setContent(prevContent => prevContent.filter(item => item.title.split(' ')[0].toUpperCase().includes(value.toUpperCase())))
	};

	const Item = ({ title, body}) => {
		return (
		<View style={styles.listItem}>
			<Text style={styles.listTitle}>{title.split(' ')[0]}</Text>
			<Text>{body}</Text>
		</View>
	)};
	return (
		<View style={styles.container} >
			<View style={styles.searchContainer}>
				<TextInput 
					style={styles.input}
					placeholder="Search"
					placeholderTextColor="#A0A4B1"
					value={value}
					onChangeText={text => setValue(text)}
				/>
				<TouchableOpacity onPress={() => onSearch()}>
					<AntDesign name="filter" size={38} color="#A0A4B1" />	
				</TouchableOpacity>
			</View>
			<View style={styles.content}>
			{content.length === 0 ?
			(	<Text style={styles.empty}>
					Serch content
				</Text>)
				:
				(	<FlatList 
						data={content}
						renderItem={
							({ item }) => (
								<Item 
									title={item.title}
									body={item.body}
								/>
							)
						}
						keyExtractor={(item)=> item.id.toString()}
						bounces={false}
						numColumns={2}
					/>
			)
			}
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
		// paddingTop: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},

	flatContainer: {
		
	},
	areaWiew: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
	},

	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		width:140,
		alignItems: 'center',
		borderWidth: 2,
		borderColor: '#A0A4B1',
		borderRadius: 10,
	},

	listTitle: {
		fontSize: 24,
		// paddingBottom: 10,
		borderBottomWidth: 1,
	}
})