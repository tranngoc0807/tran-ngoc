import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div >
          <div className="container">
              <div className="row">
                  <div className="col-sm-6 mb-5 mb-sm-0 mt-3">
                  <div className="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center"><img className="card-img img-scale" src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/category-women.jpg" alt="Card image" />
                    <div className="card-img-overlay d-flex align-items-center"> 
                      <div className="w-100 py-3">
                      <Link to="/Product" className="btn btn-info ml-1 mb-4">Women </Link>
                      </div>
                    </div>
                  </div>
                  </div>
                <div className="col-sm-6 mb-5 mb-sm-0 mt-3">
                  <div className="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center"><img className="card-img img-scale" src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/category-men.jpg" alt="Card image" />
                    <div className="card-img-overlay d-flex align-items-center"> 
                      <div className="w-100 py-3">
                      <Link to="/Product" className="btn btn-info ml-1 mb-4">Men </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div> 
     </div>
    );
  }
}
export default Home;