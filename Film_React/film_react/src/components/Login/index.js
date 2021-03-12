import React, { Component } from 'react'
import bg2 from "./../../asset/img/bg2.jpg"
// import fb from "./../../asset/img/btn-FB.png"
import zalo from "./../../asset/img/btn-Zalo.png"
import google from "./../../asset/img/btn-Google.png"
import logo from "./../../asset/img/tixLogo.png"
import { Link } from "react-router-dom"
import FacebookLogin from 'react-facebook-login'
import NavbarHome from '../NavbarHome'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedin: false
        }
    }

    responseFacebook = (response) => {
        console.log(response)
        this.setState({
            isLoggedin: true
        })
    }
    render() {

        // document.getElementsByClassName("header__content").reset();
        return (
            this.state.isLoggedin ? <NavbarHome /> :
                <div className="SignIn__backGround" style={{ backgroundImage: `url(${bg2})` }}>
                    <div className="SignIn__box">
                        <img id="box__logo" src={logo} alt="Logo-image" />
                        <div className="SignIn__message">
                            Đăng nhập để được nhiều ưu đãi, mua vé <br />
      và bảo mật thông tin!
    </div>
                        <div className="SignIn__social">
                            <div >
                                <FacebookLogin
                                    appId="859927861464677"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    // onClick={componentClicked}
                                    callback={this.responseFacebook} />
                            </div>

                            <div className="SignIn__Zalo ">
                                <Link to>
                                    <img className="imgSocial social" src={zalo} />
                                </Link>
                            </div>
                            <div className="SignIn__Google">
                                <Link to>
                                    <img className="imgSocial social" src={google} />
                                </Link>
                            </div>
                        </div>
                        <div className="SignIn_Close">
                        </div>
                    </div>
                </div>

        )
    }
}
