import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ id, item, goals, setGoals }) => (
	<TouchableOpacity onPress={() => deleteItem(id, goals, setGoals)}>
		<View key={Math.random().toString()} style={styles.listItem}>
			<Text>{item}</Text>
		</View>
	</TouchableOpacity>
);

function deleteItem(id, goals, setGoals){
	setGoals(goals.filter(goal => goal.id !== id));
}

export default GoalItem;

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1
	}
});