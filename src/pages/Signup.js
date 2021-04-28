import { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import "bootstrap/dist/css/bootstrap.min.css";
import singin from '../asset/img/singin.JPG';
class Signup extends Component{
 render(){
     return(
        <div className="container mt-5">
          <div className="row">
            <div className= 'col-xs-5col-sm-5col-md-5 col-lg-5'>
            <div className="card shadow">
                    {/* Card body */}
                    <div className="card-body p-6">
                      <div className="mb-4">
                        <a href="../App.js"><img src={singin} className="mb-4" alt="" /></a>
                        <h1 className="mb-1 font-weight-bold">Sign up</h1>
                        <span>Already have an account?
                        <Link to="/Signin">Sign in</Link></span>
                      </div>
                      {/* Form */}
                      <form>
                        {/* Username */}
                        <div className="form-group">
                          <label htmlFor="username" className="form-label">User Name</label>
                          <input type="text" id="username" className="form-control" name="username" placeholder="User Name" required />
                        </div>
                        {/* Email */}
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" id="email" className="form-control" name="email" placeholder="Email address here" required />
                        </div>
                        {/* Password */}
                        <div className="form-group">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" id="password" className="form-control" name="password" placeholder="**************" required />
                        </div>
                        {/* Checkbox */}
                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="agreeCheck" />
                            <label className="custom-control-label" htmlFor="agreeCheck"><span>I agree to the <a href="#!">Terms of
                                  Service </a>and
                                <a href="#!">Privacy Policy.</a></span></label>
                          </div>
                        </div>
                        <div>
                          {/* Button */}
                          <button type="submit" className="btn btn-primary btn-block">
                            Create Free Account
                          </button>
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
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

            </div>
          </div>
     )

 }
}
export default Signup;