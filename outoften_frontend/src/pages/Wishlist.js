import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";


const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <Container class1="wishlist-wrapper home-wrapper-2 py-5">
            <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image">
                                    <img src="images/thinkpadx1.jpg" alt="thinkpad" className="img-fluid w-100" />
                                </div>
                                <div className="py-3 px-3">
                <h5 className="title">
                  Lenovo ThinkPad Carbon X1 7.0 8 GB RAM 10 Inch With Wi-Fi+3G Thinkpad
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image">
                                    <img src="images/ceravesunsc.jpg" alt="sunscreen" className="img-fluid w-100" />
                                </div>
                                <div className="py-3 px-3">
                <h5 className="title">
                  CeraVe hydrating Sunscreen broad spectrum SPF 50 face Mineral Sunscreen 75ML
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image">
                                    <img src="images/biodermaconc.jpg" alt="cncealer" className="img-fluid w-100" />
                                </div>
                                <div className="py-3 px-3">
                <h5 className="title">
                    Bioderma Sebium Global Cover Purifying Tinted Concealer for Combination Acne-Prone Skin, 30ml
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
                            </div>
                        </div>
                    </div>
            </Container>
            
        </>
    );
};

export default Wishlist;
