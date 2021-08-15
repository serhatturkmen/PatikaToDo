import { StyleSheet, Dimensions } from "react-native";

import { getStatusBarHeight } from "react-native-status-bar-height";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height - getStatusBarHeight();

export const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    marginTop: getStatusBarHeight(),
    width: width,
    height: height,
    backgroundColor: "#102027",
  },
  header: {
    width: width - 20,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
  },
  headerText: {
    fontWeight: "bold",
    color: "#FFA500",
    fontSize: 24,
  },
  viewToDo: {
    width: width,
    height: height - 180 - getStatusBarHeight(),
  },
  todoText: {
    margin: 5,
    padding: 10,
    width: width - 10,
    borderRadius: 10,
  },
  box: {
    backgroundColor: "#37474F",
    width: width - 20,
    height: 100,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  inputStyle: {
    borderBottomColor: "#78909C",
    borderBottomWidth: 1,
    width: width - 50,
    fontSize: 18,
    marginHorizontal: 30,
    marginBottom: 10,
    color: "#FFFFFF",
  },
  addButton: {
    backgroundColor: "#FFA500",
    alignSelf: "center",
    width: width - 70,
    borderRadius: 10,
    alignItems: "center",
    padding: 5,
  },
  addButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});
