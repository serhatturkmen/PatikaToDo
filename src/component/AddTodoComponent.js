import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../styles";

const AddTodoComponent = (props) => {
  const [input, setinput] = useState("");
  const newTodoFunc = () => {
    const arrayTodo = [...props.todos];
    arrayTodo.push({ text: input, complete: false });
    props.settodos(arrayTodo);
    setinput("");
  };
  return (
    <View style={styles.box}>
      <TextInput
        value={input}
        onChangeText={(text) => setinput(text)}
        style={styles.inputStyle}
        placeholder={"Yapılacak..."}
      />
      {input.length ? (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            newTodoFunc();
          }}
        >
          <Text style={styles.addButtonText}>Kaydet</Text>
        </TouchableOpacity>
      ) : (
        <View style={{ ...styles.addButton, backgroundColor: "gray" }}>
          <Text style={styles.addButtonText}>Kaydet</Text>
        </View>
      )}
    </View>
  );
};

export default AddTodoComponent;
