import MainPage from "./pages/MainPage";
import Header from "./components/Header"
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    products: [],
    cartList: [],
  };

  getProducts = () => {
    let url = "http://localhost:3000/products";

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProducts();
  }

  getProductBySlug = (slug) => {
    return this.state.products.find((product) => product.slug === slug);
  };

  addToCartList = (product) => {
    this.setState({ cartList: [...this.state.cartList, product] })
    console.log(this.state.cartList)
  }

  getCartList = () => {
    return this.state.cartList
  }

  removeCartList = (product) => {
    let updatedList = this.state.cartList.filter(element => element.id !== product.id)
    this.setState({ cartList: updatedList })
  }

  render() {
    return (
      <>
        <Header getCartList={this.getCartList} removeCartList={this.removeCartList} />
        <Routes>
          <Route path="/" element={<MainPage products={this.state.products} addToCartList={this.addToCartList} />} />
          <Route path="/products/:slug" element={<ProductDetail getProductBySlug={this.getProductBySlug} />} />
          <Route path="/cart" element={<Cart getCartList={this.getCartList} removeCartList={this.removeCartList} />} />
        </Routes></>

    );
  }
}


