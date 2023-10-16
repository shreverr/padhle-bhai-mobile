import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ListItems from './components/ListItems';
import Header from './components/Header';
import NewTask from './components/NewTask';
import { useState } from 'react';

export default function App() {
  // let tasks = [ "I like cats 😻 😻", "lorem", "ipsum"  ]
  const [tasks, setTasks] = useState(["I like cats 😻 😻"])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <StatusBar style="" />
        <ScrollView style={styles.scrollView}>
          {tasks.map((task, index) => {
            return <ListItems key={index} title={task} />
          })}
        </ScrollView>
        <NewTask style={styles.newTask} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
  },
  text: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
  },
  scrollView: {
    width: "100%",
  }
});
