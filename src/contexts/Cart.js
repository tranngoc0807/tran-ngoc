import {Button} from 'reactstrap';
import React, {Component} from 'react';
import { Redirect, withRouter } from 'react-router'
class Cart extends Component{
    constructor(props) {
        super(props);
        this.state={
            fullname_invoice:'',
            emailaddress_invoice:'',
            street_invoice:'',
            city_invoice:'',
            zip_invoice:'',
            state_invoice:'',
            phonenumber_invoice:'',


        }
    }
    onHandleChange = (event) =>{
        var target= event.target;
        var name=target.name;
        var value=target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
       this.props.history.push("/buy")
    //    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('cart',JSON.stringify( this.state));
    // localStorage.setItem('cart1',this.state);
    }
    
    
    render(){
        return(
            <div className='container '>
                <div className='row'>
                    <h1 className='text-center mt-3'>Shopping cart <h6 className='mt-5'>Id commodo velit ullamco dolore non eiusmod deserunt.</h6></h1>
                     <form onSubmit={this.onSubmit} >
                            
                     <div className='col-xs-12col-sm-12col-md-12 col-lg-12 mt-3 '>
                    <div className="collapse show">
                        <h3 className="mb-4">Invoice address</h3>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="fullname_invoice" className="form-label">Full Name</label>
                                <input name="fullname_invoice" placeholder="Joe Black" id="fullname_invoice" type="text" className="form-control" value={this.state.fullname_invoice} onChange={this.onHandleChange}   />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label htmlFor="emailaddress_invoice" className="form-label" >Email Address</label>
                                    <input name="emailaddress_invoice" placeholder="joe.black@gmail.com" id="emailaddress_invoice" type="text" className="form-control"value={this.state.emailaddress_invoice} onChange={this.onHandleChange}   /></div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="street_invoice" className="form-label" >Street</label>
                                        <input name="street_invoice" placeholder="123 Main St." id="street_invoice" type="text" className="form-control"value={this.state.street_invoice}  onChange={this.onHandleChange}  />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="city_invoice" className="form-label">City</label>
                                            <input name="city_invoice" placeholder="City" id="city_invoice" type="text" className="form-control"value={this.state.city_invoice}   onChange={this.onHandleChange}  /></div>
                                            <div className="col-md-6 form-group"><label htmlFor="zip_invoice" className="form-label">ZIP</label>
                                            <input name="zip_invoice" placeholder="Postal code" id="zip_invoice" type="text" className="form-control"value={this.state.zip_invoice}  onChange={this.onHandleChange}   /></div>
                                            <div className="col-md-6 form-group"><label htmlFor="state_invoice" className="form-label">State</label>
                                            <input name="state_invoice" placeholder="State" id="state_invoice" type="text" className="form-control"value={this.state.state_invoice}  onChange={this.onHandleChange}   /></div>
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="phonenumber_invoice" className="form-label" >Phone Number</label>
                                                <input name="phonenumber_invoice" placeholder="Phone Number" id="phonenumber_invoice" type="text" className="form-control"value={this.state.phonenumber_invoice}   onChange={this.onHandleChange}    /></div>
                                                <div className="col-12 mt-3 form-group">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" id="show-shipping-address" type="checkbox" name="show-shipping-address" />
                                                        <label className="custom-control-label align-middle" htmlFor="show-shipping-address">Use a different shipping address</label>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        <Button className='ml-5 col-lg-6' style={{background:'#007f49'}} type='submit' >Mua Hàng</Button>

                  </div>
                  </form>    
                  <div className='col-xs-12col-sm-12col-md-12 col-lg-12 mt-3' >
                      <div className='container'>
                           <div className='row text-center'>
                              
                           </div>
                      </div>
                  </div>
                </div>   
            </div>
        )
    }
    
}
export default withRouter(Cart)
