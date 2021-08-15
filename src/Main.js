import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";

import { styles } from "./styles";
import AddTodoComponent from "./component/AddTodoComponent";
import HeaderComponent from "./component/HeaderComponent";
import TodoComponent from "./component/TodoComponent";

const Main = () => {
  const [todos, settodos] = useState([]);

  return (
    <SafeAreaView style={styles.main}>
      {/* Header Box */}
      <HeaderComponent
        activeTodoLen={
          todos.filter(function (item) {
            return item.complete == false;
          }).length
        }
      />

      {/* View Todos */}
      <View style={styles.viewToDo}>
        <FlatList
          data={todos}
          extraData={todos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TodoComponent
                todo={item}
                index={index}
                todos={todos}
                settodos={settodos}
              />
            );
          }}
        />
      </View>

      {/* Add Box */}
      <AddTodoComponent settodos={settodos} todos={todos} />
    </SafeAreaView>
  );
};

export default Main;
