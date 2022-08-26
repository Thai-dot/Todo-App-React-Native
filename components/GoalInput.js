import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

const GoalInput = ({ onAddGoal,visible,onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.goalImage} source={require('../assets/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style = {styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#b180f0" />

          </View>
          <View style = {styles.button}>
            <Button title="Close" onPress={onCancel} color="#f31282"  />

          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,

    backgroundColor: "#311b6b"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "70%",
    marginRight: 8,
    padding: 8,
    borderRadius:6,
    color: "white",
  },
  buttonContainer:{
    flexDirection: "row",
    marginTop: 15
  },
  button:{
    width: "30%",
    marginHorizontal: 8,
  },
  goalImage:{
    width: 100,
    height: 100,
    margin: 20,
  }
});

export default GoalInput;
