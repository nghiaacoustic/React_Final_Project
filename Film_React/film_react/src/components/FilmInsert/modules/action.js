import * as ActionType from './constant'
import api from '../../../api'


export const actInsertFilmApi = () => {
    return dispatch => {
        dispatch(actInsetFilmRequest());
        api.post("/QuanLyPhim/ThemPhimUploadHinh")
        .then(result => {
            dispatch(actInsetFilmSuccess(result.data))
        })
        .catch(error => {
            dispatch(actInsetFilmFailed(error))
        })
    }
}

const actInsetFilmRequest = () => {
    return {
        type: ActionType.INSERT_REQUEST
    }
}

const actInsetFilmSuccess = (data) => {
    return {
        type: ActionType.INSERT_SUCCESS,
        payload: data
    }
}

const actInsetFilmFailed = (error) => {
    return {
        type: ActionType.INSERT_FAILED,
        payload:error
    }
}