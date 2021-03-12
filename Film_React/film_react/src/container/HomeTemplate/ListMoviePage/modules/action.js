import * as ActionType from './constants'
import api from "./../../../../api"

export  const actListMovieApi = () => {
    return dispatch =>{
        dispatch(actListMovieRequest());
        api.get("/QuanLyPhim/LayDanhSachPhim?manhom=GP02")
            .then(rs=>{
                dispatch(actListMovieSuccess(rs.data))
            })
            .catch(err=>{
                dispatch(actListMovieFailed(err))
            })
    }
}

const actListMovieRequest = () => {
    return {
        type: ActionType.LIST_MOVIE_REQUEST,
    };
};

const actListMovieSuccess = (data) => {
    return {
        type: ActionType.LIST_MOVIE_SUCCESS,
        payload:data,
    };
};

const actListMovieFailed = (error) => {
    return {
        type: ActionType.LIST_MOVIE_REQUEST,
        payload:error
    };
};