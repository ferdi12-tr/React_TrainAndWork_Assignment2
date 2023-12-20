import React, { Component } from 'react'
import ProductCard from './ProductCard'


export default class Tab extends Component {

    state = {
        tag: 1,
    }

    filterWithTag = (products) => {
        return products.filter((product) => product.tag === this.state.tag)
    }

    render() {
        const { products, addToCartList } = this.props;
        let filteredProducts = this.filterWithTag(products)
        return (
            <>
                <div className="product-double-row-tab-area section-space">
                    <div className="container wide">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product-double-row-tab-wrapper">
                                    <div className="tab-product-navigation">
                                        <ul className="nav nav-tabs justify-content-center" role="tablist">
                                            <li className="nav-item">
                                                <button onClick={() => this.setState({ tag: 1 })} className="nav-link active" type="button" data-bs-toggle="tab" data-bs-target="#product-series-1" role="tab" aria-controls="product-series-1" aria-selected="true">New Arrivals</button>
                                            </li>
                                            <li className="nav-item">
                                                <button onClick={() => this.setState({ tag: 2 })} className="nav-link" type="button" data-bs-toggle="tab" data-bs-target="#product-series-2" role="tab" aria-controls="product-series-2" aria-selected="false">Featured</button>
                                            </li>
                                            <li className="nav-item">
                                                <button onClick={() => this.setState({ tag: 3 })} className="nav-link" type="button" data-bs-toggle="tab" data-bs-target="#product-series-3" role="tab" aria-controls="product-series-3" aria-selected="false">On Sale</button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="product-series-1" role="tabpanel"
                                            aria-labelledby="product-tab-1">
                                            <div className="product-row-wrapper">
                                                <div className="row">
                                                    {filteredProducts.map((product, index) => {
                                                        return <ProductCard addToCartList={addToCartList} key={index} product={product} />;
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-area">
                    <div className="footer-newsletter-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 text-center">
                                    <div className="footer-newsletter-widget">
                                        <h2 className="footer-newsletter-widget__title">Sign Up &amp; Get 20% Discount Now</h2>
                                        <p className="footer-newsletter-widget__text">Your Satisfaction defines our Success</p>
                                        <div className="footer-newsletter-widget__form-wrapper">
                                            <form id="mc-form" className="mc-form">
                                                <input type="email" placeholder="Your Email" required />
                                                <button type="submit" className="theme-button theme-button--alt theme-button--subscribe">SUBSCRIBE
                                                    US</button>
                                            </form>
                                        </div>
                                        <div className="mailchimp-alerts mailchimp-alerts--dark">
                                            <div className="mailchimp-submitting" />
                                            <div className="mailchimp-success" />
                                            <div className="mailchimp-error" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright-area footer-copyright-area--two">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="copyright-text copyright-text--two text-center text-md-start">
                                        © FKoca. All Right Reserved 2024
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer-widget text-center text-md-end mb-0">
                                        <ul className="footer-widget__social-links footer-widget__social-links--dark">
                                            <li><a href="www.facebook.com" title="Facebook"><i className="fa fa-facebook" /></a></li>
                                            <li><a href="www.twitter.com" title="Twitter"><i className="fa fa-twitter" /></a></li>
                                            <li><a href="www.linkedin.com" title="LinkedIn"><i className="fa fa-linkedin" /></a></li>
                                            <li><a href="www.instagram.com" title="Instagram"><i className="fa fa-instagram" /></a></li>
                                            <li><a href="www.youtube.com" title="Youtube"><i className="fa fa-youtube-play" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
