import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Dialog from 'material-ui/Dialog';


import StockerCover from '../../assets/Pics/Stocker_cover.png';
import Inventory from '../../assets/Pics/inventory.jpg';
import CallFeed from '../../assets/Pics/callfeed.jpg';
import ReportFeed from '../../assets/Pics/recordfeed.jpg';
import BE from '../../assets/Pics/be.jpg';
import Allocations from '../../assets/Pics/allocations.jpg';
import Charges from '../../assets/Pics/charges.jpg';
import RPT from '../../assets/Pics/rptgroupsummary.jpg';
import OpSum from '../../assets/Pics/rptoperationsummary.jpg';
import GP from '../../assets/Pics/groupprocessing.jpg';
import Treatments from '../../assets/Pics/treatment1.jpg';
import StockerVideo from '../../assets/Videos/Stocker1Final.mp4';


export default class Stocker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      open: false
    }
    this.handleTab0 = this.handleTab0.bind(this);
    this.handleTab1 = this.handleTab1.bind(this);
    this.handleTab2 = this.handleTab2.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this)
  };

  handleTab0 = () => {
    this.setState({ tab: 0 })
  }

  handleTab1 = () => {
    this.setState({ tab: 1 })
  }

  handleTab2 = () => {
    this.setState({ tab: 2 })
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };



  render() {
    return (
      <section className="stocker-container">
        <Header />

        <main className="stocker-main">

          <section className="stocker-top">
            <div className="transparent-stocker">
              <h5 className="stocker-cover-title-main">Stocker1™</h5>
              <h6>Management System for Stockers and Backgrounders.</h6>
              <p className="stocker-para">Stocker1™ is an Internet based system allowing stocker and backgrounding operations to access it from any location with internet capabilities. One look and you will know it was designed in the field with close interaction between stocker and backgrounder operators.</p>

              <Dialog
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                contentStyle={{ maxWidth: 850 }}
              >
                <video width="800px" src={StockerVideo} id="myvideo" autoplay="autoplay" controls />
              </Dialog>

              <div className="stocker-watch-video" onClick={this.handleOpen}>WATCH VIDEO</div>

            </div>
            <img className="stocker-cover" src={StockerCover} alt="Stocker Cover" />
          </section>

          <section className="stocker-nav">
            <section className="stocker-nav-container">
              <div onClick={() => this.handleTab0()} className={this.state.tab === 0 ? "stocker-nav-box-active" : "stocker-nav-box"}>EASY TO USE</div>
              <div onClick={() => this.handleTab1()} className={this.state.tab === 1 ? "stocker-nav-box-active" : "stocker-nav-box"}>FULL FEATURED</div>
              <div onClick={() => this.handleTab2()} className={this.state.tab === 2 ? "stocker-nav-box-active" : "stocker-nav-box"}>INTUITIVE</div>

            </section>

            {this.state.tab === 0 && <div className="stocker-text">
              <h6 className="stocker-nav-header">Easy to Use</h6>
              <p className="stocker-nav-para">Stocker1™ allows you to easily record the unique activities that occur on stocker and backgrounding operations. Such activities include numerous moves, merging groups together, and splitting groups up, with the system rolling the costs forward so a current break-even is known.</p>
              <p className="stocker-nav-para">The goal of Stocker1™ is to allow the operator to simply enter information on their cattle and then see all cumulative costs and the current break-even on a set of cattle at any time, allowing for better marketing decisions.</p>
              <p className="stocker-nav-para">With Stocker1™, cattle inventories can be viewed on a group or location basis. From the list of groups or locations, the details for each can be drilled down on quickly, viewing placement or shipment information, current weights, and current break-evens. Reporting is also available, from summary to detail reports.</p>
            </div>}

            {this.state.tab === 1 && <div className="stocker-text">
              <h6 className="stocker-nav-header2">FULL FEATURED</h6>
              <p className="stocker-nav-para">Feeding, processing and treatment events are captured with Stocker1 as well. You can call feed (optional) and record the feed fed to any pen or pasture location where feeding takes place. Processing and treatment details are entered through the Health section of Stocker1. Protocols can be setup for each processing or treatment program to list details for the given event, applying the products and services, and capturing the costs and prices charged out for the items.</p>
            </div>}

            {this.state.tab === 2 && <div className="stocker-text">
              <h6 className="stocker-nav-header3">INTUITIVE</h6>
              <p className="stocker-nav-para">Other expenses, some of which are often overlooked, can be setup to record automatically for you through the allocation system. Yardage, pasture, mileage, and other expenses can be setup for each location or even by individual group. The system will automatically apply these costs any time cattle are in the location, saving time entering data each day. One-time expenses, such as dropping in a bale of hay, or delivering salt or mineral can also be recorded. The goal of the system is to capture all costs.</p>

              <p className="stocker-nav-para">For more information, Contact your local Micro Technologies Representative or
                <Link to="/contact" className="stocker-email">
                  email us.
                </Link></p>
            </div>}


          </section>

          <section className="stocker-section">
            <div className="stocker-info">
              <h3 className="stocker-header">System Features</h3>
              <h6 className="stocker-subheader">Cattle Inventories</h6>
              <p className="stocker-paragraph">The Inventory screen shows the inventory by Group, by Location, or by your Closed Groups (sold cattle). Users can view the overview for each of the groups or locations and then and then drill down thru all of the transactions for each. Current and Closed group inventory summaries can be exported for offline use.</p>
            </div>
            <img className="stocker-capture" src={Inventory} alt="system features screen capture" width="690px" />
          </section>

          <section className="stocker-section-white">
            <img className="stocker-capture-left" src={BE} alt="break even details" width="405px" />
            <div className="stocker-info">
              <h6 className="stocker-subheader">Current Break-Even</h6>
              <p className="stocker-paragraph-two graytext">One of the key features of the system is that it allows the user to see the current break-even on any set of cattle at any given time. To see the details that are utilized in calculating the break-even, click on the break-even number in green on right side of the inventory table. The break-even is also displayed on the group summary report.</p>
              <p className="stocker-paragraph graytext">The breakeven is shown for the group based on Per Head, Per CWT, COG D.I. (Cost of Gain, Deads In), and COG D.O. (Cost of Gain, Deads Out).</p>
            </div>
          </section>

          <section className="stocker-section">
            <div className="stocker-info">
              <h3 className="stocker-header">Feed</h3>
              <h6 className="stocker-subheader">Calling Feed</h6>
              <p className="stocker-paragraph">The Call Feed option allows you to Record your feed calls for each day, for each location. The system will allow the user to select the Feed Call as the last amount fed, or allow the user to enter new values for each location. The rations can be changed at any time and will default to the last ration fed to that location.</p>
            </div>
            <img className="stocker-capture" src={CallFeed} alt="system features screen capture" width="690px" />
          </section>

          <section className="line-stocker-box">
            <center><div className="line-stocker"></div></center>
          </section>

          <section className="stocker-section">
            <div className="stocker-info">
              <h6 className="stocker-subheader">Recording Feed</h6>
              <p className="stocker-paragraph-two">Stocker1™ also allows the user to record the amount of feed fed to a location as well as what ration was fed. The system will show the Head Fed based on the current head in the location and the Feed Call from the days call. The amount fed can be entered directly based on actual feed fed, or be populated based on the feed call.</p>
              <p className="stocker-paragraph-three">Users are not restricted to a single ration for a location for the day. Additional rations may be fed to a location such as stepping up with a starter ration in the morning and grower ration for the afternoon feeding.</p>
            </div>
            <img className="stocker-capture" src={Charges} alt="system features screen capture" width="690px" />
          </section>

          <section className="stocker-section-white">
            <img className="stocker-capture-left" src={GP} alt="break even details" width="485px" />
            <div className="stocker-info">
              <h3 className="stocker-header">Processing and Treatments</h3>
              <h6 className="stocker-subheader">Group Processing</h6>
              <p className="stocker-paragraph-two graytext">Recording the processing items and procedures completed is easily done thru the Group Processing section. Pre-defined protocols organize the typical items and procedures so they are easily selected for a group. However, if changes need to be made for a group, the system has the flexibility to allow changes without changing the standard protocol.</p>
            </div>
          </section>

          <section className="line-stocker-box-white">
            <center><div className="line-stocker-white"></div></center>
          </section>

          <section className="stocker-section-white">
            <img className="stocker-capture-left" src={Treatments} alt="break even details" width="690px" />
            <div className="stocker-info">
              <h6 className="stocker-subheader">Individual Treatments</h6>
              <p className="stocker-paragraph-two individualtext graytext">Individual Treatments can be entered by selecting the animals tag number and color. Once selected it will pull up that calf’s Arrival Date, Buyer and Origin, previous treatment history, Estimated Current Weight and the Expected ADG. You then can select the method by which you treated, select protocol and enter any treatment notes such as temp or visual appearance.</p>
            </div>
          </section>

          <section className="stocker-section">
            <div className="stocker-info">
              <h3 className="stocker-header">Allocations and Other Expenses</h3>
              <h6 className="stocker-subheader">Allocations</h6>
              <p className="stocker-paragraph">In order to track all expenses that could be applied to a set of cattle, the system allows for the allocation of expenses to a Location or to a Group. These can be setup with a type of Per Day, Per Head Day, and Per Pound of Gain. The allocations can be used for those items that occur on a daily basis such as yardage or pasture rent. Having the system automatically apply these costs for you saves time and ensures that all expenses are accounted for.</p>
            </div>
            <img className="stocker-capture" src={Allocations} alt="system features screen capture" width="690px" />
          </section>

          <section className="line-stocker-box">
            <center><div className="line-stocker"></div></center>
          </section>

          <section className="stocker-section">
            <div className="stocker-info">
              <h6 className="stocker-subheader">Expenses</h6>
              <p className="stocker-paragraph">Stocker1™ allows you to track various expense categories such as hay, mineral, supplements, trucking, and other items to a particular location or pasture. The expense can be tied to a particular group or location.</p>
            </div>
            <img className="stocker-capture" src={ReportFeed} alt="system features screen capture" width="690px" />
          </section>

          <section className="stocker-section-white wider">
            <div className="stocker-capture-left-box">
              <img className="stocker-capture-left" src={RPT} alt="break even details" width="405px" />
            </div>
            <div className="stocker-info">
              <h6 className="stocker-subheader2">Reports</h6>
              <p className="stocker-paragraph-two2 graytext">Stocker1™ has reports ranging from detail to summary reports. Billing can be submitted to customers using either the Billing Detail or Billing Summary reports depending on their needs. The Group Summary report can be used as a closeout report, but ran at any time to see valuable information on your groups. Yard sheet reports summarize where the cattle are located, as well as the basic information about them.</p>
              <img className="stocker-capture-left" src={OpSum} alt="break even details" width="690px" />
            </div>
          </section>

          <section className="watch-video-stocker-footer">
            <div className="stocker-contact-line"></div>
            <div className="customized-box">
              <h6 className="stocker-footer-text">INTERESTED IN A</h6>
              <h6 className="stocker-footer-text">CUSTOMIZED SOLUTION FOR YOUR BUSINESS?</h6>
            </div>
            <Link to="/contact">
              <div className="stocker-video-box">CONTACT US </div></Link>
          </section>

        </main>

        <Footer />
      </section>
    )
  }
}
