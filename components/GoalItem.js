import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = ({item}) => (
    <View key={Math.random().toString()} style={styles.listItem}>
        <Text>{item}</Text>
    </View>
);

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