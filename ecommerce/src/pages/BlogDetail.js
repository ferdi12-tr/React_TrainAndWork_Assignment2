import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function BlogDetail({ getBlogBySlug, blogPosts }) {
    const { slug } = useParams();
    const post = getBlogBySlug(slug);
    const [commentList, setCommentList] = useState([])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const addToComment = () => {
        const comment = {
            name,
            email,
            message,
            date: new Date().toLocaleDateString()
        }
        setCommentList([...commentList, comment])
        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <><div className="page-content-wrapper">
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

                            <div className="blog-single-post-details-wrapper">
                                <h2 className="post-title">{post.title}</h2>
                                <p className="post-meta">By <a href="#" className="post-author">{post.author}</a> <span className="separator">|</span> <a href="#">January 21, 2019</a></p>
                                <div className="post-thumbnail">
                                    <img src={"/" + post.image} className="img-fluid" alt="" />
                                </div>
                                <div className="post-text-content">
                                    <p>Organization: defined culturally as a key characteristic to success and easy living. The art of organization comes easy to some but may be a bit harder for others, especially those who are always busy and never seem to have enough hours in the day. Organization and productivity go hand in hand, each influencing the other. To keep levels of productivity high, you have to be organized and usually, organized individuals are productive. Fortunately, there are many different tactics you can use around your home to keep (at least) this sector of your life in order. Today we’re highlighting four products that make organization a breeze while saving space and maximizing time.
                                        <br />
                                        <br />
                                        To be considered sustainable furniture, it should be high quality and support a lifestyle with reduced energy and resource needs. You can have a piece of furniture made of the most responsibly sourced materials out there, but if it falls apart in a short time and winds up in a landfill, or if it is designed in such a way that it can only fit into a carbon-spewing, resource-gobbling McMansion, it’s not sustainable.
                                        When it comes to sustainability, size does matter. Here’s why:
                                        <br />
                                        <br />
                                        One of the best ways, if not the best way of reducing our carbon footprints and natural resource consumption is to reduce the physical footprints of our homes.
                                        Smaller homes produce less operational carbon emissions, (e.g., heating and cooling) than larger homes and are less resource intensive to build.
                                        Smaller homes tend to discourage excessive consumerism mitigating that behavior’s attendant environmental impact.
                                        Smaller homes typically support denser, more transit friendly communities, which, by their very nature, allow for a reduction in associated transit emissions.
                                        Location, Location, Location
                                        <br />
                                        <br />
                                        When thinking about sustainable housing, the name of the game is location, location, location. An EPA study found that an energy efficient single family suburban house plus a fuel efficient car can cut your carbon footprint by 34% as compared to a conventional, single family, suburban house and a car with average fuel economy. While this is a significant improvement over a standard single-family home, the same study found that living in an energy efficient multifamily house (i.e. housing with two or more units such as a townhouse or apartment) with access to public transportation reduces your carbon footprint by 62% ­- and that still assumes car ownership.
                                        As one would expect, multifamily housing units are typically smaller than single-family houses. The median size of a new multifamily unit is 1,074 square feet, whereas the median size of a new single family home is 2,467 square feet. But with a smaller – albeit more environmentally-friendly – footprint can come some challenges regarding functionality, especially as a household grows or changes over time.
                                        <br />
                                        <br />
                                        Let’s face it, it’s the desire for – or perceived need for – more space that frequently drives people out of central, transit-friendly locations in search of more square footage. Since housing in most urban cores is considerably more expensive than suburban housing on a per square foot basis, moving to a larger home in a central location can be cost-prohibitive.
                                    </p>
                                </div>
                            </div>

                            <div className="blog-comments-area">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h3 className="blog-details-section-title">Comments {commentList ? commentList.length : 0}</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blog-comments-wrapper">
                                            {commentList && commentList.map((comment, index) => {
                                                return <div key={index} className="single-blog-comment">
                                                    <div className="single-blog-comment__image">
                                                        <img src="/assets/img/review/one.png" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="single-blog-comment__content">
                                                        <div className="comment-time"><i className="fa fa-calendar" />{comment.date}</div>
                                                        <p className="comment-text">{comment.message}
                                                        </p>
                                                    </div>
                                                </div>;
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-comment-form-area">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h3 className="blog-details-section-title">Leave a comment</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="contact-form-wrapper">
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-4 col-sm-6">
                                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name (*)" required />
                                                    </div>
                                                    <div className="col-lg-4 col-sm-6">
                                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email (*)" required />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input type="text" placeholder="Website" />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} cols={30} rows={10} placeholder="Message *" required />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button type="button" onClick={addToComment} className="theme-button"> ADD COMMENT</button>
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
            </div>
        </div><Footer /></>
    )
}

