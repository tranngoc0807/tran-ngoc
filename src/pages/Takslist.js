import { Component } from "react";

class Tasklist extends Component {
    

    render(){
        console.log(">>>>",JSON.parse(localStorage.getItem("cart")) )
        const data = JSON.parse(localStorage.getItem("cart"))

        return (
 
                        <tr>
                            <td>{ data.fullname_invoice}</td>
                            <td>{data.phonenumber_invoice}</td>
                        </tr>
        
            );
    }
   
}

export default Tasklist;
