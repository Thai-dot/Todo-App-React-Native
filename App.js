import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Pressable
} from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isVisibleModal,setIsVisibleModal] = useState(false);

  function startAddGoalHandler(){
    setIsVisibleModal(true);

  }

  function endAddGoalHandler(){
    setIsVisibleModal(false);

  }



  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentItems) => [
      ...currentItems,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentItems) => {
      return currentItems.filter((goal) => goal.id !== id);
    })
  };

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button color="#5e0acc" title="Add New Goal" onPress={startAddGoalHandler} />

      <GoalInput onAddGoal = {addGoalHandler} visible={isVisibleModal} onCancel={endAddGoalHandler} />
  
     
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem id={itemData.item.id} onDeleteItem= {deleteGoalHandler} text={itemData.item.text} />
            );
          }}
          keyExtractor={
            (item,index)=>{
              return item.id;
            }
          }
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  
  goalsContainer: {
    flex: 5,
  },
  
});
