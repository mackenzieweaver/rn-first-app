import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [GOALS, setGoals] = useState([]);
	return (
		<View style={styles.screen}>

			<GoalInput setGoals={setGoals} goals={GOALS} />

			<FlatList
				keyExtractor={item => item.id}
				data={GOALS}
				renderItem={item => <GoalItem item={item.item.value} />}
			/>

		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	}
});