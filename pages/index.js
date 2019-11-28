import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../layouts/default'
import Marquee from '../components/marquee'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <Nav />
        <Marquee></Marquee>
      </Layout>
    );
  }
  
}
