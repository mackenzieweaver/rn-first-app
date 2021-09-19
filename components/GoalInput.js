import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({setGoals, goals}) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    return (
        <View style={styles.inputContainer}>


            <TextInput
                style={styles.input}
                onChangeText={setEnteredGoal}
                value={enteredGoal}
            />
            <Button
                onPress={() => {
                    setGoals([...goals, 
                        { 
                            id: Math.random().toString(),
                            value: enteredGoal 
                        }
                    ]);
                }}
                title="Add"
            />

        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({    
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
    input: {
        borderWidth: 1,
        width: '80%',
        padding: 10
    }
});