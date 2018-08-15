import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ProductList from "./containers/ProductList";
import { Provider } from "react-redux";
import store from "./store";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import AppWithNavigationState from "./components/AppNavigator";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
