import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ListItems from './components/ListItems';
import Header from './components/Header';
import NewTask from './components/NewTask';
import { useState } from 'react';

export default function App() {
  const [taskId, setTaskId] = useState(0)
  const [tasks, setTasks] = useState([])

  const newTask = (task) => {
    setTasks([...tasks, {
      taskId: taskId,
      taskDisc: task,
      isDone: false,
    }])
    setTaskId(taskId + 1)
  }

  const toggleIsDone = (id) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].taskId === id) {
        tasks[i].isDone = !tasks[i].isDone
      }
    }
  }

  const getRemainingTasksCount = () => {
    let count = 0
    tasks.map(task => {
      if (task.isDone === false) {
        count++
      }
    })
    return count
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <StatusBar style="" />
        <ScrollView style={styles.scrollView}>
          {tasks.map((task, index) => {
            return <ListItems key={index} title={task.taskDisc} id={task.taskId} toggleIsDone={toggleIsDone} />
          })}
        </ScrollView>
        <NewTask style={styles.newTask} newTask={newTask} />
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
