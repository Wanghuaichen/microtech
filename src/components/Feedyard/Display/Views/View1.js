import React, { Component } from 'react';
import DrugTrac from '../../../../assets/Pics/DrugTrac.png';

export default class View1 extends Component {
    render() {
        return (
            <div className="moreinfo-display">
                <h4 className="moreinfo-display-header">DRUG-TRAC<sup>&reg;</sup> ANIMAL HEALTH SYSTEM</h4>
                <div className="list-flex">
                    <div className="list-left">
                        <li className="moreinfo-list">Flexible, interactive health reporting on individual or lot level</li>
                        <li className="moreinfo-list">
                            Safe to Ship alarm with alternative safe treatment protocols to expedite shipping</li>
                        <li className="moreinfo-list">
                            Integrated into cattle inventory</li>
                        <li className="moreinfo-list">Interactive chute-side management on individual animals</li>
                        <img className="tv-screen" src={DrugTrac} alt="DrugTrac" height="400px" />
                    </div>
                </div>
            </div>
        )
    }
}
