import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import Container from '../components/Container';
import Meta from '../components/Meta';
import ReactImageZoom from 'react-image-zoom';

const CompareProduct = (/*routepsrams*/) => {
    // const prop1 = { width: 450, height: 300, zoomWidth: 400, img: "/images/conc_coverage.PNG" };

  return (
   <>
    <Meta title="Compare Products" />
    <BreadCrumb title="Compare Products" />

    <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
            <h2>CONCEALERS COMPARISON</h2>
            <br></br>
            <h5>Brands: Maybelline & Tart</h5>
            <div className="col-6">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Coverage</h5>
                    </div>  
                    {/* <div className="product-card-image" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '500px',
                        height: '300px',}}>
                        <div>
                            <ReactImageZoom {...prop1} width= {280} height= {280}/>
                        </div>
                    </div> */}

                    <div className="product-card-image ">
                        <img src="images/conc_coverage.png" className="img-fluid" alt="concealer" width= {500} height= {400}/>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Packaging</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/conc_pack.png" className="img-fluid" alt="concealer" width= {500} height= {400}/>
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
        </div>
    </Container>

    <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-6">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Price</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/conc_price.png" className="img-fluid" alt="concealer" width= {500} height= {400} />
                    </div>
                </div>
            </div>  

            <div className="col-6">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Texture</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/conc_texture.png" className="img-fluid" alt="concealer" width= {500} height= {400} />
                    </div>
                </div>
            </div>
        </div>
    </Container>

    <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
            <h2>LAPTOPS COMPARISON</h2>
            <br></br>
            <h5>Brands: Macbook, HP Envy & Lenovo</h5>
            <div className="col-6">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Battery</h5>
                    </div>  
                    {/* <div className="product-card-image" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '500px',
                        height: '300px',}}>
                        <div>
                            <ReactImageZoom {...prop1} width= {280} height= {280}/>
                        </div>
                    </div> */}

                    <div className="product-card-image ">
                        <img src="images/laptops_battery.png" className="img-fluid" alt="concealer" width= {500} height= {400}/>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Gaming</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/laptops_gaming.png" className="img-fluid" alt="concealer" width= {500} height= {400}/>
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
        </div>
    </Container>

    <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-6">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Price</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/laptops_price.png" className="img-fluid" alt="concealer" width= {500} height= {400} />
                    </div>
                </div>
            </div>  

            <div className="col-6">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Memory</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/laptops_memory.png" className="img-fluid" alt="concealer" width= {500} height= {400} />
                    </div>
                </div>
            </div>
        </div>
    </Container>

    <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
            <h2>SUNSCREENS COMPARISON</h2>
            <br></br>
            <h5>Brands: Bioderma, CeraVe & Neutrogena</h5>
            <div className="col-6">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Sun Protection Factor</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/sunscreen_SPF.png" className="img-fluid" alt="concealer" width= {500} height= {400}/>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Water Resistance</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/sunscreen_WR.png" className="img-fluid" alt="concealer" width= {500} height= {400}/>
                    </div>
                </div>
            </div>
        </div>
    </Container>

    <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-6">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Price</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/sunscreen_price.png" className="img-fluid" alt="concealer" width= {500} height= {400} />
                    </div>
                </div>
            </div>  

            <div className="col-6">
                <div className="compare-product-card position-relative">
                    <div className='product-detail'>
                        <h5><b>Comparison:</b></h5>
                        <h5>Texture</h5>
                    </div>  
                    <div className="product-card-image ">
                        <img src="images/sunscreen_texture.png" className="img-fluid" alt="concealer" width= {500} height= {400} />
                    </div>
                </div>
            </div>
        </div>
    </Container>

    {/* <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
        <h2>LAPTOPS COMPARISON</h2>
            <div className="col-3">
                <div className="compare-product-card position-relative">
                        <div className="product-card-image ">
                            <img src="images/laptops_battery.png" className="img-fluid" alt="sunscreen" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">
                            </h5>
                                <div>
                                      <div className='product-detail'>
                                          <h5>Brands:</h5>
                                          <p>Macbook <br/> HP Envy <br/> Lenovo</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Type:</h5>
                                          <p>Thinkpad<br/>Notebook</p>
                                      </div> 
                                      <div className='product-detail'>
                                          <h5>Comparison:</h5>
                                          <p>Battery</p>
                                      </div>      
                                </div>
                        </div>
                </div>
                </div>

                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <div className="product-card-image ">
                            <img src="images/laptops_Gaming.png" className="img-fluid" alt="concealer" />
                        </div>
                        <div className="compare-product-details">
                        <h5 className="title">
                </h5>
                <div>
                                      <div className='product-detail'>
                                          <h5>Brands:</h5>
                                          <p>Macbook <br/> HP Envy <br/> Lenovo</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Type:</h5>
                                          <p>Thinkpad<br/>Notebook</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Comparison:</h5>
                                          <p>Gaming</p>
                                      </div>
                    
                </div>
                        </div>
                    </div>
                </div>  

                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <div className="product-card-image ">
                            <img src="images/laptops_price.png" className="img-fluid" alt="concealer" />
                        </div>
                        <div className="compare-product-details">
                        <h5 className="title">
                </h5>
                <div>
                                      <div className='product-detail'>
                                          <h5>Brands:</h5>
                                          <p>Macbook <br/> HP Envy <br/> Lenovo</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Type:</h5>
                                          <p>Thinkpad<br/>Notebook</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Comparison:</h5>
                                          <p>Pricing</p>
                                      </div>
                    
                </div>
                        </div>
                    </div>
                </div>   

                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <div className="product-card-image ">
                            <img src="images/laptops_memory.png" className="img-fluid" alt="concealer" />
                        </div>
                        <div className="compare-product-details">
                        <h5 className="title">
                </h5>
                <div>
                                      <div className='product-detail'>
                                          <h5>Brands:</h5>
                                          <p>Macbook <br/> HP Envy <br/> Lenovo</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Type:</h5>
                                          <p>Thinkpad<br/>Notebook</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Comparison:</h5>
                                          <p>Memory</p>
                                      </div>
                </div>
                        </div>
                    </div>
                </div> 

        </div>
    </Container> */}

    {/* <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
        <h2>SUNSCREENS COMPARISON</h2>
            <div className="col-3">
                <div className="compare-product-card position-relative">
                        <div className="product-card-image ">
                            <img src="images/sunscreen_SPF.png" className="img-fluid" alt="sunscreen" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">
                            Sunscreens SPF(Sun Protection Factor) comparison for Bioderma, Neutrogena and CeraVe
                            </h5>
                                <div>
                                      <div className='product-detail'>
                                          <h5>Brands:</h5>
                                          <p>Bioderma <br/> Neutrogena <br/> CeraVe</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Type:</h5>
                                          <p>Sunscreen</p>
                                      </div>  
                                      <div className='product-detail'>
                                          <h5>Comparison:</h5>
                                          <p>Sun Protection <br/>Factor</p>
                                      </div>       
                                </div>
                        </div>
                </div>
                </div>

                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <div className="product-card-image ">
                            <img src="images/sunscreen_WR.png" className="img-fluid" alt="concealer" />
                        </div>
                        <div className="compare-product-details">
                        <h5 className="title">
                        Sunscreens Water Resistance comparison for Bioderma, Neutrogena and CeraVe
                </h5>
                <div>
                                      <div className='product-detail'>
                                          <h5>Brands:</h5>
                                          <p>Bioderma <br/> Neutrogena <br/> CeraVe</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Type:</h5>
                                          <p>Sunscreen</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Comparison:</h5>
                                          <p>Water Resistance</p>
                                      </div>    
                    
                </div>
                        </div>
                    </div>
                </div>  

                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <div className="product-card-image ">
                            <img src="images/sunscreen_price.png" className="img-fluid" alt="concealer" />
                        </div>
                        <div className="compare-product-details">
                        <h5 className="title">
                        Sunscreens Pricing comparison for Bioderma, Neutrogena and CeraVe
                </h5>
                <div>
                                      <div className='product-detail'>
                                          <h5>Brands:</h5>
                                          <p>Bioderma <br/> Neutrogena <br/> CeraVe</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Type:</h5>
                                          <p>Sunscreen</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Comparison:</h5>
                                          <p>Pricing</p>
                                      </div>    
                    
                </div>
                        </div>
                    </div>
                </div>   

                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <div className="product-card-image ">
                            <img src="images/sunscreen_texture.png" className="img-fluid" alt="concealer" />
                        </div>
                        <div className="compare-product-details">
                        <h5 className="title">
                        Sunscreens Texturing comparison for Bioderma, Neutrogena and CeraVe
                </h5>
                <div>
                                      <div className='product-detail'>
                                          <h5>Brands:</h5>
                                          <p>Bioderma <br/> Neutrogena <br/> CeraVe</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Type:</h5>
                                          <p>Sunscreen</p>
                                      </div>
                                      <div className='product-detail'>
                                          <h5>Comparison:</h5>
                                          <p>Texturing</p>
                                      </div>    
                </div>
                        </div>
                    </div>
                </div> 

        </div>
    </Container> */}
   
   </>
  )
}

export default CompareProduct


