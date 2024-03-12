import React from 'react'
import { Link } from 'react-router-dom'
import './SectionPromotion.css'

function SectionPromotion({SectionPromotionImg}) {
    // 배경이미지 Build 시 인라인 스타일 방식으로 코딩해야함
    const bgTxt = `url(./images/large_2x.jpeg)`;
    const style = {backgroundImage: bgTxt};
    console.log(style);
    return (
        <section class="promos">
            <ul>
                <li>
                    <h4>App&nbsp;Store</h4>
                    <h5>
                        Explore the features and comprehensive <br />
                        benefits of distributing your apps on the <br />
                        App Store for iPhone, iPad, Mac, Apple TV, and
                        Apple Watch.
                    </h5>
                    <div>
                        <img src={SectionPromotionImg} alt="앱스토어로고" width="200" height="auto" />
                    </div>
                </li>
                <li className="last" style={style}>
                    <h4>
                        Welcome to the future of <br />
                        Mac.
                    </h4>
                    <h5>
                        <Link to="https://www.apple.com/apple-events/">Watch the event</Link>
                        <Link to="#">Play the developer video</Link>
                    </h5>
                    <div>
                        <figure>
                        </figure>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default SectionPromotion;

SectionPromotion.defaultProps = {
    SectionPromotionImg: "./svg/app-store-fff.svg",
}