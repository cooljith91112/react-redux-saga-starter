import React from 'react';
import { connect } from "react-redux";
import WithHeaderFooter from '../../shared/header_footer.hoc';
import WithLayout from '../../shared/layout.hoc';
import Paginator from '../../shared/paginator.component';

const DashBoardContainer = (props) => {

    return (
        <div className="maincontent_area">
            <div className="row align-content-end flex-row-reverse">
                        <div className="col-2">
                            <div className="expand-collapse-action-area">
                                 <i className="far fa-caret-square-up mr-3"></i>
                                 <i className="fas fa-expand"></i>   
                            </div>
                        </div>
                    </div>
                   {/* Chart area Start */}
                    <div className="row">
                        <div className="col-12 d-flex">
                            <div className="col-4">
                                <div className="chart-block">
                                    <img src="assets/images/chart1.png"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="chart-block">
                                    <img src="assets/images/chart2.png"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="chart-block">
                                    <img src="assets/images/chart3.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* //Chart area End
                     //Grid Filter Area Start */}
                     <div className="row">
                        <div className="col-12 d-flex">
                            <div className="col-6 text-left mt-3">
                                <h3 className="float-left">Tickets</h3>
                                {/* <select className="ml-3">
                                    <option>zxczxc</option>
                                </select> */}
                            </div>
                            <div className="col-6">
                                <div className="search_area h-100 mt-3">
                                    <input type="text" placeholder="Search"/>
                                    <button>Search</button>
                                </div>
                            </div>
                        </div>
                     </div>
                     {/* Grid Filter Area End */}
                     {/* Table area */}
                     <div className="row">
                         <div className="col-12">
                            <div className="col-12">
                                <div className="table-wrapper">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <th style={{"width": "5%"}}></th>
                                            <th style={{"width": "10%"}}>Risk ID</th>
                                            <th style={{"width": "10%"}}>Status</th>
                                            <th style={{"width": "20%"}}>Advisor</th>
                                            <th style={{"width": "20%"}}>Details</th>
                                            <th style={{"width": "15%"}}>Category</th>
                                            <th style={{"width": "10%"}}>Last Update</th>
                                            <th style={{"width": "10%"}}>Created date</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="table-round-icon">L</span>
                                            </td>
                                            <td>Risk1011234</td>
                                            <td>
                                                <span className="background_text new_status">New</span>
                                            </td>
                                            <td>Smith John</td>
                                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</td>
                                            <td>
                                                <span className="background_text ">Compliance</span> 
                                                <span className="background_text ">Operational</span>
                                            </td>
                                            <td>04 Dec 2019</td>
                                            <td>02 Dec 2019</td>
                                        </tr>
                                        <tr>
                                                <td>
                                                    <span className="table-round-icon">L</span>
                                                </td>
                                                <td>Risk1011234</td>
                                                <td>
                                                    <span className="background_text new_status">New</span>
                                                </td>
                                                <td>Smith John</td>
                                                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</td>
                                                <td>
                                                    <span className="background_text ">Compliance</span> 
                                                    <span className="background_text ">Operational</span>
                                                </td>
                                                <td>04 Dec 2019</td>
                                                <td>02 Dec 2019</td>
                                            </tr>
                                            <tr>
                                                    <td>
                                                        <span className="table-round-icon">L</span>
                                                    </td>
                                                    <td>Risk1011234</td>
                                                    <td>
                                                        <span className="background_text new_status">New</span>
                                                    </td>
                                                    <td>Smith John</td>
                                                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</td>
                                                    <td>
                                                        <span className="background_text ">Compliance</span> 
                                                        <span className="background_text ">Operational</span>
                                                    </td>
                                                    <td>04 Dec 2019</td>
                                                    <td>02 Dec 2019</td>
                                                </tr>
                                        <tr>
                                            <td>
                                                <span className="table-round-icon medium_status">M</span>
                                            </td>
                                            <td>Risk1011234</td>
                                            <td>
                                                <span className="background_text assigned_status">Assigned</span>
                                            </td>
                                            <td>Smith John</td>
                                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</td>
                                            <td>
                                                <span className="background_text ">Compliance</span> 
                                                <span className="background_text ">Operational</span>
                                            </td>
                                            <td>04 Dec 2019</td>
                                            <td>02 Dec 2019</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="table-round-icon high_status">H</span>
                                            </td>
                                            <td>Risk1011234</td>
                                            <td>
                                                <span className="background_text assigned_status">Assigned</span>
                                            </td>
                                            <td>Smith John</td>
                                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</td>
                                            <td>
                                                    <span className="background_text ">Compliance</span> 
                                                    <span className="background_text ">Operational</span>
                                            </td>
                                            <td>04 Dec 2019</td>
                                            <td>02 Dec 2019</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                         </div>
                     </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps)(
    WithLayout(DashBoardContainer)
);