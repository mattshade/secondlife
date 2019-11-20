import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import background from "../images/holding-hands.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className={`indexWrapper`} style={{ backgroundImage: `url(${background})`, top:`0`, left: `0`, zIndex: `0`, width: `100%`, height:`100%`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat`, backgroundAttachment: `local`, backgroundSize: `cover`, position: `fixed`  }}>

    <div style={{zIndex: `1`, maxWidth:`600px`, marginBottom: `1.45rem`, marginTop: `7rem`, marginLeft: `auto`, marginRight: `auto`, textAlign: `center`, padding: `20px` }}>
      <p>
      Coming soon
      </p>
      <Link style={{marginTop: `1rem`, width: `160px`, marginRight: `auto`, marginLeft: `auto`, display: `block`, textDecoration: `none`, color:`black`}} className={`button`} to="/page-2/">DONATE NOW</Link>
    </div>
    </div>
  </Layout>
)

export default SecondPage
