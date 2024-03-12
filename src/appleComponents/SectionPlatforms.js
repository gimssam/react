import React from 'react'
import { Link } from 'react-router-dom'
import './SectionPlatforms.css'

function SectionPlatforms({platforms}) {
    return (
        <section class="platforms">
            <h3>Apple Platforms</h3>
            <div class="links">
                <Link to="/ios/">
                    {/* <p><img src="./svg/icon-ios-dark.svg" alt="플랫폼아이콘" /></p> */}
                    <p><img src={platforms.platformImg1} alt={platforms.platformAlt} /></p>
                    <p class="nowrap">iOS</p>
                </Link>
                <Link to="/ipados/">
                    {/* <p><img src="./svg/icon-ipados-dark.svg" alt="플랫폼아이콘" /></p> */}
                    <p><img src={platforms.platformImg2} alt={platforms.platformAlt} /></p>
                    <p class="nowrap">iPadOS</p>
                </Link>
                <Link to="/macos/">
                    {/* <p><img src="./svg/icon-macos-dark.svg" alt="플랫폼아이콘" /></p> */}
                    <p><img src={platforms.platformImg3} alt={platforms.platformAlt} /></p>
                    <p class="nowrap">macOS</p>
                </Link>
                <Link to="/tvos/">
                    {/* <p><img src="./svg/icon-tvos-dark.svg" alt="플랫폼아이콘" /></p> */}
                    <p><img src={platforms.platformImg4} alt={platforms.platformAlt} /></p>
                    <p class="nowrap">tvOS</p>
                </Link>
                <Link to="/watchos/">
                    {/* <p><img src="./svg/icon-watchos-dark.svg" alt="플랫폼아이콘" /></p> */}
                    <p><img src={platforms.platformImg5} alt={platforms.platformAlt} /></p>
                    <p class="nowrap">watchOS</p>
                </Link>
            </div>
        </section>
    )
}

export default SectionPlatforms
