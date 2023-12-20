import React, { Component } from 'react'
import Footer from '../components/Footer'

export default class AboutUs extends Component {
    render() {
        return (
            <>
                <div className="page-content-wrapper">
                    <div className="about-page-top-wrapper section-space">
                        <div className="about-us-brief-wrapper section-space--small">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-4 col-lg-5">
                                        <h2 className="about-us-brief-title">A Better Way To Shop Online For Furniture</h2>
                                    </div>
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="about-us-brief-desc">
                                            <p>Robin is more than just an online furniture store. We hand pick and curate the best in quality and style for you and your home.</p>
                                            <p>Why spend days driving from store to store trying to find that perfect look or unique piece. Find everything you’re looking for and more from the comfort of your own home.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-us-slider-wrapper section-space--small">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="about-us-slider theme-slick-slider" data-slick-setting="{
                            &quot;slidesToShow&quot;: 1,
                            &quot;slidesToScroll&quot;: 1,
                            &quot;arrows&quot;: false,
                            &quot;dots&quot;: true,
                            &quot;autoplay&quot;: false,
                            &quot;autoplaySpeed&quot;: 5000,
                            &quot;speed&quot;: 500,
                            &quot;prevArrow&quot;: {&quot;buttonClass&quot;: &quot;slick-prev&quot;, &quot;iconClass&quot;: &quot;fa fa-angle-left&quot; },
                            &quot;nextArrow&quot;: {&quot;buttonClass&quot;: &quot;slick-next&quot;, &quot;iconClass&quot;: &quot;fa fa-angle-right&quot; }
                        }" data-slick-responsive="[
                            {&quot;breakpoint&quot;:1501, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1, &quot;arrows&quot;: false} },
                            {&quot;breakpoint&quot;:1199, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1, &quot;arrows&quot;: false} },
                            {&quot;breakpoint&quot;:991, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1, &quot;arrows&quot;: false, &quot;slidesToScroll&quot;: 1} },
                            {&quot;breakpoint&quot;:767, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1, &quot;arrows&quot;: false, &quot;slidesToScroll&quot;: 1} },
                            {&quot;breakpoint&quot;:575, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1, &quot;arrows&quot;: false, &quot;slidesToScroll&quot;: 1} },
                            {&quot;breakpoint&quot;:479, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1, &quot;arrows&quot;: false, &quot;slidesToScroll&quot;: 1} }
                        ]">
                                            <div className="single-image">
                                                <img src="assets/img/about/about_us_slide_01.jpg" className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-us-process-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-process">
                                            <h3 className="title"> <span>01.</span> SERVICE</h3>
                                            <p className="description">Our Customer Care Team can answer any questions you may have, as well as provide personalized assistance with: scheduling, availability, bulk orders, custom orders and delivery options.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-process">
                                            <h3 className="title"> <span>02.</span> SELECTION</h3>
                                            <p className="description">Shop our extensive selection of quality furniture and home décor for every room, plus a vast assortment of mattresses, appliances and electronics at prices that can’t be beat!</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-process">
                                            <h3 className="title"> <span>03.</span> SATISFACTION</h3>
                                            <p className="description">Shop with confidence! Our Satisfaction Guarantee and Price Match Promise ensure you are always happy with your purchase.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-process">
                                            <h3 className="title"> <span>04.</span> DELIVERY</h3>
                                            <p className="description">Our One Of A Kind Delivery network is fast, reliable and FREE on thousands of items. Delivery is free on all purchases over $799, plus many home decor items qualify for FREE SHIPPING.</p>
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
