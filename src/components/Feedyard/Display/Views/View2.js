import React, { Component } from 'react';
import TVbatcher from '../../../../assets/Pics/Pro-Control-Plus.png';


export default class View2 extends Component {
  render() {
    return (
      <div className="moreinfo-display">
        <h4 className="moreinfo-display-header">Pro-Control Plus<sup>&reg;</sup> Feed Batching System</h4>
        <li className="moreinfo-list">Manages individual macro ingredients in the production of rations</li>
        <li className="moreinfo-list">
          Improves the accuracy and speed of ration composition</li>
        <li className="moreinfo-list">Simple user interface, intuitive and multi-lingual</li>
        <img className="tv-batcher" src={TVbatcher} alt="tv batcher" width="600px" />
      </div>

    )
  }
}
