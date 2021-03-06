import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/kids-eating.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Success" />
    <div className={`indexWrapper`} style={{ backgroundImage: `url(${background})`, top:`0`, left: `0`, zIndex: `0`, width: `100%`, height:`100%`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat`, backgroundAttachment: `local`, backgroundSize: `cover`, position: `fixed`  }}>

    <div style={{zIndex: `1`, maxWidth:`300px`, marginBottom: `1.45rem`, marginTop: `7rem`, marginLeft: `auto`, marginRight: `auto`, textAlign: `center` }}>
    <div
style={{
textAlign: 'center',
fontSize: '26px',
paddingTop: '30px',
}}>
<p className="thanksMessage">
  Thanks! We'll be in touch soon.
</p>
<p className="thanksMessage">
  <a style={{color:`white`, textDecoration:`none`}} href="/">Let's get out of here!</a>
</p>
</div>
    </div>
    </div>
  </Layout>
)

export default SecondPage
