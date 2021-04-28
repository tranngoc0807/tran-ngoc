import { Component } from 'react';
import {CardImg,Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Nen from '../asset/img/nen.jpg';
class Details extends Component{
    render(){
        return(
            <div>
            <div className='container'>
                 <div className='row'>
                     <div className= 'col-xs-8col-sm-8col-md-8 col-lg-8 mt-5' >
                       <CardImg width="100px" src={Nen} className="rounded-top card-img-top">
                        </CardImg>
                      </div>
                     <div className= 'col-xs-4col-sm-4col-md-4 col-lg-4 mt-5' >
                     <div className="sticky-top" style={{top: '100px'}}>
                        <h1 className="mb-4">Push-up Jeans</h1>
                        <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                            <ul className="list-inline mb-2 mb-sm-0">
                            <li className="list-inline-item h4 font-weight-light mb-0">$65.00</li>
                            <li className="list-inline-item text-muted font-weight-light"> 
                                <del>$90.00</del>
                            </li>
                            </ul>
                            
                        </div>
                        
                        <p className="mb-4 text-muted">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                       
                            <ul className="list-unstyled">
                            <li><strong>Category:</strong> <a className="text-muted" href="#">Jeans</a></li>
                            <li><strong>Tags:</strong> <a className="text-muted" href="#">Leisure</a>, <a className="text-muted" href="#">Elegant</a></li>
                            </ul>
                            <Link to='/Cart'> <Button className='ml-3 col-lg-6' style={{background:'#007f49'}}>Add to card</Button></Link>
                        </div>
                     </div>
                 </div>
            </div>
            <div className="py-4 bg-secondary text-white mt-5">
                <div className="container">
                    <div className='row align-items-center'>
                    <div className="col-md-6 text-center text-md-left" >
                        <span>© 2021 Your company. All rights reserved.</span>
                    </div>
                            <div className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-right" >
                                123
                            </div>
                    </div>
                </div>
                 </div>
                 </div>
        )
    }
}
 export default Details