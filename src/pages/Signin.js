import { Component } from 'react'; 
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import singin from '../asset/img/singin.JPG';
class Signin extends Component{
 render(){
     return(
      <div className="container mt-5 ">
      <div className="row">
        <div className= 'col-xs-5col-sm-5col-md-5 col-lg-5'>
        <div className="container mt-5">
        <div className="card shadow ">
          {/* Card body */}
          <div className="card-body p-6">
            <div className="mb-4">
              <a href="../App.js"><img src={singin} className="mb-4" alt="" /></a>
              <h1 className="mb-1 font-weight-bold">Sign in</h1>
              <span>Don’t have an account? <Link to="/Signup">Sign up</Link></span>
            </div>
            {/* Form */}
            <form>
              {/* Username */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Username or email</label>
                <input type="email" id="email" className="form-control" name="email" placeholder="Email address here" required />
              </div>
              {/* Password */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" className="form-control" name="password" placeholder="**************" required />
              </div>
              {/* Checkbox */}
              <div className="d-lg-flex justify-content-between align-items-center mb-4">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="rememberme" />
                  <label className="custom-control-label " htmlFor="rememberme">Remember me</label>
                </div>
              </div>
              <div>
                {/* Button */}
                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
              </div>
              <hr className="my-4" />
              <div className="mt-4 text-center">
                {/*Facebook*/}
                <a href="#!" className="btn-social btn-social-outline btn-facebook">
                  <i className="fab fa-facebook" />
                </a>
                {/*Twitter*/}
                <a href="#!" className="btn-social btn-social-outline btn-twitter">
                  <i className="fab fa-twitter" />
                </a>
                {/*LinkedIn*/}
                <a href="#!" className="btn-social btn-social-outline btn-linkedin">
                  <i className="fab fa-linkedin" />
                </a>
                {/*GitHub*/}
                <a href="#!" className="btn-social btn-social-outline btn-github">
                  <i className="fab fa-github" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
     )

 }
}
export default Signin;
