import  { Component } from "react";
import Tasklist from './Takslist';
class Buy extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cart: [],
  //   };
  // }
 
  // onSubmit = (data) =>{
  //      var { cart}=this.state;
  //      cart.push(data);
  //      this.setState({
  //       cart:cart
  //      });
  // }

  render() {
      console.log(">>>>",JSON.parse(localStorage.getItem("cart")) )
    const data = JSON.parse(localStorage.getItem("cart"))
    return (    
      <div className="container">
        <div className="row text-center mt-5">
          <span> Danh Sách khách hàng</span>
          <form>
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th className="text-center">Tên</th>
                    <th className="text-center">SĐT</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <input type="text" className="form-control" />
                    </td>
                    <td></td>
                </tr>
                <Tasklist />
                </tbody>
            </table>
          </form>
         
          <div className="py-4 bg-secondary text-white mt-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-left">
                  <span>© 2021 Your company. All rights reserved.</span>
                </div>
                <div className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-right">
                  123
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Cart onSubmit={this.onSubmit}/> */}
      </div>

    );
  }
}
export default Buy;
