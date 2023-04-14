import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import mcbook from "../images/macbookm1.jpeg";
import hpenvy from "../images/hp_envy.jpg";
import g7 from "../images/galaxy_7.png";
import biosunsc from "../images/biodermasunsc.jpg";
import neutrosunsc from "../images/neutrogenasunsc.jpg";
import ceravesunsc from "../images/ceravesunsc.jpg";
import mconc from "../images/maybconc.png";
import tconc from "../images/tarteconc.png";
// import mfound from "../images/maybfound.jpg";
import le14 from "../images/lenovo_e14.png";
import lx1 from "../images/lenovo_x1.png";
import watch2 from "../images/watch-1.avif";
// import mconcealer from "../images/maybconc.png";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import Container from '../components/Container'

const ProductCard = (props) => {    //link me prop send if else
    const { grid } = props;
    console.log(grid);
    let location = useLocation();
    return (

        <>

            <Container class1="home-wrapper-2 py-5">
                <div className="row">
                    <div className={`col-lg-3 col-md-6 mb-4"${location.pathname == "/product" ? `gr-${grid}` : ""}`}>
                        <div className="product-card position-relative">
                            <Link
                                to={
                                location.pathname === "/"
                                    ? "/product/:id"
                                    : location.pathname === "/product/:id"
                                    ? "/product/:id"
                                    : ":id"   //change
                                }
                                className="product-card-link">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent">
                                        <img src={wish} alt="wishlist" />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img
                                        src={mcbook}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                    <img
                                        src={watch2}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">Macbook M1</h6>
                                    <h5 className="product-title">
                                        {/* Kinds Headphone Bulk 10 pack Multi colored for students */}
                                    </h5>
                                    {/* <ReactStars
                                        edit={false}
                                        count={5}
                                        value={4.5}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    /> */}
                                    <p
                                        className={`description ${
                                        grid === 12 ? "d-block" : "d-none"
                                        }`}>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt...
                                    </p>
                                    {/* <p className="price">$100</p> */}
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column ">
                                        <button className="border-0 bg-transparent">
                                        <img src={prodcompare} alt="compare" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={view} alt="view" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={addcart} alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={`col-lg-3 col-md-6 mb-4"${location.pathname == "/hplaptop" ? `gr-${grid}` : ""}`}>
                        <div className="product-card position-relative">
                            <Link
                                to={
                                location.pathname === "/"
                                    ? "/hplaptop/:id"
                                    : location.pathname === "/hplaptop/:id"
                                    ? "/hplaptop/:id"
                                    : ":id"
                                }
                                className="product-card-link">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent">
                                        <img src={wish} alt="wishlist" />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img
                                        src={hpenvy}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                    <img
                                        src={watch2}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">HP Envy</h6>
                                    <h5 className="product-title">
                                        {/* Kinds Headphone Bulk 10 pack Multi colored for students */}
                                    </h5>
                                    {/* <ReactStars
                                        edit={false}
                                        count={5}
                                        value={4}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    /> */}
                                    <p
                                        className={`description ${
                                        grid === 12 ? "d-block" : "d-none"
                                        }`}>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt...
                                    </p>
                                    {/* <p className="price">$100</p> */}
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column ">
                                        <button className="border-0 bg-transparent">
                                        <img src={prodcompare} alt="compare" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={view} alt="view" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={addcart} alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                    <div className={`col-lg-3 col-md-6 mb-4"${location.pathname == "/lenovoe14" ? `gr-${grid}` : ""}`}>
                        <div className="product-card position-relative">
                            <Link
                                to={
                                location.pathname === "/"
                                    ? "/lenovoe14/:id"
                                    : location.pathname === "/lenovoe14/:id"
                                    ? "/lenovoe14/:id"
                                    : ":id"
                                }
                                className="product-card-link">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent">
                                        <img src={wish} alt="wishlist" />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img
                                        src={le14}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                    <img
                                        src={watch2}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">Lenovo E14</h6>
                                    <h5 className="product-title">
                                        {/* Kinds Headphone Bulk 10 pack Multi colored for students */}
                                    </h5>
                                    {/* <ReactStars
                                        edit={false}
                                        count={5}
                                        value={3.5}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    /> */}
                                    <p
                                        className={`description ${
                                        grid === 12 ? "d-block" : "d-none"
                                        }`}>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt...
                                    </p>
                                    {/* <p className="price">$100</p> */}
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column ">
                                        <button className="border-0 bg-transparent">
                                        <img src={prodcompare} alt="compare" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={view} alt="view" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={addcart} alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={`col-lg-3 col-md-6 mb-4"${location.pathname == "/lenovox1" ? `gr-${grid}` : ""}`}>
                        <div className="product-card position-relative">
                            <Link
                                to={
                                location.pathname === "/"
                                    ? "/lenovox1/:id"
                                    : location.pathname === "/lenovox1/:id"
                                    ? "/lenovox1/:id"
                                    : ":id"
                                }
                                className="product-card-link">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent">
                                        <img src={wish} alt="wishlist" />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img
                                        src={lx1}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                    <img
                                        src={watch2}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">Lenovo X1</h6>
                                    <h5 className="product-title">
                                        {/* Kinds Headphone Bulk 10 pack Multi colored for students */}
                                    </h5>
                                    {/* <ReactStars
                                        edit={false}
                                        count={5}
                                        value={3.5}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    /> */}
                                    <p
                                        className={`description ${
                                        grid === 12 ? "d-block" : "d-none"
                                        }`}>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt...
                                    </p>
                                    {/* <p className="price">$100</p> */}
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column ">
                                        <button className="border-0 bg-transparent">
                                        <img src={prodcompare} alt="compare" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={view} alt="view" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={addcart} alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                    {/* <div className={`col-lg-3 col-md-6 mb-4" ${location.pathname == "/product" ? `gr-${grid}` : ""}`}> */}
                    {/* <!-- Product Card 3 --> */}
                    {/* </div> */}
                    {/* <div className={`col-lg-3 col-md-6 mb-4" ${location.pathname == "/product" ? `gr-${grid}` : ""}`}> */}
                    {/* <!-- Product Card 4 --> */}
                    {/* </div> */}
                </div>
            </Container>

            <Container class1="home-wrapper-2 py-5">
                <div className="row">
                    <div className={`col-lg-3 col-md-6 mb-4"${location.pathname == "/galaxy7" ? `gr-${grid}` : ""}`}>
                        <div className="product-card position-relative">
                            <Link
                                to={
                                location.pathname === "/"
                                    ? "/galaxy7/:id"
                                    : location.pathname === "/galaxy7/:id"
                                    ? "/galaxy7/:id"
                                    : ":id"
                                }
                                className="product-card-link">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent">
                                        <img src={wish} alt="wishlist" />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img
                                        src={g7}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                    <img
                                        src={watch2}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">Galaxy 7</h6>
                                    <h5 className="product-title">
                                        {/* Kinds Headphone Bulk 10 pack Multi colored for students */}
                                    </h5>
                                    {/* <ReactStars
                                        edit={false}
                                        count={5}
                                        value={3.8}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    /> */}
                                    <p
                                        className={`description ${
                                        grid === 12 ? "d-block" : "d-none"
                                        }`}>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt...
                                    </p>
                                    {/* <p className="price">$100</p> */}
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column ">
                                        <button className="border-0 bg-transparent">
                                        <img src={prodcompare} alt="compare" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={view} alt="view" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={addcart} alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={`col-lg-3 col-md-6 mb-4"${location.pathname == "/neutrogenasunsc" ? `gr-${grid}` : ""}`}>
                        <div className="product-card position-relative">
                            <Link
                                to={
                                location.pathname === "/"
                                    ? "/neutrogenasunsc/:id"
                                    : location.pathname === "/neutrogenasunsc/:id"
                                    ? "/neutrogenasunsc/:id"
                                    : ":id"
                                }
                                className="product-card-link">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent">
                                        <img src={wish} alt="wishlist" />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img
                                        src={neutrosunsc}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                    <img
                                        src={watch2}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">Neutrogena Sunscreen</h6>
                                    <h5 className="product-title">
                                        {/* Kinds Headphone Bulk 10 pack Multi colored for students */}
                                    </h5>
                                    {/* <ReactStars
                                        edit={false}
                                        count={5}
                                        value={4.2}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    /> */}
                                    <p
                                        className={`description ${
                                        grid === 12 ? "d-block" : "d-none"
                                        }`}>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt...
                                    </p>
                                    {/* <p className="price">$100</p> */}
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column ">
                                        <button className="border-0 bg-transparent">
                                        <img src={prodcompare} alt="compare" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={view} alt="view" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={addcart} alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                    <div className={`col-lg-3 col-md-6 mb-4"${location.pathname == "/biodermasunsc" ? `gr-${grid}` : ""}`}>
                        <div className="product-card position-relative">
                            <Link
                                to={
                                location.pathname === "/"
                                    ? "/biodermasunsc/:id"
                                    : location.pathname === "/biodermasunsc/:id"
                                    ? "/biodermasunsc/:id"
                                    : ":id"
                                }
                                className="product-card-link">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent">
                                        <img src={wish} alt="wishlist" />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img
                                        src={biosunsc}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                    <img
                                        src={watch2}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">Bioderma Sunscreen</h6>
                                    <h5 className="product-title">
                                        {/* Kinds Headphone Bulk 10 pack Multi colored for students */}
                                    </h5>
                                    {/* <ReactStars
                                        edit={false}
                                        count={5}
                                        value={3.9}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    /> */}
                                    <p
                                        className={`description ${
                                        grid === 12 ? "d-block" : "d-none"
                                        }`}>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt...
                                    </p>
                                    {/* <p className="price">$100</p> */}
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column ">
                                        <button className="border-0 bg-transparent">
                                        <img src={prodcompare} alt="compare" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={view} alt="view" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={addcart} alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={`col-lg-3 col-md-6 mb-4"${location.pathname == "/ceravesunsc" ? `gr-${grid}` : ""}`}>
                        <div className="product-card position-relative">
                            <Link
                                to={
                                location.pathname === "/"
                                    ? "/ceravesunsc/:id"
                                    : location.pathname === "/ceravesunsc/:id"
                                    ? "/ceravesunsc/:id"
                                    : ":id"
                                }
                                className="product-card-link">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent">
                                        <img src={wish} alt="wishlist" />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img
                                        src={ceravesunsc}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                    <img
                                        src={watch2}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">CeraVe Sunscreen</h6>
                                    <h5 className="product-title">
                                        {/* Kinds Headphone Bulk 10 pack Multi colored for students */}
                                    </h5>
                                    {/* <ReactStars
                                        edit={false}
                                        count={5}
                                        value={4}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    /> */}
                                    <p
                                        className={`description ${
                                        grid === 12 ? "d-block" : "d-none"
                                        }`}>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt...
                                    </p>
                                    {/* <p className="price">$100</p> */}
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column ">
                                        <button className="border-0 bg-transparent">
                                        <img src={prodcompare} alt="compare" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={view} alt="view" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={addcart} alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </Container>

            <Container class1="home-wrapper-2 py-5">
                <div className="row">
                    <div className={`col-lg-3 col-md-6 mb-4"${location.pathname == "/tarteconc" ? `gr-${grid}` : ""}`}>
                        <div className="product-card position-relative">
                            <Link
                                to={
                                location.pathname === "/"
                                    ? "/tarteconc/:id"
                                    : location.pathname === "/tarteconc/:id"
                                    ? "/tarteconc/:id"
                                    : ":id"
                                }
                                className="product-card-link">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent">
                                        <img src={wish} alt="wishlist" />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img
                                        src={tconc}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                    <img
                                        src={watch2}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">Tarte Concealer</h6>
                                    <h5 className="product-title">
                                        {/* Kinds Headphone Bulk 10 pack Multi colored for students */}
                                    </h5>
                                    {/* <ReactStars
                                        edit={false}
                                        count={5}
                                        value={4.5}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    /> */}
                                    <p
                                        className={`description ${
                                        grid === 12 ? "d-block" : "d-none"
                                        }`}>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt...
                                    </p>
                                    {/* <p className="price">$100</p> */}
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column ">
                                        <button className="border-0 bg-transparent">
                                        <img src={prodcompare} alt="compare" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={view} alt="view" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={addcart} alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={`col-lg-3 col-md-6 mb-4"${location.pathname == "/maybconc" ? `gr-${grid}` : ""}`}>
                        <div className="product-card position-relative">
                            <Link
                                to={
                                location.pathname === "/"
                                    ? "/maybconc/:id"
                                    : location.pathname === "/maybconc/:id"
                                    ? "/maybconc/:id"
                                    : ":id"
                                }
                                className="product-card-link">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent">
                                        <img src={wish} alt="wishlist" />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img
                                        src={mconc}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                    <img
                                        src={watch2}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">Maybelline Concealer</h6>
                                    <h5 className="product-title">
                                        {/* Kinds Headphone Bulk 10 pack Multi colored for students */}
                                    </h5>
                                    {/* <ReactStars
                                        edit={false}
                                        count={5}
                                        value={4.2}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    /> */}
                                    <p
                                        className={`description ${
                                        grid === 12 ? "d-block" : "d-none"
                                        }`}>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt...
                                    </p>
                                    {/* <p className="price">$100</p> */}
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column ">
                                        <button className="border-0 bg-transparent">
                                        <img src={prodcompare} alt="compare" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={view} alt="view" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={addcart} alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    

            {/* <div className="product-card position-relative">
            <Link
                to={
                location.pathname === "/"
                    ? "/product/:id"
                    : location.pathname === "/product/:id"
                    ? "/product/:id"
                    : ":id"
                }
                className="product-card-link"
            >
                <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent">
                    <img src={wish} alt="wishlist" />
                </button>
                </div>
                <div className="product-image">
                <img
                    src={mcbook}
                    className="img-fluid"
                    alt="product-image"
                    srcSet=""
                />
                <img
                    src={watch2}
                    className="img-fluid"
                    alt="product-image"
                    srcSet=""
                />
                </div>
                <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">
                    Kinds Headphone Bulk 10 pack Multi colored for students
                </h5>
                <ReactStars
                    edit={false}
                    count={5}
                    value={4}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />
                <p
                    className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                    }`}
                >
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt...
                </p>
                <p className="price">$100</p>
                </div>
                <div className="action-bar position-absolute">
                <div className="d-flex flex-column ">
                    <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="compare" />
                    </button>
                </div>
                <div className="d-flex flex-column">
                    <button className="border-0 bg-transparent">
                    <img src={view} alt="view" />
                    </button>
                </div>
                <div className="d-flex flex-column">
                    <button className="border-0 bg-transparent">
                    <img src={addcart} alt="addcart" />
                    </button>
                </div>
                </div>
            </Link>
            </div> */}

                    {/* <div className={`col-lg-3 col-md-6 mb-4"${location.pathname == "/product" ? `gr-${grid}` : ""}`}>
                        <div className="product-card position-relative">
                            <Link
                                to={
                                location.pathname === "/"
                                    ? "/product/:id"
                                    : location.pathname === "/product/:id"
                                    ? "/product/:id"
                                    : ":id"
                                }
                                className="product-card-link">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent">
                                        <img src={wish} alt="wishlist" />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img
                                        src={le14}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                    <img
                                        src={watch2}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">Havels</h6>
                                    <h5 className="product-title">
                                        Kinds Headphone Bulk 10 pack Multi colored for students
                                    </h5>
                                    <ReactStars
                                        edit={false}
                                        count={5}
                                        value={4}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                    <p
                                        className={`description ${
                                        grid === 12 ? "d-block" : "d-none"
                                        }`}>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt...
                                    </p>
                                    <p className="price">$100</p>
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column ">
                                        <button className="border-0 bg-transparent">
                                        <img src={prodcompare} alt="compare" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={view} alt="view" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={addcart} alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={`col-lg-3 col-md-6 mb-4"${location.pathname == "/product" ? `gr-${grid}` : ""}`}>
                        <div className="product-card position-relative">
                            <Link
                                to={
                                location.pathname === "/"
                                    ? "/product/:id"
                                    : location.pathname === "/product/:id"
                                    ? "/product/:id"
                                    : ":id"
                                }
                                className="product-card-link">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent">
                                        <img src={wish} alt="wishlist" />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img
                                        src={lx1}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                    <img
                                        src={watch2}
                                        className="img-fluid"
                                        alt="product-image"
                                        srcSet=""
                                    />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">Havels</h6>
                                    <h5 className="product-title">
                                        Kinds Headphone Bulk 10 pack Multi colored for students
                                    </h5>
                                    <ReactStars
                                        edit={false}
                                        count={5}
                                        value={4}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                    <p
                                        className={`description ${
                                        grid === 12 ? "d-block" : "d-none"
                                        }`}>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt...
                                    </p>
                                    <p className="price">$100</p>
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column ">
                                        <button className="border-0 bg-transparent">
                                        <img src={prodcompare} alt="compare" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={view} alt="view" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="border-0 bg-transparent">
                                        <img src={addcart} alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div> */}
                  
                </div>
            </Container>

            {/* <Container class1="home-wrapper-2 py-6">
                <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"
                    } `}>
                    <Link to={`${location.pathname == "/"
                ? "/product/:id"
                : location.pathname == "/product/:id"
                    ? "/product/:id"
                    : ":id"
                }`} className="product-card position-relative">
                        <div className="wishlist-icon position-absolute">
                            <button className="border-0 bg-transparent"><img src={wish} alt="wishlist" /></button>
                        </div>
                        <div className="product-image">

                            <img src={mcbook} className='img-fluid' alt="product-image" srcset="" />
                            <img src={watch2} className='img-fluid' alt="product-image" srcset="" />
                        </div>
                        <div className="product-details">
                            <h6 className="brand">
                                Havels
                            </h6>
                            <h5 className="product-title">
                                Kinds Headphone Bulk 10 pack Multi colored for students
                            </h5>
                            <ReactStars
                                edit={false}
                                count={5}
                                value={4}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti quos
                                dolores et quas molestias excepturi sint occaecati cupiditate non
                                provident, similique sunt...
                            </p>
                            <p className="price">
                                $100
                            </p>
                        </div>

                        <div className="action-bar position-absolute">

                            <div className="d-flex flex-column ">
                                <button className="border-0 bg-transparent"><img src={prodcompare} alt="compare" /></button>
                            </div>


                            <div className="d-flex flex-column">
                                <button className="border-0 bg-transparent"><img src={view} alt="view" /></button>
                            </div>

                            <div className="d-flex flex-column">
                                <button className="border-0 bg-transparent"><img src={addcart}  alt="addcart" /></button>
                            </div>


                        </div>
                    </Link>
                </div >
                <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"
                    } `}>
                    <Link to={`${location.pathname == "/"
                ? "/product/:id"
                : location.pathname == "/product/:id"
                    ? "/product/:id"
                    : ":id"
                }`} className="product-card position-relative">
                        <div className="wishlist-icon position-absolute">
                            <button className="border-0 bg-transparent"><img src={wish} alt="wishlist" /></button>
                        </div>
                        <div className="product-image">

                            <img src={mconcealer} className='img-fluid' alt="product-image" srcset="" />
                            <img src={watch2} className='img-fluid' alt="product-image" srcset="" />
                        </div>
                        <div className="product-details">
                            <h6 className="brand">
                                Havels
                            </h6>
                            <h5 className="product-title">
                                Kinds Headphone Bulk 10 pack Multi colored for students
                            </h5>
                            <ReactStars
                                edit={false}
                                count={5}
                                value={4}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti quos
                                dolores et quas molestias excepturi sint occaecati cupiditate non
                                provident, similique sunt...
                            </p>
                            <p className="price">
                                $100
                            </p>
                        </div>

                        <div className="action-bar position-absolute">

                            <div className="d-flex flex-column ">
                                <button className="border-0 bg-transparent"><img src={prodcompare} alt="compare" /></button>
                            </div>


                            <div className="d-flex flex-column">
                                <button className="border-0 bg-transparent"><img src={view} alt="view" /></button>
                            </div>

                            <div className="d-flex flex-column">
                                <button className="border-0 bg-transparent"><img src={addcart}  alt="addcart" /></button>
                            </div>


                        </div>
                    </Link>
                </div >
            </Container> */}



            {/* <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"
                } `}>
                <Link  to={`${location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
                ? "/product/:id"
                : ":id"
            }`} className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent"><img src={wish} alt="wishlist" /></button>
                    </div>
                    <div className="product-image">

                        <img src={mcbook} className='img-fluid' alt="product-image" srcset="" />
                        <img src={watch2}  className='img-fluid' alt="product-image" srcset="" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">
                            Samsung Galaxy 7
                        </h6>
                        <h5 className="product-title">
                            Galaxy 7 phones Bulk 10 pack Multi colored for customers
                        </h5>
                        <ReactStars
                            edit={false}
                            count={5}
                            value={4}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt...
                        </p>
                        <p className="price">
                            $100
                        </p>
                    </div>

                    <div className="action-bar position-absolute">

                        <div className="d-flex flex-column ">
                            <button className="border-0 bg-transparent"><img src={prodcompare} alt="compare" /></button>
                        </div>


                        <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent"><img src={view} alt="view" /></button>
                        </div>

                        <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent"><img src={addcart} alt="addcart" /></button>
                        </div>


                    </div>
                </Link>
            </div > */}

            {/* <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"
                } `}>
                <Link  to={`${location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
                ? "/product/:id"
                : ":id"
            }`} className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent"><img src={wish} alt="wishlist" /></button>
                    </div>
                    <div className="product-image">

                        <img src={mcbook} className='img-fluid' alt="product-image" srcset="" />
                        <img src={watch2}  className='img-fluid' alt="product-image" srcset="" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">
                            Samsung Galaxy 7
                        </h6>
                        <h5 className="product-title">
                            Galaxy 7 qURAT
                        </h5>
                        <ReactStars
                            edit={false}
                            count={5}
                            value={4}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt...
                        </p>
                        <p className="price">
                            $100
                        </p>
                    </div>

                    <div className="action-bar position-absolute">

                        <div className="d-flex flex-column ">
                            <button className="border-0 bg-transparent"><img src={prodcompare} alt="compare" /></button>
                        </div>


                        <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent"><img src={view} alt="view" /></button>
                        </div>

                        <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent"><img src={addcart} alt="addcart" /></button>
                        </div>


                    </div>
                </Link>
            </div > */}


        </>

    )
}

export default ProductCard