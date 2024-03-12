import React from 'react'
import { Link } from 'react-router-dom'
import './FooterNavigation.css'

function FooterNavigation() {
    return (
        <div className="footer_content">
            <h2>Developer Footer</h2>
            <nav>
                <div>
                    <h3><Link to="/Discover/">Discover</Link></h3>
                    <ul>
                        <li><Link to="/ios/">iOS</Link></li>
                        <li><Link to="/ipados/">iPadOS</Link></li>
                        <li><Link to="/macos/">macOS</Link></li>
                        <li><Link to="/tvos/">tvOS</Link></li>
                        <li><Link to="/watchos/">watchOS</Link></li>
                        <li><Link to="/safari/">Safari and Web</Link></li>
                        <li><Link to="/games/">Games</Link></li>
                        <li><Link to="/business/">Business</Link></li>
                        <li><Link to="/education/">Education</Link></li>
                        <li><Link to="/wwdc/">WWDC</Link></li>
                    </ul>
                </div>
                <div>
                    <h3><Link to="/design/">Design</Link></h3>
                    <ul className="footer-directory-column-section-list">
                        <li><Link to="/design/human-interface-guidelines/">Human Interface Guidelines</Link></li>
                        <li><Link to="/design/resources/">Resources</Link></li>
                        <li><Link to="/videos/design/">Videos</Link></li>
                        <li><Link to="/design/awards/">Apple Design Awards</Link></li>
                        <li><Link to="/fonts/">Fonts</Link></li>
                        <li><Link to="/accessibility/">Accessibility</Link></li>
                        <li><Link to="/localization/">Localization</Link></li>
                        <li><Link to="/accessories/">Accessories</Link></li>
                    </ul>
                </div>
                <div>
                    <h3><Link to="/develop/">Develop</Link></h3>
                    <ul>
                        <li><Link to="/xcode/">Xcode</Link></li>
                        <li><Link to="/swift/">Swift</Link></li>
                        <li><Link to="/swift-playgrounds/">Swift Playgrounds</Link></li>
                        <li><Link to="/testflight/">TestFlight</Link></li>
                        <li><Link to="/documentation/">Documentation</Link></li>
                        <li><Link to="/videos/">Videos</Link></li>
                        <li><Link to="/download/">Downloads</Link></li>
                    </ul>
                </div>
                <div>
                    <h3><Link to="/distribute/">Distribute</Link></h3>
                    
                    <ul>
                        <li><Link to="/programs/">Developer Program</Link></li>
                        <li><Link to="/app-store/">App Store</Link></li>
                        <li><Link to="/app-store/review/">App Review</Link></li>
                        <li><Link to="/macos/distribution/">Mac Software</Link></li>
                        <li><Link to="/business/distribute/">Apps for Business</Link></li>
                        <li><Link to="/safari/extensions/">Safari Extensions</Link></li>
                        <li><Link to="/app-store/promote/">Marketing Resources</Link></li>
                        <li><Link to="/softwarelicensing/">Trademark Licensing</Link></li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3><Link to="/support/">Support</Link></h3>
                        <ul>
                            <li><Link to="/support/articles/">Articles</Link></li>
                            <li><Link to="https://developer.apple.com/forums/">Developer Forums</Link></li>
                            <li><Link to="/bug-reporting/">Feedback &amp; Bug&nbsp;Reporting</Link></li>
                            <li><Link to="/system-status/">System Status</Link></li>
                            <li><Link to="/contact/">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3><Link to="/account/">Account</Link></h3>
                        <ul>
                            <li><Link to="/account/ios/certificate/">Certificates, Identifiers &amp; Profiles</Link></li>
                            <li><Link to="https://appstoreconnect.apple.com/">App Store Connect</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default FooterNavigation
