import React from "react";
import ProductList from "../containers/ProductList";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import ProductDetail from "../components/ProductDetail";
import { FontAwesome } from "@expo/vector-icons";

import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { connect } from "react-redux";

const stack1 = createStackNavigator(
  {
    Main: ProductList,
    Detail: ProductDetail
  },
  {
    navigationOptions: {
      headerTitle: "Product Manager",
      headerStyle: {
        backgroundColor: "grey"
      },
      headerTintColor: "yellow"
    }
  }
);

export const AppNavigator = createBottomTabNavigator(
  {
    List1: stack1,
    List2: stack1,
    List3: stack1,
    List4: stack1
  },
  {
    navigationOptions: {
      tabBarIcon: <FontAwesome name="list-ul" size={25} color="red" />
    }
  }
);

export const navigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navState
);
const addListener = createReduxBoundAddListener("root");

class App extends React.Component {
  render() {
    return (
      <AppNavigator
        navigation={{
          dispatch: this.props.dispatch,
          state: this.props.navState,
          addListener
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  navState: state.navState
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
