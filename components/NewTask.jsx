import react from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const NewTask = ({ items }) => {
  return (<View style={styles.wrapper}>
    <TextInput
      style={styles.input}
    // onChangeText={onChangeText}
    // value="ASdsa"
    />
    <Pressable
      // onPress={() => {
      //   setTimesPressed(current => current + 1);
      // }}
      style={({ pressed }) => [
        styles.wrapperCustom,
        {
          backgroundColor: pressed ? '#b6ff92' : '#53ff00',
        },
      ]}>
      {({ pressed }) => (
        <Text style={styles.text}>+</Text>
      )}
    </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontWeight: "semibold",
    fontSize: 30,
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingRow: 10,
  },
  wrapperCustom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 6,
    height: 70,
    width: 70,
    // position: "absolute",
    // bottom: 20,
    // right: 20,
  },
  input: {
    height: 70,
    width: "80%",
    borderRadius: 20,
    paddingHorizontal: 30,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "normal",
  }
})

export default NewTask;