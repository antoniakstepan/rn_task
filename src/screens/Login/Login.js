import React from 'react';
import { View, TextInput, StyleSheet, Text, Button , TouchableOpacity} from 'react-native'

export const Login = ({ navigation }) => {
	return (
		<View style={styles.wrap}>
			<View style={styles.container}>
			<TextInput style={styles.input} placeholder="Pleace enter email"/>
			<TextInput 
				style={styles.input}
				placeholder="Pleace enter passward" 
				secureTextEntry
				onFocus={()=>{styles.focus}}
			/>
			<View style={styles.textContent}>
				<Text style={styles.text}>
					Forgot password?
				</Text>
		
		</View>
		</View>
			<View style={styles.footer}>
				<View style={styles.footerInfo}>
				<Text>Don’t have an account?</Text>
				<TouchableOpacity 
					onPress={() => navigation.navigate('Register')}
				>
					<Text style={styles.footerText}>REGISTER</Text>
				</TouchableOpacity>
				</View>
				<Button 
					title="Login"
					color="#349A89"
					onPress={() => navigation.navigate('ProfileTab')}
					style={styles.button}
				/>
			</View>
		</View>
	
	
	);
}

const styles = StyleSheet.create({
	wrap: {
		justifyContent: 'space-between',
		flex: 1
	},
	container: {
		paddingTop: 50,
		paddingHorizontal: 40,
	},

	input: {
		width: '100%',
		borderWidth: 2,
		borderColor: '#D6D6D6',
		borderRadius: 5,
		marginBottom: 20,
		paddingVertical: 5,
	},

	focus: {
		borderWidth: 2,
		borderColor: '#349A89',
	},

	textContent: {
		flexDirection: 'column',
		alignItems: 'flex-end',
	},

	text: {
		color: '#349A89',
	},

	footer: {
		paddingHorizontal: 5,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 5,
	},
	footerInfo: {
		flexDirection: 'row'
	},

	footerText: {
		color: '#349A89',
	},

	button: {
		borderRadius: 10,
	}
})