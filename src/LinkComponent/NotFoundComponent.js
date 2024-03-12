import React from 'react';
import Header from '../structureCombine/Header'
import Footer from '../structureCombine/Footer'
import './linkcomponent.css'

const NotFoundComponent = () => {
    // const imgSrc = `url(./images/parking-page.jpg)`;
    // const style = {backgroundImage: imgSrc, width: '100vw', height: '100vh'};
    return (
        <div className="linkComponent">
            <Header />
            <section>
                <h2>FileNotFound</h2>
                <p>Dear friend, this URL was not found</p>
                {/* 절대경로 써 줘야함 (./제거) Browser Router 시 */}
                <img src = "./images/parking-page.jpg" alt="NotFoundComponent"/>
            </section>
            <Footer />
        </div>
    )
}
export default NotFoundComponent;

// import React from 'react';

// const NotFoundComponent = () => {
//     return (
//         <div>
//             <h5>Dear friend, this URL was not found</h5>
//         </div>
//     )
// }
// export default NotFoundComponent;