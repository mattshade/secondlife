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
        <footer style={{zIndex:`3`, position:`fixed`, bottom:`0px`, left:`15px`, fontSize:`12px`}}>
          &copy; SecondLife Harvest, LLC {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
