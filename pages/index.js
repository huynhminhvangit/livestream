import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../layouts/default'
import Marquee from '../components/marquee'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      marquees: [
        { message: ' Livestream cung cấp link xem bóng đá trực tuyến, giải pháp xem trực tiếp bóng đá NHANH CHÓNG, CHẤT LƯỢNG và ỔN ĐỊNH. Cập nhật liên tục lịch thi đấu, kết quả, bảng xếp hạng các giải đấu ngoại hạng anh, C1, Laliga, Seri A... '},
        { message: ' Website Livestream đang trong giai đoạn thử nghiệm và hoàn thiện, phiên bản chính thức sẽ được update sớm nhất, cảm ơn các bạn đã ủng hộ! <a href="https://www.facebook.com/huynh.m.vang" target="_blank">Tham gia Group góp ý tại đây</a>'},
        { message: ' Kênh Youtube xem bản tin bóng đá <a href="https://www.facebook.com/huynh.m.vang" target="_blank">Đăng ký tại đây</a>'}
      ]
    }
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <Nav />
        <Marquee marquees={this.state.marquees} />
      </Layout>
    );
  }
  
}
