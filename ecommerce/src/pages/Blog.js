import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

export default class Blog extends Component {
    render() {
        const { blogPosts } = this.props
        return (
            <>
                <div className="breadcrumb-area section-space--breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="breadcrumb-wrapper">
                                    <h2 className="page-title">Blog</h2>
                                    <ul className="breadcrumb-list">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">Blog</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-content-wrapper">
                    <div className="blog-page-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 order-2">
                                    <div className="blog-sidebar-wrapper">
                                        <div className="single-sidebar-widget single-sidebar-widget--extra-space">
                                            <h2 className="single-sidebar-widget__title single-sidebar-widget__title--extra-space">Search</h2>
                                            <div className="sidebar-search">
                                                <form action="#">
                                                    <input type="search" placeholder="Search..." />
                                                    <button type="submit"><i className="fa fa-search" /></button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="single-sidebar-widget">
                                            <h2 className="single-sidebar-widget__title">Recent Posts</h2>
                                            <ul className="single-sidebar-widget__dropdown single-sidebar-widget__dropdown--extra-height">
                                                {blogPosts.map((post, index) => {
                                                    return <li key={index}><Link to={post.slug}>{post.title}</Link></li>;
                                                })}
                                            </ul>
                                        </div>
                                        <div className="single-sidebar-widget">
                                            <h2 className="single-sidebar-widget__title">Recent Comments</h2>
                                            <ul className="single-sidebar-widget__dropdown single-sidebar-widget__dropdown--comments">
                                                <li><span className="commenter">Alisa</span> on <a href="blog-left-sidebar.html"> The Difference Between Green Furniture and Sustainable Furniture</a></li>
                                                <li><span className="commenter">David</span> on <a href="blog-left-sidebar.html">A Busy Person Guide To Getting Organized Room</a></li>
                                                <li><span className="commenter">Rashed</span> on <a href="blog-left-sidebar.html">Three Sneaky Storage Solutions For Small Spaces</a></li>
                                                <li><span className="commenter">Luis</span> on <a href="blog-left-sidebar.html">The Future of Senior Housing</a></li>
                                                <li><span className="commenter">Saddam</span> on <a href="blog-left-sidebar.html">Creating An Organized Multi-Use Room</a></li>
                                            </ul>
                                        </div>
                                        <div className="single-sidebar-widget">
                                            <h2 className="single-sidebar-widget__title">Archives</h2>
                                            <ul className="single-sidebar-widget__dropdown">
                                                <li><a href="blog-left-sidebar.html">July 2019</a></li>
                                                <li><a href="blog-left-sidebar.html">March 2019</a></li>
                                            </ul>
                                        </div>
                                        <div className="single-sidebar-widget">
                                            <h2 className="single-sidebar-widget__title">Categories</h2>
                                            <ul className="single-sidebar-widget__dropdown">
                                                <li><a href="blog-left-sidebar.html">Furniture</a></li>
                                                <li><a href="blog-left-sidebar.html">Interior</a></li>
                                                <li><a href="blog-left-sidebar.html">Uncategorized</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 order-1">
                                    <div className="blog-post-wrapper">
                                        <div className="row">
                                            {blogPosts.map((post, index) => {
                                                return <div key={index} className="col-md-6">
                                                    <div className="single-blog-post">
                                                        <div className="single-blog-post__image">
                                                            <Link to={post.slug}>
                                                                <img src={post.image} className="img-fluid" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="single-blog-post__content">
                                                            <h3 className="post-title"><Link to={post.slug}>{post.title}</Link></h3>
                                                            <p className="post-meta">By <a href="#" className="post-author">{post.author}</a> <span className="separator">|</span> <a href="#">{post.date}</a></p>
                                                            <p className="post-excerpt">{post.content}</p>
                                                            <Link to={post.slug}> Read more <i className="fa fa-caret-right" /></Link>
                                                        </div>
                                                    </div>
                                                </div>;
                                            })}
                                        </div>
                                    </div>
                                    <div className="pagination-wrapper">
                                        <ul>
                                            <li className="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><Footer /></>

        )
    }
}
