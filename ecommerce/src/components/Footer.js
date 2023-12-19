import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-area">
                <div className="footer-navigation-area">
                    <div className="container wide">
                        <div className="row">
                            <div className="col-xl-4 col-custom-xl-6 col-lg-6">
                                <div className="row">
                                    <div className="col-6 col-sm-4">
                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">ABOUT US</h4>
                                            <nav className="footer-widget__navigation">
                                                <ul>
                                                    <li>About Us</li>
                                                    <li>Newsletter Sign Up</li>
                                                    <li>History</li>
                                                    <li>Brands</li>
                                                    <li>Press Office</li>
                                                    <li>Contact Us</li>
                                                    <li>Terms &amp; Conditions</li>
                                                    <li>Privacy Policy</li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">SERVICES</h4>
                                            <nav className="footer-widget__navigation">
                                                <ul>
                                                    <li>Price promise</li>
                                                    <li>How to order</li>
                                                    <li>Returns</li>
                                                    <li>UK delivery</li>
                                                    <li>International delivery</li>
                                                    <li>Want it? Can’t find it?</li>
                                                    <li>Customer feedback</li>
                                                    <li>Measuring Advice</li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">USEFUL LINKS</h4>
                                            <nav className="footer-widget__navigation">
                                                <ul>
                                                    <li>Privacy Policy</li>
                                                    <li>Returns</li>
                                                    <li>Terms &amp; Conditions</li>
                                                    <li>Contact Us</li>
                                                    <li>Latest News</li>
                                                    <li>Our Sitemap</li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-custom-xl-6 col-lg-6">
                                <div className="row">
                                    <div className="col-6 col-sm-4">
                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">WORK WITH US</h4>
                                            <nav className="footer-widget__navigation">
                                                <ul>
                                                    <li>Careers</li>
                                                    <li>Affiliates</li>
                                                    <li>Travel Scholarship</li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">GIFTS</h4>
                                            <nav className="footer-widget__navigation">
                                                <ul>
                                                    <li>Gift vouchers</li>
                                                    <li>Return customers</li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">CATEGORIES</h4>
                                            <nav className="footer-widget__navigation">
                                                <ul>
                                                    <li>Living Room</li>
                                                    <li>Kitchen</li>
                                                    <li>Bathroom</li>
                                                    <li>Outdoors</li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-custom-xl-6 col-lg-6">
                                <div className="footer-widget footer-widget--two">
                                    <h4 className="footer-widget__title">10% OFF YOUR FIRST ORDER</h4>
                                    <p className="footer-widget__text">Join our community and be the first to know about offers, new collections and interior trends.</p>
                                    <div className="newsletter-form-area">
                                        <form id="mc-form" className="mc-form">
                                            <div className="footer-widget__newsletter-form">
                                                <input type="email" placeholder="Your Email" required />
                                                <button type="submit">SUBSCRIBE US</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* mailchimp-alerts Start */}
                                    <div className="mailchimp-alerts">
                                        <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
                                        <div className="mailchimp-success" />{/* mailchimp-success end */}
                                        <div className="mailchimp-error" />{/* mailchimp-error end */}
                                    </div>{/* mailchimp-alerts end */}
                                </div>
                                <div className="footer-widget footer-widget--two">
                                    <span className="footer-widget__text footer-widget__text--two">Follow us</span>
                                    <ul className="footer-widget__social-links">
                                        <li><a href="www.facebook.com" title="Facebook"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="www.twitter.com" title="Twitter"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="www.linkedin.com" title="LinkedIn"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="www.instagram.com" title="Instagram"><i className="fa fa-instagram" /></a></li>
                                        <li><a href="www.youtube.com" title="Youtube"><i className="fa fa-youtube-play" /></a></li>
                                    </ul>
                                </div>
                                <div className="footer-payment-logo">
                                    <img src="assets/img/icons/payments.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-area">
                    <div className="container wide">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-text text-center">
                                    copyright © 2022 FKoca. All Rights Reserved
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
