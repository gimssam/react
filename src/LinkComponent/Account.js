import React from 'react'
import Header from '../structureCombine/Header'
import Footer from '../structureCombine/Footer'
import './linkcomponent.css'
function Account() {
    return (
        <div className="linkComponent">
            <Header />
            <section>
                <h2>Account</h2>
                <p>Account Contents</p>
                <img src = "./img/Account.png" alt="Account"/>
            </section>
            <Footer />
        </div>
    )
}

export default Account
