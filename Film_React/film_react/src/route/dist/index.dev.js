"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeHome = void 0;

var _DetailsMovie = _interopRequireDefault(require("../container/HomeTemplate/DetailsMovie"));

var _ListMoviePage = _interopRequireDefault(require("../container/HomeTemplate/ListMoviePage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Login from "./Login"
var routeHome = [{
  exact: true,
  path: "/",
  component: _ListMoviePage["default"]
}, {
  exact: false,
  path: "/detail/:id",
  component: _DetailsMovie["default"]
} // {
//     exact: true,
//     path:"/login",
//     component: Login
// }
];
exports.routeHome = routeHome;