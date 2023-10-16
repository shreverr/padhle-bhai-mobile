import react, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";


const ListItems = ({ title }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View
      style={styles.card}
    >
      <BouncyCheckbox
        size={25}
        fillColor="blue"
        unfillColor="#FFFFFF"
        textComponent={
          <Text style={[
            {
              textDecorationLine: toggleCheckBox ? "line-through" : "none",
            },
            styles.text,
          ]}>
            {title}
          </Text>
        }
        iconStyle={{ borderColor: "blue" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked) => { setToggleCheckBox(isChecked) }}
        isChecked={toggleCheckBox}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontWeight: "normal",
    fontSize: 20,
    paddingStart: 20,
    width: "100%",
    height: "100%",
    padding: 10,
  },
  card: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 70,
    borderRadius: 20,
    paddingHorizontal: 30,
    width: "100%",
    backgroundColor: "#3399ff",
    marginBottom: 10,
  },
})

export default ListItems;