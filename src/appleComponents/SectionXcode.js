import React from 'react'
import './SectionXcode.css'

function SectionXcode({SectionXcodeImg}) {
    return (
        <section className="xcode">
            <ul>
                <li>
                    <h4>Introducing Xcode 12</h4>
                    <div>
                        <img src={SectionXcodeImg} alt="xcode" />
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default SectionXcode

SectionXcode.defaultProps = {
    SectionXcodeImg: "./images/xcode-12-large_2x.png",
}
