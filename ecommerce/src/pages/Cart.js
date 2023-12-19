import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

export default class Cart extends Component {
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
            <>
                <div className="breadcrumb-area section-space--breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="breadcrumb-wrapper">
                                    <h2 className="page-title">Shopping Cart</h2>
                                    <ul className="breadcrumb-list">
                                        <li><Link to="/" href="index.html">Home</Link></li>
                                        <li className="active">Shopping Cart</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-content-wrapper">
                    <div className="shopping-cart-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cart-table-container">
                                        <table className="cart-table">
                                            <thead>
                                                <tr>
                                                    <th className="product-name" colSpan={2}>Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-subtotal">Total</th>
                                                    <th className="product-remove">&nbsp;</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartlist && cartlist.map((product, index) => {
                                                    return <tr key={index}>
                                                        <td className="product-thumbnail">
                                                            <Link to={"/products/" + product.slug}>
                                                                <img src={product.images[0]} className="img-fluid" alt="" />
                                                            </Link>
                                                        </td>
                                                        <td className="product-name">
                                                            <Link to={"/products/" + product.slug}>{product.title}</Link>
                                                            <span className="product-variation">Color: Black</span>
                                                        </td>
                                                        <td className="product-price"><span className="price">${product.price}</span></td>
                                                        <td className="product-quantity">
                                                            <div className="pro-qty d-inline-block mx-0">
                                                                <input type="text" defaultValue={1} />
                                                            </div>
                                                        </td>
                                                        <td className="total-price"><span className="price">${product.price}</span></td>
                                                        <td className="product-remove">
                                                            <a onClick={() => removeCartList(product)}>
                                                                <i className="pe-7s-close" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="cart-coupon-area">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="coupon-form">
                                                    <form action="#">
                                                        <div className="row row-5">
                                                            <div className="col-md-7 col-sm-7">
                                                                <input type="text" placeholder="Enter your coupon code" />
                                                            </div>
                                                            <div className="col-md-5 col-sm-5">
                                                                <button className="theme-button theme-button--silver">APPLY COUPON</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-start text-lg-end">
                                                <button className="theme-button">UPDATE CART</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 offset-lg-6">
                                    <div className="cart-calculation-area">
                                        <h2 className="cart-calculation-area__title">Cart totals</h2>
                                        <table className="cart-calculation-table">
                                            <tbody><tr>
                                                <th>SUBTOTAL</th>
                                                <td className="subtotal">${total}</td>
                                            </tr>
                                                <tr>
                                                    <th>TOTAL</th>
                                                    <td className="total">${total}</td>
                                                </tr>
                                            </tbody></table>
                                        <div className="cart-calculation-button">
                                            <button className="theme-button theme-button--alt theme-button--checkout">PROCEED TO CHECKOUT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
