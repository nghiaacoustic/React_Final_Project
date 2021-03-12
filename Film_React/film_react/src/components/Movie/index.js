import React, { Component } from 'react';
import { Link } from "react-router-dom";
import playButton from '../../asset/img/play-video.png'
// import ResizeImage from 'react-resize-image'

export default class Movie extends Component {
    render() {

        const { movie } = this.props;

        return (
            <>
                <div className="top">
                    <img src={movie.hinhAnh} />
                    <div className="overlay">
                        <a href>
                            <img src={playButton} alt="play" height="10px" width="10px" />
                        </a>
                    </div>
                    <div className="star">
                        <p>8.5</p>
                        <div>
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <span>1/2</span>
                        </div>
                    </div>
                </div>
                <div className="bot">
                    <div className="namePhim">
                        <span className="macP">P</span>{movie.tenPhim}
                        <p>113 phút </p>
                    </div>
                    <div className="buyNow">
                        <button>MUA VÉ</button>
                    </div>

                    {/* <Link className="btn btn-success" to={`/detail/${movie.maPhim}`}>Detail</Link> */}
                </div>
            </>
        )
    }
}
