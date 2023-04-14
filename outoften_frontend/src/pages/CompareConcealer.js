import React, { useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useLocation, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';

const CompareConcealer = (props) => {
    const {type}= useParams();
    const stateParamVal= useLocation().state.stateParam;
    // const 

    // const props = { width: 400, height: 500, zoomWidth: 500, img: "/images/compareconcealer.jpg" };
    const prop1 = { width: 250, height: 200, zoomWidth: 500, img: "/images/hp_PC.PNG" };
    const prop2 = { width: 250, height: 200, zoomWidth: 200, img: "/images/hp_wc.PNG" };
    const prop3 = { width: 250, height: 200, zoomWidth: 500, img: "/images/hpenvy_1.PNG" };
    const prop4 = { width: 250, height: 200, zoomWidth: 500, img: "/images/hp_envy2.PNG" };

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

            <Container class1="main-hplaptop-wrapper py-5 home-wrapper-2">
                <div className="row">
                <div className="col-5">
                    <Link to={"CompareProduct/"}></Link>
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
                                    {/* <img src="/images/hp_pc.png" className='img-fluid' alt="" /> */}
                                </div></span>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mb-4">
                        {/* <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div> */}
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
                                {/* <img src="/images/hp_pc.png" className='img-fluid' alt="" /> */}
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
                                    <ReactImageZoom {...prop3} width= {600} height= {300} />
                                </div>
                                {/* <img src="/images/hp_pc.png" className='img-fluid' alt="" /> */}
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
                                {/* <img src="/images/hp_pc.png" className='img-fluid' alt="" /> */}
                            </div></span>
                         
                            {/* <div> */}
                            {/* <img src="" className='img-fluid' alt="" /> */}
                                {/* <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" /> */}
                            {/* </div> */}

                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
            <h2>CONCEALERS COMPARISON</h2>
            <div className="col-4">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Coverage</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/conc_coverage.png" className="img-fluid" alt="sunscreen" />
                    </div>
                </div>
            </div>

            <div className="col-4">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Packaging</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/conc_pack.png" className="img-fluid" alt="sunscreen" />
                    </div>
                </div>
            </div>

            {/* <div className="col-3">
                <div className="compare-product-card position-relative">
                    <div className="product-details">
                        <h5><b>Comparison:</b></h5>
                        <h4>Packaging</h4>        
                    </div>
                    <div className="product-card-image ">
                        <img src="images/conc_pack.png" className="img-fluid" alt="concealer" />
                    </div>
                </div>
            </div>   */}

            <div className="col-4">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Price</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/conc_price.png" className="img-fluid" alt="sunscreen" />
                    </div>
                </div>
            </div>  

            {/* <div className="col-3">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Texture</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/conc_texture.png" className="img-fluid" alt="sunscreen" />
                    </div>
                </div>
            </div> */}
        </div>
    </Container>
        </>
    )
}

export default CompareConcealer


// </Container> */}