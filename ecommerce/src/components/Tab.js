import React, { Component } from 'react'
import ProductCard from './ProductCard'


export default class Tab extends Component {
    render() {
        const { products, addToCartList } = this.props;
        return (
            <div className="product-double-row-tab-area section-space">
                <div className="container wide">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-double-row-tab-wrapper">
                                <div className="tab-product-navigation">
                                    <ul className="nav nav-tabs justify-content-center" role="tablist">
                                        <li className="nav-item">
                                            <button onClick={() => console.log("tab1")} className="nav-link active" type="button" data-bs-toggle="tab" data-bs-target="#product-series-1" role="tab" aria-controls="product-series-1" aria-selected="true">New Arrivals</button>
                                        </li>
                                        <li className="nav-item">
                                            <button onClick={() => console.log("tab2")} className="nav-link" type="button" data-bs-toggle="tab" data-bs-target="#product-series-2" role="tab" aria-controls="product-series-2" aria-selected="false">Featured</button>
                                        </li>
                                        <li className="nav-item">
                                            <button onClick={() => console.log("tab3")} className="nav-link" type="button" data-bs-toggle="tab" data-bs-target="#product-series-3" role="tab" aria-controls="product-series-3" aria-selected="false">On Sale</button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="product-series-1" role="tabpanel"
                                        aria-labelledby="product-tab-1">
                                        <div className="product-row-wrapper">
                                            <div className="row">
                                                {products.map((product, index) => {
                                                    return <ProductCard addToCartList={addToCartList} key={index} product={product} />
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

        )
    }
}
