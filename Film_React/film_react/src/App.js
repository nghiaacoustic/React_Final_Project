import './App.css';
import ListMoviePage from './container/HomeTemplate/ListMoviePage';
import NavbarHome from './components/NavbarHome'
import Footer from './components/Footer'
import Carousel from './container/HomeTemplate/Carousel';
import Theater from './container/HomeTemplate/Theater'
import News from './container/HomeTemplate/News';
import Contact from './container/HomeTemplate/Contact';
import DetailsMovie from './container/HomeTemplate/DetailsMovie';
import NavbarAdmin from './components/NavbarAdmin';
import DashBoardPage from './container/AdminTemplate/DashboardPage'
import Login from './components/Login';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Facebook from './components/Login/FacebookLogin';
function App() {
  return (
    <>
      {/* <Facebook/> */}
      {/* <Login /> */}
      {/* <NavbarHome /> */}
      <Carousel /> 
      <ListMoviePage />
      {/* <DetailsMovie/> */}
      {/* <Theater/> */}
      {/* <News//> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
      {/* <NavbarAdmin/> */}
      {/* <DashBoardPage/> */}
      
    </>
  );
}

export default App;

// import React, { Component } from 'react'
// import HomeTemPlate from './container/HomeTemplate'

// import {Switch, withRouter} from 'react-router-dom'
// import { routeHome } from './route'
// import {connect} from 'react-redux'
// class App extends Component {
//   showLayoutHome = (routes)=>{
//     if(routes & routes.length > 0){
//       return routes.map((item,index)=>{
//         return <HomeTemPlate
//           key={index}
//           exact={item.exact}
//           path={item.path}
//           Component = {item.component}
//         />
//       })
//     }
//   }
//   // componentDidMount(){

//   // }
//   render(){
//     return (
//       <Switch>
//         {this.showLayoutHome(routeHome)}
//       </Switch>
//     )
//   }
// }

// // const ConnectedComponent = connect(null,null) (App)
// // export default withRouter(ConnectedComponent)

// export default App