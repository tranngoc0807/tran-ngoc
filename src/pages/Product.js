import { Component } from 'react';  
import { Link } from 'react-router-dom';
import Nu from '../asset/img/nu/nu.JPG';
import Nu2 from '../asset/img/nu/nu2.JPG';
import Nu3 from '../asset/img/nu/nu3.JPG';
import Nu4 from '../asset/img/nu/nu4.JPG';
import Nu5 from '../asset/img/nu/nu5.JPG';
import Nu6 from '../asset/img/nu/nu6.JPG';
import Nu7 from '../asset/img/nu/nu7.JPG';
import Nu8 from '../asset/img/nu/nu8.JPG';
import Nu9 from '../asset/img/nu/nu9.JPG';
import Nen from "../asset/img/nen.jpg";
import Nen1 from "../asset/img/nen1.jpg";
import Nen2 from "../asset/img/nen1.jpg";
import '../asset/css/style.css';  
import {
   Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button} from 'reactstrap';
class Product extends Component {
 constructor(props){
   super(props);
   this.state={
     products:[
      {
        id: 1,
        imageUrl: Nu,
        last_name: "Orrom",
        email: "morrom0@furl.net",
        gender: "Genderqueer",
        rating: 3
      },
      {
        id: 2,
        last_name: "Fouldes",
        imageUrl: Nu2,
        email: "jfouldes1@biblegateway.com",
        gender: "Male",
        rating: 2
      },
      {
        id: 3,
        last_name: "Streatfeild",
        imageUrl: Nu3,
        email: "astreatfeild2@ask.com",
        gender: "Agender",
        rating: 3
      },
      {
        id: 4,
        last_name: "Priter",
        imageUrl: Nu4,
        email: "epriter3@mapy.cz",
        gender: "Polygender",
        rating: 4
      },
      {
        id: 5,
        last_name: "Faill",
        imageUrl: Nu5,
        email: "bfaill4@bbb.org",
        gender: "Polygender",
        rating: 4
      },
      {
        id: 6,
        last_name: "Bassford",
        imageUrl: Nu6,
        email: "cbassford5@microsoft.com",
        gender: "Genderfluid",
        rating: 1
      },
      {
        id: 7,
        last_name: "Lucken",
        imageUrl: Nu7,  
        email: "alucken6@thetimes.co.uk",
        gender: "Genderfluid",
        rating: 2

      },
      {
        id: 8,
        last_name: "Broose",
        imageUrl: Nu8,
        email: "vbroose7@businesswire.com",
        gender: "Polygender",
        rating: 3
      },
      {
        id: 9,
        last_name: "Frake",
        imageUrl: Nu9,
        email: "tfrake8@japanpost.jp",
        gender: "Female",
        rating: 1
      }
         
     ]
   }
 }
    render() {
      const { products } = this.state;
      return (
        <div className='wapper '>
           
           <div className="container">
        <div className="row ">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={10000}>
                <img src={Nen} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval={2000}>
                <img src={Nen1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Nen2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    <h2 className="text-danger ml-5">Nu </h2>
    <div className='container bg-light'>
      <div className='row'>
      <div className= 'col-xs-3col-sm-3col-md-3 col-lg-3' >
          <div className="expand-lg collapse show" id="brandFilterMenu">
            <h5 className="sidebar-heading d-none d-lg-block mt-5">Brands </h5>
            <form className="mt-4 mt-lg-0" action="#"> 
              <div className="form-group mb-1">
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" id="brand0" type="checkbox" name="clothes-brand" defaultChecked />
                  <label className="custom-control-label" htmlFor="brand0">Calvin Klein <small>(18)</small></label>
                </div>
              </div>
              <div className="form-group mb-1">
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" id="brand1" type="checkbox" name="clothes-brand" defaultChecked />
                  <label className="custom-control-label" htmlFor="brand1">Levi Strauss <small>(30)</small></label>
                </div>
              </div>
              <div className="form-group mb-1">
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" id="brand2" type="checkbox" name="clothes-brand" />
                  <label className="custom-control-label" htmlFor="brand2">Hugo Boss <small>(120)</small></label>
                </div>
              </div>
              <div className="form-group mb-1">
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" id="brand3" type="checkbox" name="clothes-brand" />
                  <label className="custom-control-label" htmlFor="brand3">Tomi Hilfiger <small>(70)</small></label>
                </div>
              </div>
              <div className="form-group mb-1">
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" id="brand4" type="checkbox" name="clothes-brand" />
                  <label className="custom-control-label" htmlFor="brand4">Tom Ford  <small>(110)</small></label>
                </div>
              </div>
            </form>
          </div>
          <hr></hr>
          12       
        </div>
        <div className= 'col-xs-9col-sm-9col-md-9 col-lg-9'>
        <Row>
          {products.map((product) => (
            <Col sm="3">
              <Card>
                <Link to='/Details'><CardImg width="100%" src={product.imageUrl} className="rounded-top card-img-top">
                </CardImg></Link>
                <CardBody>
                  <ul className='rating'>
                    {this.showrating(product.rating)}
                  </ul>
                  <CardTitle tag="h5">{product.last_name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {product.email}
                  </CardSubtitle>
                  <CardText>{product.gender}</CardText>
                 <Link to='/Cart'><Button style={{background:'#007f49'}}>Add to card</Button></Link> 
                </CardBody>
              </Card>
            </Col>
            
          ))}
        </Row>
        </div>
      </div>
    </div>
      
</div>
        </div>
      )
    }
    showrating(rating){
      var result=[];
      for(var i=1;i<=rating;i++){
        result.push(  <i className="fa fa-star"></i>);
      }
      for( var j=1;j<=(5-rating);j++){
        result.push(  <i className="fa fa-star-o"></i>);
      }
        return result;
    }
  }
  export default Product;