import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AddTo from "./components/addTo";

export default function App() {
  const [count, setCount] = useState(0);

  handleIncrementCount = () => {
    setCount(count + 1);
  };

  handleSetCount = (num) => {
    setCount(count + num);
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterWrapper}>
        <Text style={styles.text}>{count}</Text>
        <TouchableOpacity onPress={handleIncrementCount} style={styles.touch}>
          <Text style={{ fontSize: 100 }}>+</Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.containerSet}
      >
        <AddTo stateChanger={handleSetCount} num={5} />
        <AddTo stateChanger={handleSetCount} num={10} />
        <AddTo stateChanger={handleSetCount} num={15} />
        <AddTo stateChanger={handleSetCount} num={25} />
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "E8EAED",
    justifyContent: "center",
  },
  counterWrapper: {
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontSize: 100,
    fontWeight: "bold",
    marginBottom: 150,
  },
  touch: {
    backgroundColor: "lightblue",
    paddingHorizontal: 100,
    borderRadius: 100,
  },
  containerSet: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
