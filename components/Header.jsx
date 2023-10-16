import react from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ items }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Padhle Bhai</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    height: 70,
    padding: 10,
    paddingTop: 20,
  },
})

export default Header;