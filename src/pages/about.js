import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import background from "../images/table-bg.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className={`indexWrapper`} style={{ backgroundImage: `url(${background})`, top:`0`, left: `0`, zIndex: `0`, width: `100%`, height:`100%`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat`, backgroundAttachment: `local`, backgroundSize: `cover`, position: `fixed`  }}>

    <div style={{zIndex: `1`, maxWidth:`600px`, marginBottom: `1.45rem`, marginTop: `7rem`, marginLeft: `auto`, marginRight: `auto`, padding: `20px` }}>
      <p>
        SecondLife Harvest, Inc. is a public charity aimed at eradicating Food Insecurity
        by eliminating food waste derived from prepared un-served meals.
      </p>

      <p>
      One in five children in our community lives in a food insecure household.
      </p>

      <p>Too much food is wasted and never reaches those in our community who are food insecure and in desperate need of nutritious options.  This wasted food should be preserved in a safe and efficient manner and repurposed to those who are in need.  By freezing this prepared unserved food, it can be delivered to food pantries and shelters to increase their available servings and/or decrease their operating costs by diverting the cost of food purchases.
      </p>
      <Link style={{marginTop: `1rem`, width: `160px`, marginRight: `auto`, marginLeft: `auto`, display: `block`, textDecoration: `none`, textAlign: `center`}} className={`button`} to="/page-2/">DONATE NOW</Link>
    </div>
    </div>
  </Layout>
)

export default SecondPage
