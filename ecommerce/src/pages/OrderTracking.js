import React, { Component } from 'react'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

export default class OrderTracking extends Component {
    render() {
        return (
            <>
                <div className="breadcrumb-area section-space--breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="breadcrumb-wrapper">
                                    <h2 className="page-title">Order Tracking</h2>
                                    <ul className="breadcrumb-list">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">Order Tracking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><div className="page-content-wrapper">
                    <div className="order-tracking-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="order-tracking-wrapper">
                                        <div className="order-track-form">
                                            <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <label htmlFor="orderId">Order ID</label>
                                                        <input type="text" id="orderId" placeholder="Found in your order confirmation email" />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <label htmlFor="orderEmail">Billing email</label>
                                                        <input type="text" id="orderEmail" placeholder="Email you used during checkout" />
                                                    </div>
                                                    <div className="col-lg-12 text-center">
                                                        <button className="theme-button theme-button--order-track">TRACK</button>
                                                    </div>
                                                </div>
                                            </form>
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
