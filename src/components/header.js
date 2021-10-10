import { Link } from "gatsby"
import React from "react"

const Header = () => (
    <header>
        <div className="innerHeader">
            <div className="logo">
                <Link to="/">Portfolio</Link>
            </div>
            <div className="navigation">
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/career">Career</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </div>
    </header>
)

export default Header