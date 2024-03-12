import React from 'react'
import Header from '../structureCombine/Header'
import Footer from '../structureCombine/Footer'
import './linkcomponent.css'

function ContentsEach(props) {
    conEach.map(
        contents => ({})
    );
    return (
        <div className="contentseach">
            <Header />
            <section>
                <h2>EACH CONTENTS COMPONENTS</h2>
                <p>페이지 콘텐츠들 Link</p>
                {/* <img src = "./img/appleComponent03.png" alt="EACH CONTENTS IMG"/> */}
                <img src = {conEach[0].eachImg1} alt="EACH CONTENTS IMG"/>
            </section>
            <Footer />
        </div>
    )
}

export default ContentsEach


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