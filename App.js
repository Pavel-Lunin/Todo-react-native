import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { AddTodo } from './src/components/AddTodo/AddTodo';
import { Todo } from './src/components/AddTodo/Todo';
import { Navbar } from './src/components/Navbar/Navbar';

export default function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
