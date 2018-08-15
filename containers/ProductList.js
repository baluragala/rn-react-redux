import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { getProducts } from "../actionCreators/product";
import { connect } from "react-redux";

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <ScrollView>
        {this.props.products.map(p => (
          <Text key={p.id}>{p.title}</Text>
        ))}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.productState.isLoading,
    products: state.productState.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(getProducts())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
