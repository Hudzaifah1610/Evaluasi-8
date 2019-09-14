import React from 'react';
import '../App.css'

class Headers extends React.Component {
    state = {};
    render() { 
        return ( 
            <div className="medium">
                <p className="title-medium"><b>Medium</b></p>
                <p className="title-medi">The Website of The World's Experts</p>
            </div>
         );
    }
}
 
export default Headers;