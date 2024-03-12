import React from 'react'
import { Link } from 'react-router-dom'
import './FooterLegal.css'

function FooterLegal() {
    return (
        <section id="legal">
            <h3>To view the latest developer news, visit <Link to="/news/">News and Updates</Link>.</h3>
            <div>
                <div>
                    Copyright &copy; 2021 
                    <Link to="https://www.apple.com">Apple Inc.</Link> 
                    All rights reserved.
                </div>
                <div>
                    <Link to="https://www.apple.com/legal/internet-services/terms/site.html">Terms of Use</Link>
                    <Link to="https://www.apple.com/legal/privacy/en-ww/">Privacy Policy</Link>
                    <Link to="/terms/">License Agreements</Link>
                </div>
                <div>
                    <select>
                        <option value="https://developer.apple.com/">English</option>
                        <option value="https://developer.apple.com/cn/">简体中文</option>
                        <option value="https://developer.apple.com/jp/">日本語</option>
                        <option value="https://developer.apple.com/kr/">한국어</option>
                    </select>
                    <span></span>
                </div>
            </div>
        </section>
    )
}

export default FooterLegal
