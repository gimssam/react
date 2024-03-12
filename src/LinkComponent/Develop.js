import React from 'react'
import Header from '../structureCombine/Header'
import Footer from '../structureCombine/Footer'
import './linkcomponent.css'
function Develop() {
    return (
        <div className="linkComponent">
            <Header />
            <section>
                <h2>Develop</h2>
                <p>Develop Contents</p>
                <img src = "./img/Develop.png" alt="Develop"/>
            </section>
            <Footer />
        </div>
    )
}

export default Develop
