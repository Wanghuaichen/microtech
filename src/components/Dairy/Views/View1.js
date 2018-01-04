import React, { Component } from 'react';
import TVScreen from '../../../assets/Photos/Mixer/TvScreen.png';

export default class View1 extends Component {
    render() {
        return (
            <div className="moreinfo-display">
                <h4 className="moreinfo-display-header">  Pro-Control Plus® Feed Batching System</h4>
                <p className="view2-text">Pro-Control® Plus Batching System is a computerized system that improves the accuracy and speed of diet composition.  Each system is custom configured to best fit your feed manufacturing process. Ensure optimal operational efficiencies by monitoring and controlling by remote access via any mobile device.</p>
                <div className="list-flex">
                    <div className="list-left">
                        <li className="moreinfo-list">Manages individual macro ingredients in the production of rations.</li>
                        <li className="moreinfo-list">
                            Flexibility to customize diets to the nutritionist’s specifications</li>
                        <li className="moreinfo-list">
                            Improves the accuracy and speed of ration composition</li>
                        <li className="moreinfo-list">Liquids, micro ingredients and dry ingredients auto-dispense from overhead bins into mixers</li>
                        <li className="moreinfo-list">Easily identifies variances and how to minimize them</li>
                        <li className="moreinfo-list">Simple user interface, intuitive and multi-lingual</li>
                    </div>
                    <img className="tv-screen" src={TVScreen} alt="slide show" height="275px" />
                </div>
            </div>
        )
    }
}
