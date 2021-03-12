import { combineReducers } from 'redux';
// import { burgerReducer } from './burger';
// import CourseReducer from './course';
// import UserReducer from './user'
import listMovieReducer from './../../container/HomeTemplate/ListMoviePage/modules/reducer'
import detailsMovieReducer from '../../container/HomeTemplate/DetailsMovie/modules/reducer'

const RootReducer = combineReducers({
    // course: CourseReducer,
     listMovieReducer,
     detailsMovieReducer
    //  test file rootReducer
    // burger: burgerReducer
})

export default RootReducer;