import React, { Fragment } from 'react'
import Header from './structureCombine/Header'
import AsideTopbanner from './structureCombine/AsideTopbanner'
import Main from './structureCombine/Main'
import AsideAside from './structureCombine/AsideAside'
import Footer from './structureCombine/Footer'
import './Home.css'

function Home() {
    return (
        <Fragment>
            <Header />
            <AsideTopbanner />
            <Main />
            <AsideAside />
            <Footer />
        </Fragment>
    )
}

export default Home