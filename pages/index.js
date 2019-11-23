import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../layouts/default'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Nav />
  </div>
)

const Main = () => (
  <Layout>
    <Home />
  </Layout>
)

export default Main
