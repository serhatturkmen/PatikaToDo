import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";

const TodoComponent = (props) => {
  const docompleteTodo = (index) => {
    const todoarray = [...props.todos];
    todoarray[index].complete = !todoarray[index].complete;
    props.settodos(todoarray);
  };

  const deleteTodo = (item) => {
    const index = props.todos.indexOf(item);
    const reserve = [...props.todos];
    Alert.alert(
      "Siliyorum Bak?",
      "Seçtiğinizi silmek istediğinizden emin misiniz?",
      [
        {
          text: "Iptal",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            reserve.splice(index, 1);
            props.settodos(reserve);
          },
        },
      ]
    );
  };

  return (
    <TouchableOpacity
      onPress={() => {
        docompleteTodo(props.index);
      }}
      onLongPress={() => {
        deleteTodo(props.todo);
      }}
      style={{
        backgroundColor: props.todo.complete ? "#37474F" : "#7da453",
        ...styles.todoText,
      }}
    >
      <Text
        style={{
          color: props.todo.complete ? "#808080" : "#FFFFFF",
          textDecorationLine: props.todo.complete ? "line-through" : "none",
          fontSize: 18,
        }}
      >
        {props.todo.text}
      </Text>
    </TouchableOpacity>
  );
};

export default TodoComponent;
