/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0px`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer style={{zIndex:`3`, position:`fixed`, bottom:`0px`, left:`0px`, fontSize:`12px`, paddingLeft:`15px`, width:`100%`, background:`black`, paddingTop:`1px`}}>
          &copy; SecondLife Harvest Inc. {new Date().getFullYear()}
          <div style={{float:`right`}}>
          <form style={{marginBottom: `0px`, height: `27px`}} action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="MZGQXV9BD72NC" />
          <input style={{padding: `0px`}} type="image" src="https://www.secondlifeharvest.org/static/799779d867a7af13636ffcdc5ed68a3d/d0486/donate-button.png" width="90" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
