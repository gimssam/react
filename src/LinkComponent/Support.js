import React from 'react'
import Header from '../structureCombine/Header'
import Footer from '../structureCombine/Footer'
import './linkcomponent.css'
function Support() {
    return (
        <div className="linkComponent">
            <Header />
            <section>
                <h2>Support</h2>
                <p>Support Contents</p>
                <img src = "./img/Support.png" alt="Support"/>
            </section>
            <Footer />
        </div>
    )
}

export default Support
