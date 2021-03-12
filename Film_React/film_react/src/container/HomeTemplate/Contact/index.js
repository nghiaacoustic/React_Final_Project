import React, { Component } from 'react'
import mobile from './../../../asset/img/mobile.png'
import bgImg from './../../../asset/img/backapp.jpg'


var backapp = {
    backgroundImage: `url(${bgImg})`
};


export default class Contact extends Component {
    render() {
        return (
            <section className="contact ">
                <div className="contact__content " style={backapp}>
                    <div className="row contact__pr ">
                        <div className="col-sm-6 contact__app ">
                            <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
                            <p> Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                            <button>App miễn phí - Tải về ngay!</button>
                            <p className="version ">TIX có hai phiên bản <a href=" ">iOS</a> &amp; <a href=" ">Android</a></p>
                        </div>
                        <div className="col-12 col-sm-6 contact__img ">
                            <div>
                                <img className="mobile " src={mobile} alt=" " />
                                <div className="mobile__content " ><img src alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
