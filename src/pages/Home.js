import React, { Component } from 'react';
import img1 from './images/chicago.jpg';


class home extends Component {
    render() {
        return (
            <div>
            
            <div className="img1">
            <img src={img1} alt="chicago"/><br />
            <img src='./images/chicago.jpg' alt="Chicago" /><br /><br /><hr />

            </div>
</div>  
               
          
        );
    }
}
export default home;

