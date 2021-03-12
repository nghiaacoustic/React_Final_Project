import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import logo from '../../asset/img/logo.png'
import avatar from '../../asset/img/avatar.png'
import location from '../../asset/img/location-header.png'
import Login from "../Login"
export default class NavbarHome extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light header__content">
                    <div className="left"><img id="logoID" src={logo} /></div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header__navbar" aria-controls="header__navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse mid" id="header__navbar">
                        <ul className="navbar-nav mr-auto nav__listItem">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Lịch Chiếu <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Cụm Rạp</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Tin Tức</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Ứng Dụng</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right mr-4">
                        <div>
                            <Link to="/login"><img src={avatar} alt="avt" width={30} height={30} /> Đăng Nhập</Link>
                        </div>
                        <div>
                            <img src={location} alt="local" />
                            <select name id>
                                <option value>Hồ Chí Minh</option>
                                <option value>Hà Nội</option>
                            </select>
                        </div>
                    </div>
                </nav>
                <Route path="/login" component={Login} exact>
                </Route>
            </header>

        )
    }
}
