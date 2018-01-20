import React, { Component } from 'react'

export default class MobileHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circle: 12
        }
        this.handleCircle = this.handleCircle.bind(this);
    };

    handleCircle = (id) => {
        this.setState({ circle: id });
    }


    render() {
        return (
            <section className="history-circles-mobile">
                <div className="history-circles-container-mobile">
                    <div onClick={() => this.handleCircle(12)} className={this.state.circle === 12 ? "active-history-btn5 c13" : "c13 circle-5"} >1971</div>
                    <div onClick={() => this.handleCircle(1)} className={this.state.circle === 1 ? "active-history-btn5 c1" : "c1 circle-5"} >1971</div>
                    <div onClick={() => this.handleCircle(13)} className={this.state.circle === 13 ? "active-history-btn1 c14" : "c14 circle-1"} >1983</div>
                    <div onClick={() => this.handleCircle(26)} className={this.state.circle === 26 ? "active-history-btn3 c27" : "c27 circle-3"} >1983</div>
                    <div onClick={() => this.handleCircle(14)} className={this.state.circle === 14 ? "active-history-btn4 c15" : "c15 circle-4"} >1984</div>
                    <div onClick={() => this.handleCircle(2)} className={this.state.circle === 2 ? "active-history-btn4 c2" : "c2 circle-4"} >1985</div>
                    <div onClick={() => this.handleCircle(27)} className={this.state.circle === 27 ? "active-history-btn5 c28" : "c28 circle-5"} >1986</div>
                    <div onClick={() => this.handleCircle(15)} className={this.state.circle === 15 ? "active-history-btn3 c16" : "c16 circle-3"} >1987</div>
                    <div onClick={() => this.handleCircle(3)} className={this.state.circle === 3 ? "active-history-btn4 c3" : "c3 circle-4"} >1991</div>
                    <div onClick={() => this.handleCircle(28)} className={this.state.circle === 28 ? "active-history-btn2 c29" : "c29 circle-2"} >1992</div>
                    <div onClick={() => this.handleCircle(16)} className={this.state.circle === 16 ? "active-history-btn5 c17" : "c17 circle-5"} >1994</div>
                    <div onClick={() => this.handleCircle(4)} className={this.state.circle === 4 ? "active-history-btn3 c4" : "c4 circle-3"} >1996</div>
                    <div onClick={() => this.handleCircle(17)} className={this.state.circle === 17 ? "active-history-btn2 c18" : "c18 circle-2"} >1998</div>
                    <div onClick={() => this.handleCircle(29)} className={this.state.circle === 29 ? "active-history-btn2 c30" : "c30 circle-2"} >1998</div>
                    <div onClick={() => this.handleCircle(5)} className={this.state.circle === 5 ? "active-history-btn4 c5" : "c5 circle-4"} >2001</div>
                    <div onClick={() => this.handleCircle(18)} className={this.state.circle === 18 ? "active-history-btn3 c19" : "c19 circle-3"} >2003</div>
                    <div onClick={() => this.handleCircle(30)} className={this.state.circle === 30 ? "active-history-btn1 c31" : "c31 circle-1"} >2003</div>
                    <div onClick={() => this.handleCircle(19)} className={this.state.circle === 19 ? "active-history-btn3 c20" : "c20 circle-3"} >2005</div>
                    <div onClick={() => this.handleCircle(31)} className={this.state.circle === 31 ? "active-history-btn5 c32" : "c32 circle-5"} >2005</div>
                    <div onClick={() => this.handleCircle(6)} className={this.state.circle === 6 ? "active-history-btn4 c6" : "c6 circle-4"} >2007</div>
                    <div onClick={() => this.handleCircle(7)} className={this.state.circle === 7 ? "active-history-btn5 c7" : "c7 circle-5"} >2007</div>
                    <div onClick={() => this.handleCircle(20)} className={this.state.circle === 20 ? "active-history-btn3 c21" : "c21 circle-3"} >2007</div>
                    <div onClick={() => this.handleCircle(32)} className={this.state.circle === 32 ? "active-history-btn3 c33" : "c33 circle-3"} >2007</div>
                    <div onClick={() => this.handleCircle(21)} className={this.state.circle === 21 ? "active-history-btn3 c22" : "c22 circle-3"} >2008</div>
                    <div onClick={() => this.handleCircle(33)} className={this.state.circle === 33 ? "active-history-btn3 c34" : "c34 circle-3"} >2008</div>
                    </div>

                    


                {this.state.circle === 12 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1971 - Company Founded</h3>
                    <p className="history-circles-para">Micro Technologies was founded in 1971 as Micro Chemical by Bill Pratt who recognized a need for revolutionary technology within the feedlot industry; a spark that fueled 46 years of continued innovation. Today, Micro serves the majority of the feedyard industry and has expanded into the dairy industry.</p>
                </main>}

                {this.state.circle === 1 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1971 – First Micro meter machine developed and deployed</h3>
                    <p className="history-circles-para">The spark that fueled the start of Micro was the Micro Metering System, a revolutionary electro-mechanical device that for the first time, gave cattle feeders the flexibility to accurately modify micronutrient levels on a daily basis.</p>
                </main>}

                {this.state.circle === 26 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1983 - First “15” Series Micro Weigh® System</h3>
                    <p className="history-circles-para">Mill efficiency was transformed when Micro created computer technology to operate a micro machine that would for the first time use weight, rather than volume and relay logic, to measure micronutrients. Customers received on-the-spot automated reporting and subsequently experienced increased ration accuracy and improved efficiency.</p>
                </main>}

                {this.state.circle === 13 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1983 - Nutriflex </h3>
                    <p className="history-circles-para">Nutriflex was developed to utilize a customer’s own water and molasses supply to formulate liquid supplement on-site. The capability to blend salt, calcium, and phosphoric acid in customizable sizes generated considerable savings, allowing customers the flexibility to implement immediate changes to their supplements rather than being forced to consume older inventory.</p>
                </main>}

                {this.state.circle === 14 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1984 - Pro-Control Batching System</h3>
                    <p className="history-circles-para">The implementation of Micro Weigh® Systems elicited numerous customer requests for Micro to computerize the feedlot’s entire feed manufacturing process, which led to the creation of the Pro-Control Batching System.</p>
                </main>}

                {this.state.circle === 2 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1985 - First “16” series Micro Weigh® System </h3>
                    <p className="history-circles-para">Two years after its inception, the “15” series Micro Weigh® System was upgraded to provide more information and options.  This first “16” series Micro Weigh® System used a more durable and sophisticated computer and remains one of Micro’s most durable machines.  Many systems have been in the field for over 25 years and continue to fully operate.</p>
                </main>}

                {this.state.circle === 27 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1986 - Drug-Trac Chuteside Animal Health System</h3>
                    <p className="history-circles-para">As drug inventory control was introduced to the feedlot industry, Micro envisioned and created Drug-Trac; a comprehensive chute-side and office system that tracked individual and group animal health treatments and protocols. Drug-Trac also ensured that all animals were compliant with respective drug withdrawal periods when harvested.</p>
                </main>}

                {this.state.circle === 15 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1987 - Meta-Bac Live Microbial System </h3>
                    <p className="history-circles-para">To address monetary losses resulting from the difficulty to sustain hydrated microbials, Meta-Bac was created to hydrate and refrigerate dry microbials until ration implementation. Prior to the Meta-Bac system, it was nearly impossible to utilize these products.</p>
                </main>}

                {this.state.circle === 3 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1991 - Read-N-Feed® Bunk reader (DOS Based) / Feedtruck V. 1 System </h3>
                    <p className="history-circles-para">Through evaluating existing customers’ needs, Micro identified the opportunity for bunk reading technology, and in 1991 purchased a software company primarily serving beef feedyards - Agri Systems, Inc., and acquired its feedyard bunk-reading system. The owner, Joe Shell, was welcomed to the company and Micro immediately began offering the Read-N-Feed® Bunk Reader systems to existing customers.  Within 4 years, Micro had acquired approximately 65 feedyard bunk-reading customers.</p>
                </main>}

                {this.state.circle === 28 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1992 – Feedlot Business System (FBS) </h3>
                    <p className="history-circles-para">Feedlot Business System was introduced to the industry as a fully integrated Feedlot Accounting System to provide immediate access of comprehensive financial transactions to feedlot management staff.  As an innovative product based on a relational database, it also provided a greatly expanded capability to develop business intelligence from collected data.</p>
                </main>}

                {this.state.circle === 16 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1994 – Academic Advisory Steering Committee for ECM Development</h3>
                    <p className="history-circles-para">An oversight group of more than 12 industry experts with backgrounds in Ruminant Nutrition, Genetics / Animal Selection, Meat Science, Ultrasound, and Veterinary Medicine were brought to Amarillo to discuss the value of Individual Electronic Cattle Management.</p>
                </main>}

                {this.state.circle === 4 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1996 – Electronic Cattle Management (ECM) </h3>
                    <p className="history-circles-para">The introduction of ECM to the feedyard industry allowed the user to measure and sort animals into complimentary groups for optimum endpoint marketing. The system was complementary to the Drug-Trac Animal Health System and Feedlot Business System packages, and with the use of electronic identification allowed the feedyard to effectively track an animal throughout its life at the feedyard. </p>
                </main>}

                {this.state.circle === 29 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1998 - Windows Based Read-N-Feed® Bunk Reader  </h3>
                    <p className="history-circles-para">In the mid 1990’s, Micro Technologies saw the need to upgrade the ‘original Bunk Reading System’ to the new and improved ‘Read-N-Feed® Bunk Reading System’ to provide a more user-friendly, Windows look and feel. Customers at that time were able to seamlessly convert to the new Read-N-Feed® system, without losing essential existing features, as well as gain access to multiple new features.</p>
                </main>}

                {this.state.circle === 17 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">1998 - GPS Feed Truck system </h3>
                    <p className="history-circles-para">Micro continued to progress through technological innovation and developed an enhancement to its Feed Truck computer system.  The improvements enabled the Feed Truck computer to interface directly with the Feed Truck scale in addition to the implementation of GPS technology. This allowed the position of the feed truck in relation to the bunk to always be known, increasing the overall efficiency in feed delivery - this ensured even distribution of the right ration, to the right bunk, at the right time.  </p>
                </main>}

                {this.state.circle === 5 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2001 - Micro Weigh® System PC </h3>
                    <p className="history-circles-para">22 years after the introduction of the “16” MWS, Micro introduced the PC version of the extremely successful 16 machine. The upgrade allowed the system to be fully integrated into the Pro Control Plus® Batching System as well as allowing for online access, enhanced reporting, data exports and many more features.  </p>
                </main>}

                {this.state.circle === 18 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2003 - Pro Control Plus® Batching System </h3>
                    <p className="history-circles-para">Increased prevalence of Micro’s batching technology led to the development of an upgraded second-generation system with greatly expanded capabilities that could be easily customized to precisely address the customer’s changing needs. </p>
                </main>}

                {this.state.circle === 30 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2003 - Beef Information Exchange: National Animal Identification System (NAIS)  </h3>
                    <p className="history-circles-para">Impending changes in economic and regulatory requirements faced all segments of the U.S. beef industry, and new technologies to address these changes were necessary.  As data service providers to the beef industry, Micro, along with a coalition of leading agricultural data service companies, announced plans to create the beef industry’s first data exchange standards among the nation’s beef industry producers.  </p>
                </main>}

                {this.state.circle === 31 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2005 – Started Dairy Division with Micro Dairy Logic </h3>
                    <p className="history-circles-para">As dairies moved into the Texas panhandle region, with them came a growing need for innovative technologies in the dairy industry.  Relying on its already successful portfolio of existing technological offerings, Micro identified solutions for needs of dairy producers.  The first of these was Micro Daily Logic, which initiated the Dairy Division of Micro.</p>
                </main>}

                {this.state.circle === 19 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2005 - Pro-Control Statistical Process Control  </h3>
                    <p className="history-circles-para">To further improve accuracy of the Pro Control Plus® Batching System, Micro developed built-in SPC (Statistical Process Control) which allows for quick, powerful analysis of batching variances, as well as generating automatic SPC exception notifications to specified employees, managers and consultants. </p>
                </main>}

                {this.state.circle === 7 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2007 - First Dairy Micro Weigh® System  </h3>
                    <p className="history-circles-para">A progressive dairy in New Mexico recognized the vision for having precision micro ingredients accurately dispensed in their feed rations and became the first to install a Micro Machine on their dairy. The dairy segment has since benefited from precision feed management systems and continue to grow as a customer base for Micro.  </p>
                </main>}

                {this.state.circle === 20 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2007 - Feed Truck System 2.0  </h3>
                    <p className="history-circles-para">Knowing how essential the Feed Truck System was to its customers, Micro invested further into the technology by rewriting the entire program to have a simpler user interface and full integration within the Read-N-Feed® Bunk Reader.</p>
                </main>}

                {this.state.circle === 32 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2007 - Acquired CattleLog, individual animal management and verification program from Emerge.</h3>
                    <p className="history-circles-para"></p>
                </main>}

                {this.state.circle === 6 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2007 – SCR HeatTime Collar Distributor </h3>
                    <p className="history-circles-para">SCR a leading animal monitoring company from Israel, identified the need for a United States partner that shared the same vision on the future potential of dairy cows wearing devices that monitored their movement and eating patterns.  Micro recognized the relevance that this type of technology would have to its customers and moved forward with a distribution partnership. </p>
                </main>}

                {this.state.circle === 21 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2008 - Developed Micro PVP Verification Program </h3>
                    <p className="history-circles-para">Micro’s PVP (Process Verified Program) was approved by USDA for Age and Source Verification, followed by the verification program for NHTC (Non Hormone Treated Cattle).  The USDA Process Verified Program is a verification service that offered applicants a unique way to market their products to customers using clearly defined, implemented, and transparent process points.  </p>
                </main>}

                {this.state.circle === 33 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2008 - Pro-Control Routing & Receiving </h3>
                    <p className="history-circles-para">Micro improved upon the Pro-Control Plus® Batching System to encompass monitoring and controlling other feed mill functions beyond the batching process, including receiving and routing of commodities and management of bin storage and automatic refilling. </p>
                </main>}

                {this.state.circle === 22 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2009 - First Accu-Trac® System </h3>
                    <p className="history-circles-para">After many years with standalone systems, Micro embarked on a plan to create a fully integrated feedyard management system. The first module to be released under the ACCU-TRAC® suite was the Drug Trac Animal Health System. The new system provided users many enhanced features including online access, automated exception management, enhanced reporting plus a strong growth path for future features and benefits. </p>
                </main>}

                {this.state.circle === 34 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2009 - Pro-Control Web </h3>
                    <p className="history-circles-para">The revolutionary Pro-Control Web system was created to give managers and consultants, as well as Micro service personnel, an online, web-based interface for reporting, monitoring and configuration of its systems disruption to the production system. </p>
                </main>}

                {this.state.circle === 8 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2009 - Accu-Trac Dairy Sorting  </h3>
                    <p className="history-circles-para">The revolutionary Pro-Control Web system was created to give managers and consultants, as well as Micro service personnel, an online, web-based interface for reporting, monitoring and configuration of its systems disruption to the production system. </p>
                </main>}
                
                {this.state.circle === 9 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2010 - Read-N-Feed® Dairy  </h3>
                    <p className="history-circles-para">Micro recognized that its Read-N-Feed® technology was applicable to dairies and began to introduce and install this technology, to the benefit of multiple dairy customers.</p>
                </main>}

                {this.state.circle === 23 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2010 - Pro-Control Parlor </h3>
                    <p className="history-circles-para">With the ever-growing cost of business and tougher regulations being enforced on dairies, it was evident that a solution was needed to help dairy farmers lower their overhead cost and standardize the Cleaning in Place (CIP) process. This resulted in the development of a fully automated wash system called Pro-Control Parlor. </p>
                </main>}

                {this.state.circle === 10 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2011 - National Animal Identification System gains USDA approval </h3>
                    <p className="history-circles-para"></p>
                </main>}

                {this.state.circle === 35 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2011 - Micro hired a full time Pharmacist licensed in the state of Texas.  </h3>
                    <p className="history-circles-para">Very quickly we added 4 more state licenses to the list, which include NM, CO, KS, and OK.</p>
                </main>}

                {this.state.circle === 11 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2011 - Micro Beef Technologies acquired by MWI Veterinary Supply   </h3>
                    <p className="history-circles-para">The synergies of the two animal health companies presented exciting potential for food animal production by combining the technology-based programs and services from Micro with the well-established animal health distribution and logistics business of MWI Animal Health.</p>
                </main>}

                {this.state.circle === 36 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2011 - First “17” series Micro Weigh® System </h3>
                    <p className="history-circles-para">As product mixes changed within the Micro customer base, there was a need for a new Micro Weigh® System which would increase the ability for the user to use an enhanced array of products while making sure the flexibility and accuracy was not compromised. The 17 MWS was designed to accomplish this task.</p>
                </main>}

                {this.state.circle === 24 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2012 – First Cubex® System installed </h3>
                    <p className="history-circles-para">Micro identified the need to provide a solution for automating the manual processes of product inventory for their customers and knew the cost savings would impact their customers’ bottom line. Through the installation of the Cubex® system, customers experienced an improvement in supply and pharmaceutical organization, inventory accuracy, security, operational efficiency and elimination of inventory stock-outs and/or overages. </p>
                </main>}

                {this.state.circle === 25 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2012 - Accu-Trac® Flex Sorting </h3>
                    <p className="history-circles-para">The introduction of Flex Sorting allowed Accu-Trac® the ability to sort animals into like groups by using an algorithm that allows users to sort animals into like groups to maximize pen utilization, for optimal animal performance.  </p>
                </main>}

                {this.state.circle === 37 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2013 – Relocation of Office and Warehouses to Amarillo Business Park  </h3>
                    <p className="history-circles-para">In November of 2014, Micro moved its corporate office and various warehouse locations to the AEDC business park in Amarillo, TX to combine its business operations into one convenient location.  </p>
                </main>}

                {this.state.circle === 38 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2013 - Acquired distribution rights to the Whisper Veterinary Stethoscope   </h3>
                    <p className="history-circles-para">Micro partnered with Geissler Corporation to market, install and service the Whisper Digital Stethoscope. Whisper is the first objective tool developed to score severity of Bovine Respiratory Disease (BRD) in cattle. In 2016, Merck Animal Health purchased Whisper from Geissler Corporation and Micro continues to market, install and service Whisper in feed yards and large backgrounding operations in cooperation with Merck Animal Health. </p>
                </main>}

                {this.state.circle === 40 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2014 - Amarillo pharmacy becomes Southwest distributor
                    for production animal package goods</h3>
                    <p className="history-circles-para"></p>
                </main>}

                {this.state.circle === 39 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2015 - MWI Animal Health and Micro Technologies acquired by
                    AmerisourceBergen </h3>
                    <p className="history-circles-para">Capitalizing on AmerisourceBergen’s knowledge of manufacturer and provider services, in addition to its global reach and partnership philosophy, MWI joined forces with its expertise in veterinary and agricultural markets to collaboratively launch the next generation of superior animal health products and services. With some of the most advanced technology and operations for distribution in the world, the acquisition has allowed Micro to deliver even greater quality and more effective service to its customers. </p>
                </main>}

                {this.state.circle === 41 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2015 - Micro Technologies acquires Comco Liquimatics </h3>
                    <p className="history-circles-para">In 2015, Micro acquired the assets of Comco Liquimatics, a leading supplier of Post Pellet Liquid Application technology for the pork and poultry industry. The acquired systems became part of the Micro offerings, strategically expanding the suite of industry-leading animal health and nutrition management systems.  </p>
                </main>}

                {this.state.circle === 42 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2015 - Acquired distribution rights to Stocker1™   </h3>
                    <p className="history-circles-para">Stocker1™ is the first web based management program built specifically for backgrounder and stocker operations. Stocker1™ is a complete management system that shows the break-even on a set of cattle at any given time, close outs for each group and billing capabilities for custom operations. This software technology has allowed Micro to expand its portfolio to all sectors of the beef industry. </p>
                </main>}

                {this.state.circle === 43 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2015 - First integrated Read-N-Feed® / Accu-Trac® system  </h3>
                    <p className="history-circles-para">The Read-N-Feed® system was introduced to the suite of Accu-Trac® products to allow for a more integrated and robust system.  Accu-Trac® allowed for Read-N-Feed® and Drug-Trac® to share single cattle inventory, as well as giving the system a new and polished look.  </p>
                </main>}

                {this.state.circle === 44 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2016 - Pro-Control Mixer   </h3>
                    <p className="history-circles-para">The Pro-Control Mixer is a weight-based blending system that was created to equip dairy farmers with the flexibility of adjusting udder hygiene mixtures. This technology system has provided the dairy farmer with endless product-mixing capabilities from multiple concentrates, reducing freight costs and product waste as a result of improved product-usage accuracy.  </p>
                </main>}

                {this.state.circle === 45 &&
                <main className="display-circle-text">
                    <h3 className="history-circles-header">2018 - Launch of Accu-Trac® Office   </h3>
                    <p className="history-circles-para">Accu-Trac® Office and Feed Inventory System have been integrated with Read-N-Feed® and Drug-Trac® for a complete, single-inventory feedyard management system.  The full ACCU-TRAC® suite will provice the user the first fully integrated feedyard management system.   </p>
                </main>}


                <div className="history-circles-container-mobile2">
                    <div onClick={() => this.handleCircle(8)} className={this.state.circle === 8 ? "active-history-btn2 c8" : "c8 circle-2"} >2009</div>
                    <div onClick={() => this.handleCircle(22)} className={this.state.circle === 22 ? "active-history-btn4 c23" : "c23 circle-4"} >2009</div>
                    <div onClick={() => this.handleCircle(34)} className={this.state.circle === 34 ? "active-history-btn3 c35" : "c35 circle-3"} >2009</div>
                    <div onClick={() => this.handleCircle(9)} className={this.state.circle === 9 ? "active-history-btn2 c9" : "c9 circle-2"} >2010</div>
                    <div onClick={() => this.handleCircle(23)} className={this.state.circle === 23 ? "active-history-btn3 c24" : "c24 circle-3"} >2010</div>
                    <div onClick={() => this.handleCircle(10)} className={this.state.circle === 10 ? "active-history-btn1 c11" : "c11 circle-1"} >2011</div>
                    <div onClick={() => this.handleCircle(11)} className={this.state.circle === 11 ? "active-history-btn5 c12" : "c12 circle-5"} >2011</div>
                    <div onClick={() => this.handleCircle(35)} className={this.state.circle === 35 ? "active-history-btn3 c36" : "c36 circle-3"} >2011</div>
                    <div onClick={() => this.handleCircle(36)} className={this.state.circle === 36 ? "active-history-btn3 c37" : "c37 circle-3"} >2011</div>
                    <div onClick={() => this.handleCircle(24)} className={this.state.circle === 24 ? "active-history-btn3 c25" : "c25 circle-3"} >2012</div>
                    <div onClick={() => this.handleCircle(25)} className={this.state.circle === 25 ? "active-history-btn2 c26" : "c26 circle-2"} >2012</div>
                    <div onClick={() => this.handleCircle(37)} className={this.state.circle === 37 ? "active-history-btn4 c38" : "c38 circle-4"} >2013</div>
                    <div onClick={() => this.handleCircle(38)} className={this.state.circle === 38 ? "active-history-btn3 c39" : "c39 circle-3"} >2013</div>
                    <div onClick={() => this.handleCircle(40)} className={this.state.circle === 40 ? "active-history-btn4 c41" : "c41 circle-4"} >2014</div>
                    <div onClick={() => this.handleCircle(39)} className={this.state.circle === 39 ? "active-history-btn5 c40" : "c40 circle-5"} >2015</div>
                    <div onClick={() => this.handleCircle(41)} className={this.state.circle === 41 ? "active-history-btn3 c42" : "c42 circle-3"} >2015</div>
                    <div onClick={() => this.handleCircle(42)} className={this.state.circle === 42 ? "active-history-btn3 c43" : "c43 circle-3"} >2015</div>
                    <div onClick={() => this.handleCircle(43)} className={this.state.circle === 43 ? "active-history-btn3 c44" : "c44 circle-3"} >2015</div>
                    <div onClick={() => this.handleCircle(44)} className={this.state.circle === 44 ? "active-history-btn3 c45" : "c45 circle-3"} >2016</div>
                    <div onClick={() => this.handleCircle(45)} className={this.state.circle === 45 ? "active-history-btn4 c46" : "c46 circle-4"} >2018</div>
                </div>

            </section>
        )
    }
}
