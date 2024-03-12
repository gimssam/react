import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header({alt, brandImg, searchImg}) {
    return (
        <header id="header">
            <nav>
                <ul className="gnb">
                    <li>
                        <Link to="/">
                            <img src="/images/apple-brands.svg" alt="애플로고" className="svg"/>
                            <strong>Developer</strong>
                        </Link>       
                    </li>
                    <li><Link to="/Discover">Discover</Link></li>
                    <li><Link to="/Design">Design</Link></li>
                    <li><Link to="/Develop">Develop</Link></li>
                    <li><Link to="/Distribute">Distribute</Link></li>
                    <li><Link to="/Support">Support</Link></li>
                    <li><Link to="/Account">Account</Link></li>
                    <li><Link to="/Search"><img src = {searchImg} alt = {alt} className="search" /></Link></li>
                    {/* <li><Link to="/NotFoundComponent">NotFoundComponent</Link></li> */}
                </ul>
            </nav>
        </header>
    )
}
export default Header

// 컴포넌트 데이터
Header.defaultProps = {
    alt: "이미지입니다",
    brandImg: "/svg/apple-brands.svg",
    searchImg: "/svg/search.svg",
}