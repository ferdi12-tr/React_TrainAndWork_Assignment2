import MainPage from "./pages/MainPage";
import Header from "./components/Header"
import ProductDetail from "./pages/ProductDetail";
import { Route, Routes } from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    products: [],
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

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage products={this.state.products} />} />
          <Route path="/products/:slug" element={<ProductDetail getProductBySlug={this.getProductBySlug} />} />
        </Routes></>

    );
  }
}


