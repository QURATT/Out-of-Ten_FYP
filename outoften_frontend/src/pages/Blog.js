import React from 'react';
import BlogCard from '../components/BlogCard';
import BlogCard2 from '../components/BlogCard2';
import BlogCard3 from '../components/BlogCard3';
import BlogCard4 from '../components/BlogCard4';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';

const Blog = () => {
  return (
    <>
    <Meta title="Blogs" />
    <BreadCrumb title="Blogs" />
    <Container class1="blog-wrapper home-wrapper-2 py-5">
    <div className="row">
                <div className="col-3">
                <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                        Find By Categories
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-6 mb-3">
                        <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard2/>
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard3/>
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard4/>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    
      

    </>
  )
}

export default Blog