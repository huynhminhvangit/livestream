import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <div className="navbar navbar-expand-lg navbar-dark bg-primary">
    <nav className="container">
      <Link href="/"><a className="navbar-brand">LIVESTREAM</a></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href="/"><a className="nav-link">Trang Chủ <span className="sr-only">(current)</span></a></Link>
          </li>
          <li className="nav-item">
            <Link href="/lich-phat-song"><a className="nav-link" >Lịch phát sóng</a></Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://facebook.com/huynh.m.vang" target="_blank">Fanpage</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://diendan.livestream.com" target="_blank">Cộng đồng</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <div className="btn-group">
            <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Đăng nhập / Đăng ký&nbsp;
              <span className="sr-only">Đăng nhập / Đăng ký</span>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Đăng nhập</a>
              <a className="dropdown-item" href="#">Đăng ký</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Đăng nhập bằng facebook</a>
              <a className="dropdown-item" href="#">Đăng nhập bằng google</a>
            </div>
          </div>
        </form>
      </div>
    </nav>
  </div>
)

export default Nav
