import React, { useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import { Link } from 'react-router-dom';
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';

const LenovoE14Thinkpad = () => {
    const props = { width: 400, height: 500, zoomWidth: 500, img: "/images/lenovo_e14.png" };
    const prop1 = { width: 250, height: 200, zoomWidth: 500, img: "/images/lenovoe14_pc.PNG" };
    const prop2 = { width: 250, height: 200, zoomWidth: 200, img: "/images/lenovoe14_wc.PNG" };
    const prop3 = { width: 250, height: 200, zoomWidth: 300, img: "/images/lenovo_1.PNG" };
    const prop4 = { width: 250, height: 200, zoomWidth: 300, img: "/images/lenovo_2.PNG" };

    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return (
        <>
            <Meta title="HP Envy Product" />
            <BreadCrumb title="HP Envy Product" />

            {/* <Container class1="main-hplaptop-wrapper py-5 home-wrapper-2">
                <div className="row">
                <div className="col-5">
                        <div className="main-product-details">
                            <div className="img-fluid" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '500px',
                                height: '300px',}}>
                                <div>
                                    <ReactImageZoom {...props} width= {280} height= {280}/>
                                </div>
                            </div>

                            <div className='border-bottom'>
                                <h3 className='title'>
                                    HP ENVY THINKPAD
                                </h3>

                            </div>
                            <div className=" py-3">
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className="product-heading">
                                        Generation:
                                    </h3><p className='product-data'>8th</p>

                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className="product-heading">
                                        Brand :
                                    </h3><p className='product-data'>HP ENVY</p>

                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className="product-heading">
                                        Category :
                                    </h3><p className='product-data'>Laptop</p>

                                </div>

                                <div className='d-flex align-items-center gap-15 flex-row  mb-3 mt-2'>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0'>Up Vote</button>
                                        <button className='button signup'>Down Vote</button>
                                    </div>

                                </div>

                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href=""><AiOutlineHeart className='fs-5 me-2' /> Add to compare</a>
                                    </div>
                                    <div>
                                        <a href=""><TbGitCompare className='fs-5 me-2' /> Add to wishlist</a>
                                    </div>
                                </div>

                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className="product-heading">
                                        Product Link
                                    </h3><a href="javascript:void(0);" onClick={() => copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")}>
                                        Copy Product Link
                                    </a>

                                </div>

                                <span><br></br><h5>Word Cloud</h5>
                                <div className="img-fluid" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '500px',
                                    height: '300px',
                                    border: '2px black solid',}}>
                                    <div>
                                        <ReactImageZoom {...prop2 } width= {450} height= {270}/>
                                    </div>
                                </div></span>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mb-4">
                        <div className="main-product-details">
                            <span><h5>Pie Chart</h5>
                            <div className="img-fluid" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '700px',
                                height: '300px',
                                border: '2px black solid',}}>
                                <div>
                                    <ReactImageZoom {...prop1} width= {400} height= {300}/>
                                </div>
                            </div> </span>
                            
                            <span><h5><br></br><br></br>Aspect Chart with Reactions</h5>
                            <div className="img-fluid" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '700px',
                                height: '300px',
                                border: '2px black solid',}}>
                                <div>
                                    <ReactImageZoom {...prop3} width= {500} height= {250} />
                                </div>
                            </div></span>
                            <span><h5><br></br><br></br>Aspect Chart with Values</h5>
                            <div className="img-fluid" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '700px',
                                height: '300px',
                                border: '2px black solid',
                                  }}>
                                <div>
                                    <ReactImageZoom {...prop4} width= {500} height= {300} />
                                </div>
                            </div></span>

                        </div>
                    </div>
                </div>
            </Container> */}

            <Container class1="reviews-wrapper pb-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <h3 id='review'>Reviews</h3>
                    <div className="review-inner-wrapper">
                        <div className="review-head d-flex justify-content-between align-items-end">
                            <div>
                                <h4 className='mb-2'>Customer Reviews</h4>
                                <div className='d-flex gap-10'>
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
                                    <p className='mb-0 align-items-center'>Based on 2 Reviews</p>
                                </div>
                            </div>
                            {
                                orderedProduct && (
                                    <div>
                                        <a className='text-dark text-decoration-underline' href="">Write a Review</a>
                                    </div>
                                )
                            }
                        </div>
                        <div className="review-form py-4">
                            <h4>Write a Review</h4>
                            <form action="" className='d-flex flex-column gap-15'>

                                <div>

                                    <ReactStars
                                        edit={true}
                                        count={5}
                                        value={4}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                </div>

                                <div>
                                    <textarea name="" className='w-100 form-control' id="" cols="30" rows="4" placeholder='Comments'></textarea>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button className='button border-0'>Submit Review</button>
                                </div>
                            </form>
                        </div>
                        <div className="reviews mt-4">
                            <div className="review ">
                                <div className='d-flex gap-10 align-items-center'>
                                    <h6 className='mb-0'>HP Envy</h6>
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
                                </div>
                                <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam est quo esse placeat distinctio quas recusandae ut pariatur aliquam molestiae voluptatum adipisci odit cupiditate, totam error. Optio expedita veniam aperiam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </>
    )
}

export default LenovoE14Thinkpad


