import React, { Component } from 'react'
import * as action from './modules/action'
import Loader from './../../../components/Loader'
import { Link } from 'react-router-dom'

import {connect} from "react-redux"


class detailsMovieReducer extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id)
        const id = this.props.match.params.id;
        this.props.fetchDetailMovie(id);
    }
    renderTable = () => {
        const { data } = this.props;
        if (data & data.lichChieu) {
            return data.lichChieu.map((item) => {
                return (
                    <tr key={item.maLichChieu}>
                        <td>{item.thongTinRap.cumRap}</td>
                        <td>{item.thongTinRap.tenRap}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                        <td><Link className="btn btn-success" to="/" />Đặt vé</td>
                    </tr>
                )
            })
        }

    }
    render() {
        const { loading, data } = this.props;
        if (loading) {
            return <Loader />
        }
        return (
            <div>
                <h3>DetailsMovie</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="img-fluid" src={data & data.hinhAnh} alt="hinhAnh" />
                        </div>
                        <div className="col-sm-6">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Tên Phim</td>
                                        <td>{data & data.tenPhim}</td>
                                    </tr>
                                    <tr>
                                        <td>Mô tả</td>
                                        <td>{data & data.moTa}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Cụm rạp</th>
                                    <th>Tên rạp</th>
                                    <th>Ngày chiếu</th>
                                    <th>Giờ chiếu</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.detailMovieReducer.loading,
        data: state.detailMovieReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetailMovie: (id) => {
            dispatch(action.actDetailMovieApi(id))
        }
    }
} 

export default connect(mapStateToProps,mapDispatchToProps) (detailsMovieReducer)