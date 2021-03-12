import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import NavbarHome from '../../NavbarHome'

export default class Facebook extends Component {

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
        return (
            this.state.isLoggedin ? <NavbarHome/> :
                (<div>
                    <FacebookLogin
                        appId="859927861464677"
                        autoLoad={true}
                        fields="name,email,picture"
                        // onClick={componentClicked}
                        callback={this.responseFacebook} />,
                </div>)
        )
    }
}
