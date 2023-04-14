import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import logo from "../images/logo.svg";
import menu from "../images/menu.svg";



const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Review Based Website For Products
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+92 3360018019">
                  +92 3360018019
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                {/* <img src={compare} alt="compare" />
                <Link className="text-white">Out-Of-Ten</Link> */}
                <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-0 text-dark"
                  >
                    <img src="/images/logo.png"alt="logo" />
                    <h2 className="mb-0">
                      <br></br>OUTOFTEN
                    </h2>
                  </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                {/* <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                /> */}
                {/* <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span> */}
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-dark"
                  >
                    <img src={compare} alt="compare" />
                    <p className="mb-0">
                      <h5>Compare <br /> Products</h5>
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-dark"
                  >
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0">
                      <h5>Favourite <br /> wishlist</h5>
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-dark"
                  >
                    <img src={user} alt="user" />
                    <p className="mb-0">
                      <h5>Log in <br /> My Account</h5>
                    </p>
                  </Link>
                </div>
                <div>
                  {/* <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-dark"
                  >
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center text-dark"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span className="me-5 d-inline-block text-dark">
                        <h5>Shop Categories</h5>
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-dark" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-dark" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-dark" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15 text-dark">
                    <NavLink className="text-dark" to="/"><h5>Home</h5></NavLink>
                    <NavLink className="text-dark" to="/product"><h5>Our Store</h5></NavLink>
                    <NavLink className="text-dark" to="/blogs"><h5>Blogs</h5></NavLink>
                    <NavLink className="text-dark" to="/contact"><h5>Contact</h5></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
