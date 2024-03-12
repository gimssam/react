import React from 'react';
import './SectionHomepage.css'
function SectionHomepage({SectionHomepageImg, SectionHomepageImg2}) {
    const bgPath = `url(./images/wwdc21-hero-large_2x.jpeg)`;
    const style = {backgroundImage: bgPath};
    console.log(style);
    return (
        <section className="homepage">
            <ul className="main_img">
                <li className="first" style={style}>
                    <div className="main_img_text">
                        <h3>
                            <img src="./images/wwdc21.svg" alt="wwdc21타이틀이미지" />
                            {/* <img src = {SectionHomepageImg} alt="wwdc21타이틀이미지" /> */}
                        </h3>
                        <h4>
                            <span className="nowrap">WWDC21</span>
                        </h4>
                        <h5>
                            Get ready for an all-online <br />
                            experience. Coming
                            <span>June 7</span>.
                        </h5>
                    </div>
                </li>
                <li>
                    <h3>
                        Submit your next generation <br/>
                        app to the AppStore.
                    </h3>
                    <h4>
                        {/* <img src="./images/ios-14-large_2x.png" alt="ios14제품들" /> */}
                        <img src = {SectionHomepageImg2} alt="ios14제품들" />
                    </h4>
                </li>
            </ul>
        </section>
    );
}

export default SectionHomepage

SectionHomepage.defaultProps = {
    SectionHomepageImg: "./images/wwdc21.svg",
    SectionHomepageImg2: "./images/ios-14-large_2x.png",

}