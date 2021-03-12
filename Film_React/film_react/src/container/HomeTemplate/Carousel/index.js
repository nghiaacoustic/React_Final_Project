import React, { Component } from 'react'
import btnPlay from '../../../asset/img/play-video.png'
import banner1 from '../../../asset/img/banner1.jpg'
import banner2 from '../../../asset/img/banner2.jpg'
import banner3 from '../../../asset/img/banner3.jpg'
import banner4 from '../../../asset/img/banner4.jpg'
import banner5 from '../../../asset/img/banner5.png'
import banner6 from '../../../asset/img/lua-deu-gap-lua-dao-16105107337344.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//Owl Carousel Settings
const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        9999: {
            items: 2,
        },
        9999: {
            items: 3,
        },
        9999: {
            items: 4,
        },
        9999: {
            items: 5,
        }
    },
}

class Carousel extends Component {
    render() {
        return (
            <section className="banner">
                <div className="banner__content">
                        <OwlCarousel className=" owl-carousel owl-theme" {...options}>
                            <div className="row">
                                <div className="banner1 item col-12 col-md-12 col-sm-12 col-12" style={{ backgroundImage: `url(${banner6})` }}>
                                    <div className="play">
                                        <a href><img src={btnPlay} alt="play" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="banner2 item col-12 col-md-12 col-sm-12 col-12" style={{ backgroundImage: `url(${banner2})` }}>
                                    <div className="play">
                                        <a href><img src={btnPlay} alt="play" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="banner3 item col-12 col-md-12 col-sm-12 col-12" style={{ backgroundImage: `url(${banner5})` }}>
                                    <div className="play">
                                        <a href><img src={btnPlay} alt="play" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="banner4 item col-12 col-md-12 col-sm-12 col-12" style={{ backgroundImage: `url(${banner3})` }}>
                                    <div className="play">
                                        <a href><img src={btnPlay} alt="play" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="banner5 item col-sm-12 col-12" style={{ backgroundImage: `url(${banner4})` }}>
                                    <div className="play">
                                        <a href><img src={btnPlay} alt="play" /></a>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>

                        <div className="row">
                            <div className="order">
                                <div className="order__content">
                                    <select name id="phim">
                                        <option value disabled selected hidden>Phim</option>
                                        <option value>Pháp Sư Mù - (C16)</option>
                                        <option value>The Amazing Spiderman(C16)</option>
                                        <option value>Liên Minh Công Lý - Justice League (C16)</option>
                                        <option value>Chúa tể quái vật - Godzilla (C16)</option>
                                        <option value>Gia Đình Chân To Phiêu Lưu Kí - Bigfoot Family (P)</option>
                                    </select>
                                    <select name id="rap">
                                        <option value disabled selected hidden>Rạp</option>
                                        <option value disabled>Vua lòng chọn phim</option>
                                    </select>
                                    <select name id="ngayxem">
                                        <option value disabled selected hidden>Ngày Xem</option>
                                        <option value disabled>Vui lòng chọn phim và rạp</option>
                                    </select>
                                    <select name id="suatchieu">
                                        <option value disabled selected hidden>Suất Chiếu</option>
                                        <option value disabled>Vui lòng chọn phim, rạp và ngày xem</option>
                                        
                                    </select>
                                    <button className="btn btn-secondary">MUA VÉ NGAY</button>
                                </div>
                            </div>
                        </div>
                </div>
            </section>

        )
    }
}
export default Carousel
