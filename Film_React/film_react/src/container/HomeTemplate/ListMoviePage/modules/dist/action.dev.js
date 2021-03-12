"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actListMovieApi = void 0;

var ActionType = _interopRequireWildcard(require("./constants"));

var _api = _interopRequireDefault(require("./../../../../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var actListMovieApi = function actListMovieApi() {
  return function (dispatch) {
    dispatch(actListMovieRequest());

    _api["default"].get("/QuanLyPhim/LayDanhSachPhim?manhom=GP02").then(function (rs) {
      dispatch(actListMovieSuccess(rs.data));
    })["catch"](function (err) {
      dispatch(actListMovieFailed(err));
    });
  };
};

exports.actListMovieApi = actListMovieApi;

var actListMovieRequest = function actListMovieRequest() {
  return {
    type: ActionType.LIST_MOVIE_REQUEST
  };
};

var actListMovieSuccess = function actListMovieSuccess(data) {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data
  };
};

var actListMovieFailed = function actListMovieFailed(error) {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
    payload: error
  };
};