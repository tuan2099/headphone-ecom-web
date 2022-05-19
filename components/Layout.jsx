import React from 'react'
import Head from 'next/head'
import Nav from './Nav';
import Footer from './Footer'
function Layout({children}) {
  return (
    <div className = "layout">
        <Head>
          <title>Tun Headphone Store</title>
        </Head>
        <header>
          <Nav/>
        </header>
        <main className = "main-container" >
            {children}
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

export default Layout