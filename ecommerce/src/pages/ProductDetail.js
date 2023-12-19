import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';



export default function ProductDetail({ getProductBySlug }) {

    const { slug } = useParams();
    const product = getProductBySlug(slug);
    console.log(product.images[0])
    return (
        <>
            <div className="page-content-wrapper">
                <div className="single-product-slider-details-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-details-slider-area product-details-slider-area--side-move">
                                    <div className="product-badge-wrapper">
                                        <span className="hot">Hot</span>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col-md-9 order-1 order-md-2 position-relative">
                                            <div className="big-image-wrapper">
                                                <div className="enlarge-icon">
                                                    {/* <a className="btn-zoom-popup" href="" data-tippy="Click to enlarge" data-tippy-placement="left" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="pe-7s-expand1" /></a> */}
                                                </div>
                                                <div className="product-details-big-image-slider-wrapper product-details-big-image-slider-wrapper--side-space theme-slick-slider" data-slick-setting="{
                                        &quot;slidesToShow&quot;: 1,
                                        &quot;slidesToScroll&quot;: 1,
                                        &quot;arrows&quot;: false,
                                        &quot;autoplay&quot;: false,
                                        &quot;autoplaySpeed&quot;: 5000,
                                        &quot;fade&quot;: true,
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
                                                    {/* <div className="single-image">
                                                    <img src={"/" + product.images[0]} className="img-fluid" alt="" />
                                                </div>
                                                <div className="single-image">
                                                    <img src={"/" + product.images[0]} className="img-fluid" alt="" />
                                                </div>
                                                <div className="single-image">
                                                    <img src={"/" + product.images[0]} className="img-fluid" alt="" />
                                                </div>
                                                <div className="single-image">
                                                    <img src={"/" + product.images[0]} className="img-fluid" alt="" />
                                                </div> */}
                                                    <div className="single-image">
                                                        <img src={"/" + product.images[0]} className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 order-2 order-md-1 position-relative">
                                            <div className="product-details-small-image-slider-wrapper product-details-small-image-slider-wrapper--vertical-space theme-slick-slider" data-slick-setting="{
                                    &quot;slidesToShow&quot;: 3,
                                    &quot;slidesToScroll&quot;: 1,
                                    &quot;centerMode&quot;: false,
                                    &quot;arrows&quot;: true,
                                    &quot;vertical&quot;: true,
                                    &quot;autoplay&quot;: false,
                                    &quot;autoplaySpeed&quot;: 5000,
                                    &quot;speed&quot;: 500,
                                    &quot;asNavFor&quot;: &quot;.product-details-big-image-slider-wrapper&quot;,
                                    &quot;focusOnSelect&quot;: true,
                                    &quot;prevArrow&quot;: {&quot;buttonClass&quot;: &quot;slick-prev&quot;, &quot;iconClass&quot;: &quot;fa fa-angle-up&quot; },
                                    &quot;nextArrow&quot;: {&quot;buttonClass&quot;: &quot;slick-next&quot;, &quot;iconClass&quot;: &quot;fa fa-angle-down&quot; }
                                }" data-slick-responsive="[
                                    {&quot;breakpoint&quot;:1501, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3, &quot;arrows&quot;: true} },
                                    {&quot;breakpoint&quot;:1199, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3, &quot;arrows&quot;: true} },
                                    {&quot;breakpoint&quot;:991, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3, &quot;arrows&quot;: true, &quot;slidesToScroll&quot;: 1} },
                                    {&quot;breakpoint&quot;:767, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3, &quot;arrows&quot;: false, &quot;slidesToScroll&quot;: 1, &quot;vertical&quot;: false, &quot;centerMode&quot;: true} },
                                    {&quot;breakpoint&quot;:575, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3, &quot;arrows&quot;: false, &quot;slidesToScroll&quot;: 1, &quot;vertical&quot;: false, &quot;centerMode&quot;: true} },
                                    {&quot;breakpoint&quot;:479, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2, &quot;arrows&quot;: false, &quot;slidesToScroll&quot;: 1, &quot;vertical&quot;: false, &quot;centerMode&quot;: true} }
                                ]">
                                                {/* <div className="single-image">
                                                <img src={"/" + product.images[0]} className="img-fluid" alt="" />
                                            </div>
                                            <div className="single-image">
                                                <img src={"/" + product.images[0]} className="img-fluid" alt="" />
                                            </div>
                                            <div className="single-image">
                                                <img src={"/" + product.images[0]} className="img-fluid" alt="" />
                                            </div> */}
                                                <div className="single-image">
                                                    <img src={"/" + product.images[0]} className="img-fluid" alt="" />
                                                </div>
                                                <div className="single-image">
                                                    <img src={"/" + product.images[1]} className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*=======  End of product details slider area  =======*/}
                            </div>

                            <div className="col-lg-6">
                                <div className="product-details-description-wrapper">
                                    <h2 className="item-title">{product.title}</h2>
                                    <p className="price">
                                        {product.discount && <span className="main-price discounted">${product.discount}</span>}
                                        <span className="discounted-price">${product.price}</span>
                                    </p>
                                    <p className="description">Upholstered velvet ottoman with antique stud detailing. Invite restrained glamour and on-trend colour into your design scheme with the Eichholtz Ponti Ottoman. Inspired by the neo-classical influences of Italian icon, Gio Ponti, this contemporary ottoman collection is presented in a choice of velvet and linen colourways.</p>
                                    <div>
                                        <div className="pro-qty d-inline-block">
                                            <input type="text" defaultValue={1} />
                                        </div>
                                        <div className="add-to-cart-btn d-inline-block">
                                            <button className="theme-button theme-button--alt">ADD TO CART</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-product-description-tab-area section-space">
                    <div className="description-tab-navigation">
                        <ul className="nav nav-tabs justify-content-center" id="nav-tab2" role="tablist">
                            <li className="nav-item">
                                <button className="nav-link active" type="button" data-bs-toggle="tab" data-bs-target="#product-description" role="tab" aria-controls="product-description" aria-selected="true">DESCRIPTION</button>
                            </li>
                        </ul>
                    </div>
                    <div className="single-product-description-tab-content">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="product-description" role="tabpanel" aria-labelledby="description-tab">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="description-content">
                                                <p className="long-desc">Inspired by the simplistic style of traditional Scandinavian design, this cone shaped ceiling pendant adds an understated elegance to any interior design scheme.
                                                    Strung on a 3m coloured cord, this simple yet stylish ceiling light can be hung above your breakfast bar or dining table to enhance your surroundings.
                                                    A modern interpretation of a classic pendant light, Annular is available in a choice of muted colourways and will look wonderful hung alone, or as a cluster for greater visual impact.</p>
                                                <p><b>Light source: Integrated LED (non-replaceable) with 30,000 hour life span.</b></p>
                                                <p><b>Specification: EU 220-Volts</b></p>
                                                <p><b>Ceiling rose: White – included</b></p>
                                                <p><b>Cable: 3 metre adjustable textile cord.</b></p>
                                                <p><b>Approximate net product weight: 2.6kg</b></p>
                                                <p><b>This product is hardwired – professional installation recommended.</b></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

