import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/holding-hands.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Donate" description="SecondLife Harvest, Inc. is a public charity aimed at eradicating Food Insecurity by eliminating food waste derived from prepared un-served meals. Donate now." />
    <div className={`indexWrapper`} style={{ backgroundImage: `url(${background})`, top:`0`, left: `0`, zIndex: `0`, width: `100%`, height:`100%`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat`, backgroundAttachment: `local`, backgroundSize: `cover`, position: `fixed`  }}>
    <div style={{zIndex: `1`, maxWidth:`600px`, marginBottom: `1.45rem`, marginTop: `7rem`, marginLeft: `auto`, marginRight: `auto`, textAlign: `center`, padding: `20px` }}>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="MZGQXV9BD72NC" />
        <input style={{padding: `0px`}} type="image" src="https://www.secondlifeharvest.org/static/799779d867a7af13636ffcdc5ed68a3d/d0486/donate-button.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
  </div>

/>

</Layout>


)

export default SecondPage
