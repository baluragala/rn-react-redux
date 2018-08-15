import React, { Component } from "react";
import { View, Text } from "react-native";

class ProductDetail extends Component {
  // static navigationOptions = {
  //   headerTitle: "detail"
  // };

  static navigationOptions = function({ navigation }) {
    return {
      headerTitle: `Detail for : ${navigation.state.params.productId}`
    };
  };
  render() {
    return (
      <View>
        <Text>
          Product Detail {this.props.navigation.state.params.productId}
        </Text>
      </View>
    );
  }
}

export default ProductDetail;
