import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ProductCard extends Component {
    render() {
        const { product, addToCartList } = this.props
        return (
            <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                <div className="single-grid-product">
                    <div className="single-grid-product__image">
                        <div className="product-badge-wrapper">
                            <span className="onsale">-17%</span>
                            <span className="hot">Hot</span>
                        </div>
                        <Link to={"products\\" + product.slug}>
                            <div className="image-wrap">
                                <img src={product.images[0]} className="img-fluid" alt="" />
                                {product.images[1] && <img src={product.images[1]} className="img-fluid" alt="" />}
                            </div>
                        </Link>
                        <div className="product-hover-icon-wrapper">
                            <span className="single-icon single-icon--quick-view"><a className="cd-trigger" href="#qv-1" data-tippy="Quick View" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-search" /></a></span>
                            <span className="single-icon single-icon--add-to-cart"><a onClick={() => addToCartList(product)} data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-shopping-basket" /> <span>ADD TO
                                CART</span></a></span>
                            <span className="single-icon single-icon--compare"><a href="#" data-tippy="Compare" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="fa fa-exchange" /></a></span>
                        </div>
                    </div>
                    <div className="single-grid-product__content">
                        <h3 className="title">
                            <Link to={"products\\" + product.slug}>
                                {product.title}
                            </Link>
                        </h3>
                        <div className="price">
                            {product.discount && <span className="main-price discounted">${product.discount}</span>}
                            <span className="discounted-price">${product.price}</span>
                        </div>
                        <div className="rating">
                            <i className="fa fa-star active" />
                            <i className="fa fa-star active" />
                            <i className="fa fa-star active" />
                            <i className="fa fa-star active" />
                            <i className="fa fa-star" />
                        </div>
                        <div className="color">
                            <ul>
                                <li><a className="active" href="#" data-tippy="Black" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker black" /></a></li>
                                <li><a href="#" data-tippy="Blue" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker blue" /></a></li>
                                <li><a href="#" data-tippy="Brown" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker brown" /></a></li>
                            </ul>
                        </div>
                        <a href="#" className="favorite-icon" data-tippy="Add to Wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" data-tippy-placement="left">
                            <i className="fa fa-heart-o" />
                            <i className="fa fa-heart" />
                        </a>
                    </div>
                </div>
            </div >

        )
    }
}
