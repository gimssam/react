import React from 'react'
import Header from '../structureCombine/Header'
import Footer from '../structureCombine/Footer'
import './linkcomponent.css'

function FileNotFound(props) {
    conEach.map(
        contents => ({})
    );
    return (
        <div className="linkComponent">
            <Header />
            <section>
                <h2>FileNotFound</h2>
                <p>Dear friend, this URL was not found</p>
                <img src = {conEach[0].eachImg1} alt="EACH CONTENTS IMG"/>
            </section>
            <Footer />
        </div>
    )
}
export default FileNotFound

const conEach = [
    {
        eachImg1: "./img/appleComponent03.png",
        eachAlt: "EACH CONTENTS IMG",
    },
    {
        eachImg2: "./img/appleComponent02.png",
    },
    {
        eachImg3: "./img/appleComponent01.png",

    }
]