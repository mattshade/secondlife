import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/holding-hands.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Donate" description="SecondLife Harvest, Inc. is a public charity aimed at eradicating Food Insecurity by eliminating food waste derived from prepared un-served meals. Donate now." />
    <div className={`indexWrapper`} style={{ backgroundImage: `url(${background})`, top:`0`, left: `0`, zIndex: `0`, width: `100%`, height:`100%`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat`, backgroundAttachment: `local`, backgroundSize: `cover`, position: `fixed`  }}>

    <div style={{zIndex: `1`, maxWidth:`600px`, marginBottom: `1.45rem`, marginTop: `7rem`, marginLeft: `auto`, marginRight: `auto`, textAlign: `center`, padding: `20px` }}>
    <div  style={{display:`none`}} id="CustomDonationsForm"></div>
      <Link style={{marginTop: `1rem`, width: `160px`, marginRight: `auto`, marginLeft: `auto`, display: `block`, textDecoration: `none`, color:`black`}} className={`button`} to="/donate">DONATE NOW</Link>
    </div>
    </div>
    <Helmet>
    <script src="https://api.customdonations.com/v1/js/form-builder.min.js" type="text/javascript" />
</Helmet>
    <script
  dangerouslySetInnerHTML={{
    __html: `
    console.log('allo')
    var cdscript = document.createElement('script');
    cdscript.onload = function () {
      CustomDonations.BuildForm({
        account: '7dbafcc7-ab74-4bcb-820a-e79b196eb7bc',
        form: 'c17a0e99-8f49-4962-a485-ebb5cbccc6d5',
        allocation: null, /* optional. Use an allocation ID, like 'AH664' (w/ quotes) to be default selected on form load */
        memberId: null, /* optional. If the current user is authenticated, you can insert their user ID, like '02943' (with quotes) */
        apiVersion: 'v1',
        interval: null, /* if null, then user must select one time or recurring (if enabled). Optionally can set to 'once', 'monthly','quarterly', or 'yearly' */
        loadingText: 'Loading Secure Form...',
        paymentVersion: 2, /*  1: for modal payment window. 2: for inline payment with Google/Apple Pay options */
        baseUrl: 'https://api.customdonations.com',
        mode: 'live' /* change to 'test' to run in test mode. Use card 4242 4242 4242 4242 for testing. */
      });
    cdscript.src = "https://api.customdonations.com/v1/js/form-builder.min.js?v=" + new Date().getTime();
    document.head.appendChild(cdscript);
        `,
  }}
/>

  </Layout>


)

export default SecondPage
