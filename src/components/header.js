import { Link } from "gatsby"
import React from "react"
import {AnchorLink} from "gatsby-plugin-anchor-links"

const Header = () => (
    <header>
        <div className="header">
            <div className="logo">
                <Link to="/">Portfolio</Link>
            </div>
            <div className="navigation">
                <nav>
                    <AnchorLink to="#about" title="About"/>
                    <AnchorLink to="#career" title="Career"/>
                </nav>
            </div>
        </div>
    </header>
)

export default Header