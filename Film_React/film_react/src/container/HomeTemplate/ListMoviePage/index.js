import React, { Component } from 'react'
import Movie from '../../../components/Movie';

import * as action from './modules/action'
import { connect } from 'react-redux'
import Loader from '../../../components/Loader';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class ListMoviePage extends Component {

    componentDidMount() {
        this.props.fetchListMovie()
    }

    renderHTML = () => {
        const { data } = this.props;
        if (data && data.length > 0) {
            return data.map(movie => {
                return (
                    <div key={movie.maPhim} className="listPhim_item col-12 col-md-3 col-sm-6">
                        <Movie movie={movie} />
                    </div>
                )
            })
        }
    }


    render() {
        const { loading } = this.props;
        if (loading) {
            return <Loader />
        }
        return (
            <section className="List_Movie">
                <div className="listphim container">
                    <div className="menu">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active first" id="home-tab" data-toggle="tab" href="#first" role="tab" aria-controls="home" aria-selected="true">Đang Chiếu</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link second" id="profile-tab" data-toggle="tab" href="#second" role="tab" aria-controls="profile" aria-selected="false">Sắp Chiếu</a>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="home-tab">
                            <OwlCarousel
                                className="owl-theme listPhim_content"
                                items={4}
                                loop nav
                                margin={32}>
                                <div className="row">
                                    {this.renderHTML()}
                                </div>
                            </OwlCarousel>
                        </div>
                    </div> */}
                    <div className="row">
                        {this.renderHTML()}
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // loading: state.listMovieReducer.loading,
        data: state.listMovieReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListMovie: () => {
            dispatch(action.actListMovieApi())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage)