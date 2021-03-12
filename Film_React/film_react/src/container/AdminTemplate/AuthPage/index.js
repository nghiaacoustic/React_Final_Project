import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Loader from '../../../components/Loader';

export default class AuthPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matkhau: ""
        }
    }

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    renderNoti = () => {
        const { err } = this.props;
        if (err) {
            return <div className="alert alert-danger">{err.response.data}</div>
        }
    }
    render() {
        const { loading } = this.props;
        if (loading) return <Loader />
        if (localStorage.getItem("UserAdmin")) {
            return <Redirect to="/dashboard" />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h3>AuthPage</h3>
                        <form onSubmit={this.handleLogin}>
                            {this.renderNoti()}
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" name="taiKhoan" onChange={this.handleOnChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" className="form-control" name="matKhau" onChange={this.handleOnChange} />
                            </div>
                            <button type="submit" className="btn btn-success">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.authReducer.loading,
        err:state.authReducer.err,
        data:state.authReducer.data
    }
}

// const mapDispatchToProps= dispatch =>{ 
//     return {
//         fetchLogin: (user,history) => {
//             dispatch(actAuthApi(user,history))
//         }
//     }
// }