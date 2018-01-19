import React, { Component } from 'react';

// import Laptop from '../../../../assets/Pics/Read-N-Feed.png';
import Laptop from '../../../../assets/Pics/RNFBunkReader.webp';


export default class View4 extends Component {
    render() {
        return (
            <div className="moreinfo-display">
                <h4 className="moreinfo-display-header">  READ-N-FEED<sup>&reg;</sup> BUNK READING SYSTEM</h4>
                <div className="list-flex">
                    <div className="list-left">
                        <li className="moreinfo-list">Accurate feed information for enhanced bunk management</li>
                        <li className="moreinfo-list">
                            Integration into cattle inventory</li>
                        <li className="moreinfo-list">
                            Web-based reporting capability for information sharing</li>
                        <img className="laptop" src={Laptop} alt="slide show" height="450px" />
                    </div>
                </div>
            </div>
        )
    }
}

