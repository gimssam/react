import React from 'react'
import Header from '../structureCombine/Header'
import Footer from '../structureCombine/Footer'
import './linkcomponent.css'
function Search() {
    return (
        <div className="linkComponent">
            <Header />
            <section>
                <h2>Search</h2>
                <p>Search Contents</p>
                <img src = "./img/Search.png" alt="Search"/>
            </section>
            <Footer />
        </div>
    )
}

export default Search
