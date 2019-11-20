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
 import { Link } from "gatsby"
 import "./layout.css"

 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query HomePageQuery {
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
          &copy; SecondLife Harvest, LLC {new Date().getFullYear()}
          <Link style={{padding:`0px`, width: `100px`, textAlign:`center`, display: `block`, textDecoration: `none`, float:`right`, color:`black`, borderRadius:`0px`}} className={`button`} to="/donate/">DONATE NOW</Link>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
