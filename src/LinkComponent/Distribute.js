import React from 'react'
import Header from '../structureCombine/Header'
import Footer from '../structureCombine/Footer'
import './linkcomponent.css'
function Distribute() {
    return (
        <div className="linkComponent">
            <Header />
            <section>
                <h2>Distribute</h2>
                <p>Distribute Contents</p>
                <img src = "./img/Distribute.png" alt="Distribute"/>
            </section>
            <Footer />
        </div>
    )
}

export default Distribute
