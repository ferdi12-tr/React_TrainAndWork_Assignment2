import React, { Component } from 'react'

export default class Header extends Component {


    render() {
        return (
            <div className="header-navigation-area header-navigation-area--extra-space d-none d-lg-block">
                <div className="container wide">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-info-wrapper header-info-wrapper--alt-style">
                                <div className="header-logo">
                                    <a href="index.html">
                                        <img src="../assets/img/logo.png" className="img-fluid" alt="" />
                                        <img src="../assets/img/logo-alt.png" className="img-fluid" alt="" />
                                    </a>
                                </div>
                                <div className="header-navigation-wrapper">
                                    <nav>
                                        <ul>
                                            <li className="has">
                                                <a href="index.html">HOME</a>
                                            </li>
                                            <li className="has">
                                                <a href="/">About</a>
                                            </li>
                                            <li className="has">
                                                <a href="blog.html">BLOG</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
