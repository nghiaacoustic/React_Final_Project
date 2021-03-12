import React, { Component } from 'react'

export default class Theater extends Component {
    render() {
        return (
            <section className="box-time">
                <div className="container">
                    <div className="time-wrap clear flex">
                        <ul className="nav nav-tabs" id="box-time-tab">
                            <li>
                                <a className="active" data-toggle="tab" href="#box1"><img src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png" alt="Rap1" /></a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#box2"><img src="https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png" alt="Rap2" /></a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#box3"><img src="https://s3img.vcdn.vn/123phim/2018/09/9b240f96a233bb43203ee514a21a6004.png" alt="Rap3" /></a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#box4"><img src="https://s3img.vcdn.vn/123phim/2018/09/7b078639bd8fdb09dd83652d207c7b90.png" alt="Rap4" /></a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#box5"><img src="https://s3img.vcdn.vn/123phim/2019/10/9ff07a03371c4a09260309faa32caa55.jpg" alt="Rap5" /></a>
                            </li>
                            <li>
                                <a id="box6-tab" data-toggle="tab" href="#box6" role="tab" aria-controls="box6" aria-selected="false"><img src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" alt="Rap6.png" /></a>
                            </li>
                        </ul>
                        <div className="tab-content clear" id="contentMovie">
                            <div className="tab-pane fade show active" id="box1">
                                <div className="active tab-item clear" data-href="#box1-1">
                                    <p className="image"><img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg" alt="bhd-1" /></p>
                                    <div className="info">
                                        <h3><b>BHD Star</b> - Bitexco</h3>
                                        <p>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                                        <span>[Chi tiết]</span>
                                    </div>
                                </div>
                                <div className="tab-item clear" data-href="#box1-2">
                                    <p className="image"><img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-thao-dien-15379553942188.jpg" alt="bhd-2" /></p>
                                    <div className="info">
                                        <h3><b>BHD Star</b> - Vincom Thảo Điền</h3>
                                        <p>L5-Megamall, 159 XL Hà Nội, Q.2</p>
                                        <span>[Chi tiết]</span>
                                    </div>
                                </div>
                                <div className="tab-item clear" data-href="#box1-3">
                                    <p className="image"><img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-3-2-15379527367766.jpg" alt="bhd-3" /></p>
                                    <div className="info">
                                        <h3><b>BHD Star</b> - Vincom 3/2</h3>
                                        <p>L3-Bitexco Icon 68, 2 Hải Triều, Q.1L5-Vincom 3/2, 3C Đường 3/2, Q.10</p>
                                        <span>[Chi tiết]</span>
                                    </div>
                                </div>
                                <div className="tab-item clear" data-href="#box1-4">
                                    <p className="image"><img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-pham-hung-15379533093101.jpg" alt="bhd-4" /></p>
                                    <div className="info">
                                        <h3><b>BHD Star</b> - Phạm Hùng</h3>
                                        <p>L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh</p>
                                        <span>[Chi tiết]</span>
                                    </div>
                                </div>
                                <div className="tab-item clear" data-href="#box1-5">
                                    <p className="image"><img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-quang-trung-15379536724871.jpg" alt="bhd-5" /></p>
                                    <div className="info">
                                        <h3><b>BHD Star</b> - Vincom Quang Trung</h3>
                                        <p>B1-Vincom QT, 190 Quang Trung, Gò Vấp</p>
                                        <span>[Chi tiết]</span>
                                    </div>
                                </div>
                                <div className="tab-item clear" data-href="#box1-6">
                                    <p className="image"><img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-le-van-viet-15379553262189.jpg" alt="bhd-6" /></p>
                                    <div className="info">
                                        <h3><b>BHD Star</b> - Vincom Lê Văn Việt</h3>
                                        <p>L4-Vincom Plaza, 50 Lê Văn Việt, Q.9</p>
                                        <span>[Chi tiết]</span>
                                    </div>
                                </div>
                            </div>
                            {/* End tab-pane box1 */}
                            <div className="tab-pane fade" id="box2">
                                <div className="active tab-item clear" data-href="#box2-1">
                                    <p className="image"><img src="https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg" alt="cinestar-1" /></p>
                                    <div className="info">
                                        <h3><b>CNS</b> - Hai Bà Trưng</h3>
                                        <p>135 Hai Bà Trưng, Bến Nghé, Q.1</p>
                                        <span>[Chi tiết]</span>
                                    </div>
                                </div>
                                <div className="tab-item clear" data-href="#box2-2">
                                    <p className="image"><img src="https://s3img.vcdn.vn/123phim/2018/09/cinestar-quoc-thanh-15379636956745.jpg" alt="cinestar-2" /></p>
                                    <div className="info">
                                        <h3><b>CNS</b> - Quốc Thanh</h3>
                                        <p>271 Nguyễn Trãi, Q.1</p>
                                        <span>[Chi tiết]</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="box3">
                                <div className="active tab-item clear" data-href="#box3-1">
                                    <p className="image"><img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" alt="bhd-star-bitexco-15379552241200" /></p>
                                    <div className="info">
                                        <h3><b>DDC</b> - Đống Đa</h3>
                                        <p>890 Trần Hưng Đạo, Q.5</p>
                                        <span>[Chi tiết]</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="box4">
                                <div className="active tab-item clear" data-href="#box4-1">
                                    <p className="image"><img src="https://s3img.vcdn.vn/123phim/2018/09/mega-gs-cao-thang-15380164745357.jpg" alt="s3img-vcdn" /></p>
                                    <div className="info">
                                        <h3><b>MegaGS</b> - Cao Thắng</h3>
                                        <p>19 Cao Thắng, Q.3</p>
                                        <span>[Chi tiết]</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="box5">
                                <div className="active tab-item clear" data-href="#box5-1">
                                    <p className="image"><img src="https://s3img.vcdn.vn/123phim/2019/11/dcine-ben-thanh-15738149453578.png" alt="dcine-BT" /></p>
                                    <div className="info">
                                        <h3><b>DCine</b> - Bến Thành</h3>
                                        <p>6 Mạc Đĩnh Chi, Bến Nghé, Quận 1, Hồ Chí Minh</p>
                                        <span>[Chi tiết]</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="box6">
                                <div className="active tab-item clear" data-href="#box6-1">
                                    <p className="image"><img src="https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-phu-tho-15383865322515.jpg" alt="bitexco-1" /></p>
                                    <div className="info">
                                        <h3><b>Lotte</b> - Phú Thọ</h3>
                                        <p>L4-Lotte Mart Phú Thọ, Q.11</p>
                                        <span>[Chi tiết]</span>
                                    </div>
                                </div>
                                <div className="tab-item clear" data-href="#box6-2">
                                    <p className="image"><img src="https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-nam-sai-gon-15383867312967.jpg" alt="bhd-star-vincom-thao-dien-15379553942188" /></p>
                                    <div className="info">
                                        <h3><b>Lotte</b> - Nam Sài Gòn</h3>
                                        <p>L3-Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7</p>
                                        <span>[Chi tiết]</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content2" id="contentMovie2">
                                <div>
                                    <div className="tab-pane active" id="box1-1">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/tiec-trang-mau-blood-moon-party-16016226514166_60x60.png" alt="blood-moon" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">Tiệc Trăng Máu - Blood Moon Party</span>
                                                    <time>100 phút - TIX 9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/09/cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60.png" alt="tenet-15768107031731_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c16</span>
                                                    <span className="name">Cục Nợ Hóa Cục Cưng - Pawn</span>
                                                    <time>120 phút - TIX 6.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:40</span> ~ 144:40</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="rom-c18-15996245056088_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c18</span>
                                                    <span className="name"> Sóng Thần Ở Haeundae - Tidal Wave</span>
                                                    <time>91 phút - TIX 7.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>11:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/r/s/rsz_alone_-__i_d_ch_x_c_s_ng_-_official_poster_1.jpg" alt="cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">Đại dịch xác sống</span>
                                                    <time>113 phút - TIX 8.5 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                    </div>
                                    <div className="tab-pane" id="box1-2">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src alt="rom-c18-15996245056088_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c18</span>
                                                    <span className="name">Ròm -</span>
                                                    <time>91 phút - TIX 7.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>11:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="tenet-15768107031731_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c16</span>
                                                    <span className="name">Tenet -</span>
                                                    <time>120 phút - TIX 6.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:40</span> ~ 144:40</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">Cục Nợ Hóa Cục Cưng - Pawn</span>
                                                    <time>113 phút - TIX 8.5 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                    </div>
                                    <div className="tab-pane" id="box1-3">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="tenet-15768107031731_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c16</span>
                                                    <span className="name">Tenet -</span>
                                                    <time>120 phút - TIX 6.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:40</span> ~ 144:40</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">Cục Nợ Hóa Cục Cưng - Pawn</span>
                                                    <time>113 phút - TIX 8.5 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                    </div>
                                    <div className="tab-pane" id="box1-4">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="rom-c18-15996245056088_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c18</span>
                                                    <span className="name">Ròm -</span>
                                                    <time>91 phút - TIX 7.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>11:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="tenet-15768107031731_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c16</span>
                                                    <span className="name">Tenet -</span>
                                                    <time>120 phút - TIX 6.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:40</span> ~ 144:40</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">Cục Nợ Hóa Cục Cưng - Pawn</span>
                                                    <time>113 phút - TIX 8.5 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                    </div>
                                    <div className="tab-pane" id="box1-5">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">Cục Nợ Hóa Cục Cưng - Pawn</span>
                                                    <time>113 phút - TIX 8.5 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                    </div>
                                    <div className="tab-pane" id="box1-6">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src alt="rom-c18-15996245056088_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c18</span>
                                                    <span className="name">Ròm -</span>
                                                    <time>91 phút - TIX 7.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>11:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>13:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="tenet-15768107031731_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c16</span>
                                                    <span className="name">Tenet -</span>
                                                    <time>120 phút - TIX 6.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:40</span> ~ 144:40</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">Cục Nợ Hóa Cục Cưng - Pawn</span>
                                                    <time>113 phút - TIX 8.5 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                    </div>
                                </div>
                                {/* End div */}
                                <div>
                                    <div className="tab-pane" id="box2-1">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="coco-14967202410118" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">coco</span>
                                                    <time>109 phút - TIX 9.4 - IMDb 8.7</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="box2-2">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="tenet-15768107031731_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c16</span>
                                                    <span className="name">Tenet -</span>
                                                    <time>120 phút - TIX 6.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:40</span> ~ 144:40</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">Cục Nợ Hóa Cục Cưng - Pawn</span>
                                                    <time>113 phút - TIX 8.5 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                    </div>
                                </div>
                                {/* End div */}
                                <div>
                                    <div className="tab-pane" id="box3-1">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="coco-14967202410118" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">coco</span>
                                                    <time>109 phút - TIX 9.4 - IMDb 8.7</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="box3-2">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="tenet-15768107031731_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c16</span>
                                                    <span className="name">Tenet -</span>
                                                    <time>120 phút - TIX 6.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:40</span> ~ 144:40</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">Cục Nợ Hóa Cục Cưng - Pawn</span>
                                                    <time>113 phút - TIX 8.5 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                    </div>
                                </div>
                                {/* End div */}
                                <div>
                                    <div className="tab-pane" id="box4-1">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">coco</span>
                                                    <time>109 phút - TIX 9.4 - IMDb 8.7</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="box4-2">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="tenet-15768107031731_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c16</span>
                                                    <span className="name">Tenet -</span>
                                                    <time>120 phút - TIX 6.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:40</span> ~ 144:40</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">Cục Nợ Hóa Cục Cưng - Pawn</span>
                                                    <time>113 phút - TIX 8.5 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                    </div>
                                </div>
                                {/* End div */}
                                <div>
                                    <div className="tab-pane" id="box5-1">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">coco</span>
                                                    <time>109 phút - TIX 9.4 - IMDb 8.7</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="box5-2">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="tenet-15768107031731_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c16</span>
                                                    <span className="name">Tenet -</span>
                                                    <time>120 phút - TIX 6.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:40</span> ~ 144:40</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">Cục Nợ Hóa Cục Cưng - Pawn</span>
                                                    <time>113 phút - TIX 8.5 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                    </div>
                                </div>
                                {/* End div */}
                                <div>
                                    <div className="tab-pane" id="box6-1">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">coco</span>
                                                    <time>109 phút - TIX 9.4 - IMDb 8.7</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="box6-2">
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="tenet-15768107031731_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label red">c16</span>
                                                    <span className="name">Tenet -</span>
                                                    <time>120 phút - TIX 6.9 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:40</span> ~ 144:40</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                        <div className="item">
                                            <div className="item-head">
                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" alt="cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60" />
                                                <div className="item-head--left">
                                                    <span className="label green">p</span>
                                                    <span className="name">Cục Nợ Hóa Cục Cưng - Pawn</span>
                                                    <time>113 phút - TIX 8.5 - IMDb 0</time>
                                                </div>
                                            </div>
                                            <div className="item-bot">
                                                <h4>2D Digital</h4>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                                <a href="#" className="btn-time"><span>12:05</span> ~ 13:54</a>
                                            </div>
                                        </div>
                                        {/* End item */}
                                    </div>
                                </div>
                                {/* End div */}
                            </div>
                            {/* End tab content2 */}
                        </div>
                        {/* End tab content */}
                    </div>
                </div>
            </section>

        )
    }
}
