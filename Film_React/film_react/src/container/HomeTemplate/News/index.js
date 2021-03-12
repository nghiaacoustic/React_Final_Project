import React, { Component } from 'react'

export default class News extends Component {
    render() {
        return (
            <section className="intro ">
                <div className="menuIntro ">
                    <ul className="nav nav-tabs " id="myTab " role="tablist ">
                        <li className="nav-item " role="presentation ">
                            <a className="nav-link active first " id="home-tab " data-toggle="tab " href="#tabMenu1 " role="tab " aria-controls="home " aria-selected="true ">Điện Ảnh 24h</a>
                        </li>
                        <li className="nav-item " role="presentation ">
                            <a className="nav-link second " id="profile-tab " data-toggle="tab " href="#tabMenu2 " role="tab " aria-controls="profile " aria-selected="false ">Review</a>
                        </li>
                        <li className="nav-item " role="presentation ">
                            <a className="nav-link third " id="profile-tab " data-toggle="tab " href="#tabMenu3 " role="tab " aria-controls="profile " aria-selected="false ">Khuyến Mãi</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content " id="myTabContent ">
                    <div className="tab-pane fade show active " id="tabMenu1 " role="tabpanel " aria-labelledby="home-tab ">
                        <div className="intro__content ">
                            <div className="top ">
                                <div className="row ">
                                    <div className="left col-md-6 ">
                                        <a href="https://www.youtube.com/watch?v=L3pk_TBkihU&ab_channel=WarnerBros.Pictures " target="_blank ">
                                            <img src="./img/review1.png " alt="avt " />
                                        </a>
                                        <a href="# ">
                                            <h1>TENET công bố ngày khởi chiếu chính thức tại Việt Nam</h1>
                                        </a>
                                        <p>Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam. </p>
                                        <i className="fa fa-thumbs-up "> 1</i>
                                        <i className="fa fa-comment-alt "> 0</i>
                                    </div>
                                    <div className="right col-md-6 ">
                                        <a href="https://www.youtube.com/watch?v=J8riYadR3Nk&t=3s&ab_channel=BHDStarCineplex " target="_blank ">
                                            <img src="./img/review2.png " alt="avt " />
                                        </a>
                                        <a href="# ">
                                            <h1>Bán Đảo Peninsula là bom tấn xác sống không thể bỏ lỡ!</h1>
                                        </a>
                                        <p>Là phần phim khép lại bộ ba xác sống (Seoul Station, Train to Busan - 2016) của đạo diễn Yeon Sang Ho, mới đây, bom tấn Bán Đảo (Train to Busan 2/Peninsula) vừa chính thức tung trailer hé lộ những tình tiết mới cực hấp
                                        dẫn.
              </p>
                                        <i className="fa fa-thumbs-up "> 1</i>
                                        <i className="fa fa-comment-alt "> 0</i>
                                    </div>
                                </div>
                            </div>
                            <div className="bot ">
                                <div className="row ">
                                    <div className="left col-md-4 ">
                                        <a href="https://www.youtube.com/watch?v=L3pk_TBkihU&ab_channel=WarnerBros.Pictures " target="_blank ">
                                            <img src="./img/review3.png " alt="avt " />
                                        </a>
                                        <a href="# ">
                                            <h1>Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan
                </h1>
                                        </a>
                                        <p>Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng. </p>
                                        <i className="fa fa-thumbs-up "> 1</i>
                                        <i className="fa fa-comment-alt "> 0</i>
                                    </div>
                                    <div className="right col-md-4 ">
                                        <a href="https://www.youtube.com/watch?v=J8riYadR3Nk&t=3s&ab_channel=BHDStarCineplex " target="_blank ">
                                            <img src="./img/review4.png " alt="avt " />
                                        </a>
                                        <a href="# ">
                                            <h1>Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn</h1>
                                        </a>
                                        <p>Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68 triệu vé, hai tên tuổi lão làng trong làng điện ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết Tận – một bộ phim hành động siêu “nặng đô”.</p>
                                        <i className="fa fa-thumbs-up "> 1</i>
                                        <i className="fa fa-comment-alt "> 0</i>
                                    </div>
                                    <div className="rightLast col-md-4 ">
                                        <div className="item item1 ">
                                            <a href="# ">
                                                <img src="./img/review5.png " alt="avt " />
                                            </a>
                                            <a href="# ">
                                                <p>6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình...</p>
                                            </a>
                                        </div>
                                        <div className="item item2 ">
                                            <a href="# ">
                                                <img src="./img/review6.png " alt="avt " />
                                            </a>
                                            <a href="# ">
                                                <p>Gái Già Lắm Chiêu V – Những cuộc đời vương giả</p>
                                            </a>
                                        </div>
                                        <div className="item item3 ">
                                            <a href="# ">
                                                <img src="./img/review7.png " alt="avt " />
                                            </a>
                                            <a href="# ">
                                                <p>Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm...</p>
                                            </a>
                                        </div>
                                        <div className="item item4 ">
                                            <a href="# ">
                                                <img src="./img/review8.png " alt="avt " />
                                            </a>
                                            <a href="# ">
                                                <p>5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ...</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button>XEM THÊM</button>
                        </div>
                    </div>
                    <div className="tab-pane fade " id="tabMenu2 " role="tabpanel " aria-labelledby="profile-tab ">
                    </div>
                </div>
            </section>

        )
    }
}
