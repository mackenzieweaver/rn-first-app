import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, FlatList } from 'react-native';

export default function App() {
	const [enteredGoal, setEnteredGoal] = React.useState('');
	const [GOALS, setGoals] = React.useState([]);

	const RenderItem = ({key, value}) => (
		<View key={key} style={styles.listItem}>
			<Text>{value}</Text>
		</View>
	);

	return (
		<View style={styles.screen}>

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					onChangeText={setEnteredGoal}
					value={enteredGoal}
				/>
				<Button
					onPress={() => {
						setGoals([...GOALS, {id: Math.random().toString(), value: enteredGoal}]);
					}}
					title="Add"
				/>
			</View>

			<FlatList
				keyExtractor={(item, index) => item.id}
				data={GOALS}
				renderItem={item => RenderItem(item.item)}
			/>

		</View>
	);
}


const styles = StyleSheet.create({
	screen: {
		padding: 50
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	input: {
		borderWidth: 1,
		width: '80%',
		padding: 10
	},
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1
	}
});