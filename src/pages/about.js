import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import background from "../images/kids-eating.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className={`indexWrapper`} style={{ backgroundImage: `url(${background})`, top:`0`, left: `0`, zIndex: `0`, width: `100%`, height:`100%`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat`, backgroundAttachment: `local`, backgroundSize: `cover`, position: `fixed`, overflowY:`scroll`}}>

    <div style={{zIndex: `1`, maxWidth:`600px`, marginBottom: `1.45rem`, marginTop: `7rem`, marginLeft: `auto`, marginRight: `auto`, padding: `20px` }}>
      <p style={{textAlign:`center`, width:`100%`}}>
        Coming Soon!
      </p>


      <Link style={{marginTop: `1rem`, width: `160px`, marginRight: `auto`, marginLeft: `auto`, display: `block`, textDecoration: `none`, textAlign: `center`}} className={`button`} to="/page-2/">DONATE NOW</Link>
    </div>
    </div>
  </Layout>
)

export default SecondPage
