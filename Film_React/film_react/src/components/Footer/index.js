import React, { Component } from 'react'
// import {asset} from '../../asset/img/'
import cgv from './../../asset/img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/cgv.png'
import bhd from '../../asset/img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/bhd.png'
import galaxycine from '../../asset/img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/galaxycine.png'


// let importAll = (asset) => {
//     let images = {};
//     asset.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

// const images = importAll(require.context('./img', false, '/\.png/'));

// <img src={images['cgv']} />
export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="container ">
                    <div className="row ">
                        <div className="col-md-2 ">
                            <h3>TIX</h3>
                            <ul>
                                <li><a href=" ">FAQ</a></li>
                                <li><a href=" ">Brand Guidelines</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 ">
                            <h3 id="noneD ">NoneD</h3>
                            <ul>
                                <li><a href=" ">Thỏa thuận sử dụng</a></li>
                                <li><a href=" ">Chính sách bảo mật</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 pr-5 pl-4 ">
                            <h3>ĐỐI TÁC</h3>
                            <div className="partner ">
                                <div className="row partner-r-1 ">
                                    <div className="col ">
                                        <a href="https://www.cgv.vn/" target="_blank" rel='noreferrer'>
                                            <img src={cgv} alt="cgv-logo" />
                                            {/* <img src={images['cgv']} /> */}
                                        </a>
                                    </div>
                                    <div className="col ">
                                        <a href="https://www.bhdstar.vn/" target="_blank" rel='noreferrer'>
                                            <img src={bhd} alt="bhd-logo" />
                                        </a>
                                    </div>
                                    <div className="col ">
                                        <a href="https://www.galaxycine.vn/" target="_blank" rel='noreferrer'>
                                            <img src={galaxycine} alt="galaxycine-logo" />
                                        </a>
                                    </div>
                                    <div className="col ">
                                        <a href="http://cinestar.com.vn/" target="_blank" rel='noreferrer'> <img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/cinestar.png " alt=" " /></a>
                                    </div>
                                    <div className="col ">
                                        <a href="http://lottecinemavn.com/LCHS/index.aspx" target="_blank" rel='noreferrer'><img src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png " alt=" " /></a>
                                    </div>
                                </div>
                                <div className="row partner-r-1 ">
                                    <div className="col ">
                                        <a href="https://www.megagscinemas.vn/" target="_blank" rel='noreferrer'><img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/megags.png " alt=" " /></a>
                                    </div>
                                    <div className="col ">
                                        <a href="https://www.betacineplex.vn/home.htm" target="_blank" rel='noreferrer'><img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/bt.jpg " alt=" " /></a>
                                    </div>
                                    <div className="col ">
                                        <a href="http://ddcinema.vn/" target="_blank" rel='noreferrer'> <img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/dongdacinema.png " alt=" " /></a>
                                    </div>
                                    <div className="col ">
                                        <a href="https://touchcinema.com/" target="_blank" rel='noreferrer'><img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/TOUCH.png " alt=" " /></a>
                                    </div>
                                    <div className="col ">
                                        <a href="https://cinemaxvn.com/" target="_blank" rel='noreferrer'><img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/cnx.jpg " alt=" " /></a>
                                    </div>
                                </div>
                                <div className="row partner-r-1 ">
                                    <div className="col ">
                                        <a href="https://starlight.vn/" target="_blank" rel='noreferrer'> <img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/STARLIGHT.png " alt=" " /></a>
                                    </div>
                                    <div className="col ">
                                        <a href="https://www.dcine.vn/" target="_blank" rel='noreferrer'><img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/dcine.png " alt=" " /></a>
                                    </div>
                                    <div className="col ">
                                        <a href="https://zalopay.vn/" target="_blank" rel='noreferrer'> <img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/zalopay_icon.png " alt=" " /></a>
                                    </div>
                                    <div className="col ">
                                        <a href="https://www.payoo.vn/" target="_blank" rel='noreferrer'> <img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/payoo.jpg " alt=" " /></a>
                                    </div>
                                    <div className="col ">
                                        <a href="https://portal.vietcombank.com.vn/Pages/Home.aspx" target="_blank" rel='noreferrer'> <img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/VCB.png " alt=" " /></a>
                                    </div>
                                </div>
                                <div className="row partner-r-1 ">
                                    <div className="col ">
                                        <a href="https://www.agribank.com.vn/" target="_blank" rel='noreferrer'> <img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/AGRIBANK.png " alt=" " /></a>
                                    </div>
                                    <div className="col ">
                                        <a href="https://www.vietinbank.vn/web/home/vn/index.html" target="_blank" rel='noreferrer'> <img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/VIETTINBANK.png " alt=" " /></a>
                                    </div>
                                    <div className="col ">
                                        <a href="https://www.indovinabank.com.vn/" target="_blank" rel='noreferrer'> <img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/IVB.png " alt=" " /></a>
                                    </div>
                                    <div className="col ">
                                        <a href="https://webv3.123go.vn/" target="_blank" rel='noreferrer'> <img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/123go.png " alt=" " /></a>
                                    </div>
                                    <div className="col ">
                                        <a href="https://laban.vn/" target="_blank" rel='noreferrer'> <img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/laban.png " alt=" " /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 iApp ">
                            <h3>MOBILE APP</h3>
                            <a href=" " className="pr-3 "><img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/apple-logo.png " alt=" " /></a>
                            <a href=" "><img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/android-logo.png " alt=" " /></a>
                        </div>
                        <div className="col-md-2 iSocial ">
                            <h3>SOCIAL</h3>
                            <a href=" " className="pr-3 "><img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/facebook-logo.png " alt=" " /></a>
                            <a href=" "><img src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/zalo-logo.png " alt=" " /></a>
                        </div>
                    </div>
                    <hr className="hrFooter" />
                    <div className="row ">
                        <div className="col-12 col-sm-1 ">
                            <img className="VNC " src="./img/TIX - Đặt Vé Nhanh Nhất _ Trang chủ_files/zion-logo.jpg " alt=" " />
                        </div>
                        <div className="col-12 col-sm-9 footer__info ">
                            <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                            <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
                            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,<br />đăng ký thay đổi lần&nbsp;thứ&nbsp;30, ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí Minh cấp.</p>
                            <p>Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436<br />Email: <a href="mailto:support@tix.vn " style={{ color: '#FB4226' }}>support@tix.vn</a></p>
                        </div>
                        <div className="col-12 col-sm-2 ">
                            <a href=" ">
                                <img className="BCT " src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png " alt=" " />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
