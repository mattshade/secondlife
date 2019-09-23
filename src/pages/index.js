import React from "react"
import { Link } from "gatsby"

import Layout from "../components/homepageLayout"
import Image from "../components/image"
import SEO from "../components/seo"
import background from "../images/kids-home.jpg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className={`indexWrapper`} style={{ backgroundImage: `url(${background})`, top:`0`, left: `0`, zIndex: `0`, width: `100%`, height:`100%`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat`, backgroundAttachment: `local`, backgroundSize: `cover`, position: `fixed`  }}>

    <div style={{zIndex: `1`, maxWidth:`300px`, marginBottom: `1.45rem`, marginTop: `7rem`, marginLeft: `auto`, marginRight: `auto`, textAlign: `center` }}>
      <Image alt="SecondLife Harvest" filename="secondlife-large.png" />
      <Link style={{marginTop: `1rem`, width: `160px`, marginRight: `auto`, marginLeft: `auto`, display: `block`, textDecoration: `none`}} className={`button`} to="/donate/">DONATE NOW</Link>
    </div>
    </div>

  </Layout>
)

export default IndexPage
