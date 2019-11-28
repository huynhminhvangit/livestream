import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../layouts/default'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  MarqueeStop() {
    document.getElementById('my_marquee').stop()
  }
  MarqueeStart() {
    document.getElementById('my_marquee').start()
  }
  HiddenMarquee() {
    $('.div_marquee').slideUp(300)
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <Nav />
        <div className="container div_marquee">
          <div className="row">
            <div
              className="col-auto text-center my-auto"
              style={{ backgroundColor: '#000', borderLeft: '2px solid #8cba3f', color: '#fff', padding: '0.3rem 0.7rem' }}
            >
              <h5 className="m-0">THÔNG BÁO</h5>
            </div>
            <div className="col p-0 position-relative">
              <div className="bg-dark text-white position-absolute">
                <marquee
                  id="my_marquee"
                  behavior="scroll"
                  direction="left"
                  onMouseOver={() => this.MarqueeStop()}
                  onMouseOut={() => this.MarqueeStart()}
                >
                  <div className="pt-1">
                    <span className="pr-5"><div className="spinner-grow text-success" style={{ width: '1rem', height: '1rem' }} role="status"></div> Livestream cung cấp link xem bóng đá trực tuyến, giải pháp xem trực tiếp bóng đá NHANH CHÓNG, CHẤT LƯỢNG và ỔN ĐỊNH. Cập nhật liên tục lịch thi đấu, kết quả, bảng xếp hạng các giải đấu ngoại hạng anh, C1, Laliga, Seri A... </span>
                    <span className="pr-5"><div className="spinner-grow text-success" style={{ width: '1rem', height: '1rem' }} role="status"></div> Website Livestream đang trong giai đoạn thử nghiệm và hoàn thiện, phiên bản chính thức sẽ được update sớm nhất, cảm ơn các bạn đã ủng hộ! <a href="https://www.facebook.com/huynh.m.vang" target="_blank">Tham gia Group góp ý tại đây</a></span>
                    <span className="pr-5"><div className="spinner-grow text-success" style={{ width: '1rem', height: '1rem' }} role="status"></div> Kênh Youtube xem bản tin bóng đá <a href="https://www.facebook.com/huynh.m.vang" target="_blank">Đăng ký tại đây</a></span>
                  </div>
                </marquee>
              </div>
              <div className="position-absolute text-white" style={{ zIndex: 100, right: 0 }}>
                <button onClick={() => this.HiddenMarquee()} className="btn btn-sm btn-secondary" style={{ borderRadius: 0, padding: '0.35rem 0.6rem' }}><i className="fa fa-times-circle"></i></button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
}
