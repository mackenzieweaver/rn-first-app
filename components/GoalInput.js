import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ setGoals, goals, visible, setShowAddGoalModal }) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setEnteredGoal}
                    value={enteredGoal}
                />
                <View style={{flexDirection: "row"}}>
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
                <Button title="Close" onPress={() => setShowAddGoalModal(false)} />
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        width: '80%',
        padding: 10
    }
});