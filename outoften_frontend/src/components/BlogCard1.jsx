import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <>
        
          <div className="blog-card">
              <div className="card-image">
                  <img src="images/blogg.jpg" className='img-fluid w-100' alt="blog" />
              </div>
              <div className="blog-content">
                  <p className='date'>1 Dec 2022</p>
                  <h5 className="title">
                      Reviews on various products including mobile phones, concealers, foundations, sunscreens, laptops, macbooks and thinkpads.
                  </h5>
                  <p className="desc">
                    As the name suggests, a product review blog is where you’ll find the reviews of various products.
                    The reviews can be on several categories such as technology, fitness, lifestyle, etc, or on a single topic such as web hosting, email marketing, etc.
                  </p>
                  <Link to="/blog/:id" className='button'>Read More</Link>
              </div>
          </div>

    </>
  )
}

export default BlogCard;