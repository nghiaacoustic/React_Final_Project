"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reducer = _interopRequireDefault(require("./../../container/HomeTemplate/ListMoviePage/modules/reducer"));

var _reducer2 = _interopRequireDefault(require("../../container/HomeTemplate/DetailsMovie/modules/reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { burgerReducer } from './burger';
// import CourseReducer from './course';
// import UserReducer from './user'
var RootReducer = (0, _redux.combineReducers)({
  // course: CourseReducer,
  listMovieReducer: _reducer["default"],
  detailsMovieReducer: _reducer2["default"] //  test file rootReducer
  // burger: burgerReducer

});
var _default = RootReducer;
exports["default"] = _default;