import { Component } from 'react';  
import "bootstrap/dist/css/bootstrap.min.css";
import '../asset/css/style.css';
import nen from '../asset/img/nen.jpg';
import { Link } from 'react-router-dom';
class Menu extends Component{

    render(){
        return(
            <div className="bg">
                        <div className="container">
            {/* Hero Section */}
            <div className="row align-items-center no-gutters">
                <div className="col-xl-5 col-lg-6 col-md-12">
                <div className="py-5 py-lg-0">
                    <h2 className="text-white display-4 font-weight-bold">Welcome to Geeks UI
                    Learning Application
                    </h2>
                    <p className="text-white-50 mb-4 lead">
                    Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.
                    </p>
                    <a href="/" className="btn btn-success mb-4">Browse Courses</a>
                    <Link to="/Signin" className="btn btn-info ml-1 mb-4">Are You Instructor? </Link>
                </div>
                </div>
                <div class=" col-xl-7 col-lg-6 col-md-12 text-lg-right text-center">
                 <img src={nen} alt="" class="img-fluid"/>
            </div>
            </div>
            </div>

            </div>
        )
    }
}
export default Menu;