import React from 'react'
import { Link } from 'react-router-dom'
import './AsideTopbanner.css'
function AsideTopbanner() {
    return (
        <aside className = "top_banner">
            <h4>
                <Link to="#">Enroll in the App Store Small Business Program</Link>
            </h4>
        </aside>
    )
}
export default AsideTopbanner;
