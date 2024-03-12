import React from 'react'
import Header from '../structureCombine/Header'
import Footer from '../structureCombine/Footer'
import './linkcomponent.css'
function Design() {
    return (
        <div className="linkComponent">
            <Header />
            <section>
                <h2>Design</h2>
                <p>Design Contents</p>
                <img src = "./img/Design.png" alt="Design"/>
            </section>
            <Footer />
        </div>
    )
}

export default Design
