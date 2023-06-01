import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AddTo = ({ stateChanger, num }) => {
  return (
    <TouchableOpacity onPress={() => stateChanger(num)} style={styles.sub}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{num}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sub: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "lightgrey",
    borderRadius: 60,
    minWidth: 60,
  },
});

export default AddTo;
