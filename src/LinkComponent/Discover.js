import React from 'react'
import Header from '../structureCombine/Header'
import Footer from '../structureCombine/Footer'
import './linkcomponent.css'
function Discover() {
    return (
        <div className="linkComponent">
            <Header />
            <section>
                <h2>Discover</h2>
                <p>Discover Contents</p>
                <img src = "./img/Discover.png" alt="Discover이미지"/>
            </section>
            <Footer />
        </div>
    )
}

export default Discover
