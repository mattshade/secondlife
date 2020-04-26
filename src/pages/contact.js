import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/bus.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Us" description="SecondLife Harvest, Inc. is a public charity aimed at eradicating Food Insecurity by eliminating food waste derived from prepared un-served meals. Contact us for more information." />
    <div className={`indexWrapper`} style={{ backgroundImage: `url(${background})`, top:`0`, left: `0`, zIndex: `0`, width: `100%`, height:`100%`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat`, backgroundAttachment: `local`, backgroundSize: `cover`, position: `fixed`  }}>

    <div style={{zIndex: `1`, maxWidth:`600px`, width:`80%`, marginBottom: `1.45rem`, marginTop: `7rem`, marginLeft: `auto`, marginRight: `auto`, textAlign: `center`}}>
    <form name="contact" method="POST" action="/success/" data-netlify="true">
<input type="hidden" name="form-name" value="contact" />
<p>
  <input style={{width:`100%`, padding: `10px`}} placeholder="Your Name" type="text" name="name" />
</p>
<p>
  <input style={{width:`100%`, padding: `10px`}} placeholder="Email" type="email" name="email" />
</p>
<p>
  <textarea style={{width:`100%`, padding: `10px`}} placeholder="Add Your Message Here" name="message" rows="6"></textarea>
</p>
  <button
  style={{
    color: `black`,
    background: `#e0b426`,
    padding: `8px`,
    borderRadius: `3px`,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    textTransform: `uppercase`,
    border: `none`
  }}
  type="submit">submit</button>

</form>


    </div>
    </div>
  </Layout>
)

export default SecondPage
