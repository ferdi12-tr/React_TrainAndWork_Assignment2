import MainPage from "./pages/MainPage";
import Header from "./components/Header"
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout";
import { Route, Routes } from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    products: [],
    cartList: [],
    blogPosts: []
  };

  getProducts = () => {
    let url = "http://localhost:3000/products";

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  getBlogPosts = () => {
    let url = "http://localhost:3000/blogPosts";

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ blogPosts: data }));
  };

  componentDidMount() {
    this.getProducts();
    this.getBlogPosts();
  }

  getProductBySlug = (slug) => {
    return this.state.products.find((product) => product.slug === slug);
  };

  getBlogBySlug = (slug) => {
    return this.state.blogPosts.find((post) => post.slug === slug);
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
          <Route path="/products/:slug" element={<ProductDetail getProductBySlug={this.getProductBySlug} addToCartList={this.addToCartList} />} />
          <Route path="/cart" element={<Cart getCartList={this.getCartList} removeCartList={this.removeCartList} />} />
          <Route path="/blog" element={<Blog blogPosts={this.state.blogPosts} />} />
          <Route path="/blog/:slug" element={<BlogDetail getBlogBySlug={this.getBlogBySlug} blogPosts={this.state.blogPosts} />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="checkout" element={<Checkout getCartList={this.getCartList} />} />
        </Routes></>

    );
  }
}


