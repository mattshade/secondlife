import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Image from "../components/image"
const Header = ({ siteTitle, menuLinks }) => (

  <header
    style={{
      background: "black",
      position: "fixed",
      zIndex: 3,
      width: `100%`,
    }}
  >
    <div
      style={{
        background: "black",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 1400,
          padding: `15px`,
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          ><div
          style={{
            width: `40px`,
          }}>
            <Image alt="SecondLife Harvest" filename="2l-logo-simple.png"  />
            </div>
          </Link>
        </h1>
        <div>
          <nav>
            <ul className="nav" style={{ display: "flex", flex: 1, margin: `0px` }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `.4rem`,
                    margin: `0rem`,
                    textTransform: `uppercase`,
                    fontWeight: `bold`,
                    fontSize: `13px`,
                  }}
                >
                  <Link style={{ color: `white`, textDecoration: `none`, }} to={link.link} data-name={link.name}>

                  {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
