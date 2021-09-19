import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
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
				renderItem={item => 
					<GoalItem 
						id={item.item.id}
						item={item.item.value} 
						goals={GOALS}
						setGoals={setGoals}
					/>
				}
			/>

		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	}
});