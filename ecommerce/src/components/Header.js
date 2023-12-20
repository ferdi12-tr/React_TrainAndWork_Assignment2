import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {

    calculateTotal = (cartList) => {
        let total = 0
        if (cartList) {
            cartList.forEach(element => {
                total += Number(element.price)
            });
        }
        return total
    }

    render() {
        const { getCartList, removeCartList } = this.props
        let cartlist = getCartList()
        let total = this.calculateTotal(cartlist)
        return (
            <div className="header-navigation-area header-navigation-area--extra-space d-none d-lg-block">
                <div className="container wide">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-info-wrapper header-info-wrapper--alt-style">
                                <div className="header-logo">
                                    <Link to="/">
                                        <img src="../assets/img/logo.png" className="img-fluid" alt="" />
                                        <img src="../assets/img/logo-alt.png" className="img-fluid" alt="" />
                                    </Link>
                                </div>
                                <div className="header-navigation-wrapper">
                                    <nav>
                                        <ul>
                                            <li className="has">
                                                <Link to="/">HOME</Link>
                                            </li>
                                            <li className="has">
                                                <Link to="/aboutus">ABOUT US</Link>
                                            </li>
                                            <li className="has">
                                                <Link to="/blog">BLOG</Link>
                                            </li>
                                            <li className="has">
                                                <Link to="/contactus">CONTACT US</Link>
                                            </li>
                                            <li className="has">
                                                <Link to="/ordertracking">ORDER TRACKING</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                                <div className="header-icon-area">
                                    <div className="header-icon d-flex align-items-center">
                                        <ul className="header-icon__list">
                                            <li>
                                                <Link to="cart">
                                                    <i className="fa fa-shopping-basket" />
                                                    <span className="item-count">{cartlist.length}</span>
                                                </Link>
                                                <div className="minicart-wrapper">
                                                    <p className="minicart-wrapper__title">CART</p>
                                                    <div className="minicart-wrapper__items ps-scroll">
                                                        {cartlist && cartlist.map((product, index) => {
                                                            return <div key={index} className="minicart-wrapper__items__single">
                                                                <a className="close-icon" onClick={() => removeCartList(product)}><i className="pe-7s-close" /></a>
                                                                <div className="image">
                                                                    <Link to={"products/" + product.slug}>
                                                                        <img src={"/" + product.images[0]} className="img-fluid" alt="" />
                                                                    </Link>
                                                                </div>
                                                                <div className="content">
                                                                    <p className="product-title">
                                                                        <Link to={"products/" + product.slug}>
                                                                            {product.title}
                                                                        </Link>
                                                                    </p>
                                                                    <p className="product-calculation">
                                                                        <span className="count">1</span>
                                                                        x <span className="price">${product.price}</span>
                                                                    </p>
                                                                </div>
                                                            </div>

                                                        })}
                                                    </div>

                                                    <p className="minicart-wrapper__subtotal">SUBTOTAL: <span>${total}</span></p>
                                                    <div className="minicart-wrapper__buttons">
                                                        <Link to="cart" className="theme-button theme-button--minicart-button">VIEW CART</Link>
                                                        <Link to="checkout" className="theme-button theme-button--alt theme-button--minicart-button theme-button--minicart-button--alt mb-0">CHECKOUT</Link>
                                                    </div>
                                                    <p className="minicart-wrapper__featuretext">Free Shipping on All Orders
                                                        Over $100!</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
