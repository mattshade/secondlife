import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import background from "../images/kids-running.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={`indexWrapper`} style={{ backgroundImage: `url(${background})`, top:`0`, left: `0`, zIndex: `0`, width: `100%`, height:`100%`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat`, backgroundAttachment: `local`, backgroundSize: `cover`, position: `fixed`, overflowY:`scroll`}}>
    <h1 style={{fontSize:`11rem`, textAlign:`center`, marginTop:`7rem`, opacity:`.6`}}>404</h1>
    <p  style={{textAlign:`center`, fontSize:`1.4rem`}}>Oops! There's been a glitch...</p>
    <p style={{textAlign:`center`}}> We're not sure what happened but you can try going back, or jump to the <Link style={{textDecoration: `none`, textAlign: `center`, color:`#e0b426`}}  to="/">homepage</Link>.</p>

    </div>

  </Layout>
)

export default NotFoundPage
