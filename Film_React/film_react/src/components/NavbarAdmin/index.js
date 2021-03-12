// import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";
// import { actLogout } from "../../containers/AdminTemplate/AuthPage/modules/action"

import { connect } from "react-redux"
class NavbarAdmin extends Component {
    render() {
        return (
            // <div>
            //     <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            //         {/* Brand */}
            //         <NavLink className="navbar-brand" to="/admin">Navbar LOGO</NavLink>
            //         {/* Toggler/collapsibe Button */}
            //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            //             <span className="navbar-toggler-icon" />
            //         </button>
            //         {/* Navbar links */}
            //         <div className="collapse navbar-collapse" id="collapsibleNavbar">
            //             <ul className="navbar-nav">
            //                 <li className="nav-item">
            //                     <NavLink exact activeClassName="active" className="nav-link" to="/dashboard">DashBoard</NavLink>
            //                 </li>
            //                 <li className="nav-item">
            //                     <NavLink activeClassName="active" className="nav-link" to="/add-user">Add User</NavLink>
            //                 </li>
            //                 <li className="nav-item">
            //                     <button className="btn btn-danger" onClick={()=>{this.props.fetchLogout(this.props.history)}}>Log out</button>
            //                 </li> 
            //             </ul>
            //         </div>
            //     </nav>

            // </div>
            <div className="sidebar">
                <div>
                    <div className="sidebar__brand">
                        <h2>
                            <span className="lab la-accusoft" />
                            <span>Admin Page</span>
                        </h2>
                    </div>
                    <div className="sidebar__menu">
                        <ul>
                            <li>
                                <NavLink to="/"  activeClassName="active">
                                    <span className="las la-igloo firstSpan" />
                                    <span className="pr-5">Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" activeClassName="non-active">
                                    <span className="las la-users firstSpan" />
                                    <span>Customers</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" activeClassName="non-active">
                                    <span className="las la-clipboard-list firstSpan" />
                                    <span>Projects</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" activeClassName="non-active">
                                    <span className="las la-shopping-bag firstSpan" />
                                    <span>Oders</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" activeClassName="non-active">
                                    <span className="las la-receipt firstSpan" />
                                    <span>Inventory</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" activeClassName="non-active">
                                    <span className="las la-user-circle firstSpan" />
                                    <span>Accounts</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" activeClassName="non-active">
                                    <span className="las la-clipboard-list firstSpan" />
                                    <span>Tasks</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchLogout: (history) => {
//             dispatch(actLogout(history));
//         }
//     }
// }

//custom lại connect để bao bọc bởi withRouter
// const ConnectedComponent = connect(null, null)(NavbarAdmin);

// export default withRouter(ConnectedComponent) ;

export default NavbarAdmin