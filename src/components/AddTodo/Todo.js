import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Todo = ({ todo }) => {
  return (
    <TouchableOpacity onPress={() => console.log('Pressed', todo.id)}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
});