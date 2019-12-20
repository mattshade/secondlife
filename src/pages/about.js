import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import background from "../images/kids-eating.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="About Us" description="SecondLife Harvest, Inc. is a public charity aimed at eradicating Food Insecurity by eliminating food waste derived from prepared un-served meals. Learn more about us." />
    <div className={`indexWrapper`} style={{ backgroundImage: `url(${background})`, top:`0`, left: `0`, zIndex: `0`, width: `100%`, height:`100%`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat`, backgroundAttachment: `local`, backgroundSize: `cover`, position: `fixed`, }}>

    <div style={{zIndex: `1`, maxWidth:`700px`, marginBottom: `1.45rem`, marginTop: `4rem`, marginLeft: `auto`, marginRight: `auto`, padding: `20px`, background:`rgba(0,0,0,.35)`, borderRadius: `3px`, overflowY:`scroll`, position:`relative`,  height:`100%` }}>
      <small style={{fontSize: `11px`}}>
        <strong>BOARD MEMBER</strong>
      </small>
      <h2>Jeffrey Girard</h2>
      <h4>President, CEO</h4>
      <p>
      An affable and creative executive foodservice professional with more than 30 years’ experience in the food industry.  Formal training in Hotel & Restaurant Management and Culinary Arts combined with eight years as a restaurant owner and operator. Proficient in menu design and analysis, cost control and cross utilization of ingredients. Expert knowledge of Food Safety and Food Handling, including facility design and process flow in commercial kitchens.  Volunteer contributor to local and national charities, Westwood Food Pantry, Abundant Table and Lemonade for Livy.
      </p>

      <hr style={{	borderTop: `2px dashed #8c8b8b`,  opacity:`.35`}} />

      <small style={{fontSize: `11px`}}>
        <strong>BOARD MEMBER</strong>
      </small>
      <h2 style={{marginBottom:`1.45rem`}}>Stephen B. Lincoln</h2>
      <p>
      An organized, detail oriented and conscientious self-starter, able to strategize and prioritize effectively to accomplish multiple tasks and stay calm under pressure. A dedicated and enthusiastic manager, able to motivate teams to perform at their best in providing excellent service and developing ongoing, proﬁtable customer relationships. Expert knowledge in account management, contract and sales negotiations, operations management, client relations, P&L management, human capital management and strategic planning.  Involved in the following:
      </p>
      <h5>Massachusetts Food Association</h5>
      <ul>
        <li>1990-2014, Board of Directors</li>
        <li>1995-2014, Executive Committee</li>
        <li>1995-1996, Vice Chairman of the Board</li>
        <li>1997-1999- Chairman of the Board</li>
      </ul>
      <h5>Dean College, Franklin, MA </h5>
      <ul>
        <li>2002-Present, Board of Trustees </li>
        <li>2010-Present, Executive Committee </li>
        <li>2010-Present, Chairman, Governance Committee Chamber of Commerce, Massachusetts</li>
      </ul>
      <h5>Franklin Chamber of Commerce</h5>
      <ul>
        <li>1990-2008, Board of Directors</li>
        <li>2002-2004, Chairman of the Board</li>
        <li>1999- Business Person of the Year Strata Bank, Franklin, MA</li>
        <li>2008-2011- Board of Directors</li>
      </ul>

      <hr style={{	borderTop: `2px dashed #8c8b8b`,  opacity:`.35`}} />

      <small style={{fontSize: `11px`}}>
        <strong>BOARD CHAIR</strong>
      </small>
      <h2>Lawrence Verney</h2>
      <h4>Sr. Vice President, COO</h4>
      <p>
      A results-driven senior technology executive with over 30 years Information Technology expertise and a track record of leading highly technical teams to provide practical, leading-edge technical solutions.  Unique problem solving skills with an expertise in areas of IT Strategy, IT Architecture, IT Transformation, Cost Management, Infrastructure Optimization, process efficiency and logistics.  Prestigiously elected one of 18 IT Fellows (out of 15,000 IT) within a large Boston area financial services company. Twice awarded the President’s Leadership Award for demonstrating exemplary leadership qualities in the creation of a high-performance work environment in the exploitation of emerging technologies and creating a role model for employees.  Volunteer and contributor at the Franklin Food Pantry which services the needy in the Franklin Massachusetts area.
      </p>

      <hr style={{	borderTop: `2px dashed #8c8b8b`,  opacity:`.35`}} />

      <small style={{fontSize: `11px`}}>
        <strong>BOARD MEMBER</strong>
      </small>
      <h2>Matt Shade</h2>
      <h4>CTO/CDO</h4>
      <p>
      Matt Shade is a senior technology leader focused on design and development of corporate web and mobile apps since 2003. Matt holds a degree in Graphic Design as well as a degree in Visual Communications.  Matt started his career as a designer and moved into the technology space over time learning through self-teaching and paired programming experiences.  He is currently leading a team of Senior developers at a large national media company where his duties include identifying and developing new talent and driving the execution of business strategies to bring new ideas to reality.  He and his team's work have been seen by millions of web visitors daily for the past 14 years.
      </p>

      <hr style={{	borderTop: `2px dashed #8c8b8b`,  opacity:`.35`}} />

      <small style={{fontSize: `11px`}}>
        <strong>BOARD MEMBER</strong>
      </small>
      <h2>Debra A. Blanchette </h2>
      <h4>Sr. Vice President, Treasurer</h4>
      <p>
      Debbie is a hardworking, dependable, multitask oriented individual with over 25 years of proven loyalty, accountability and experience in bookkeeping, reporting, and sales.  She started her career in the restaurant business where she was responsible for daily sales, banking, payroll, accounts receivable, accounts payable and multiple account reconciliations.  For 13 years, she worked as an Office Manager/Bookkeeper for an importer/reseller of empty wine, beer, spirits bottles and corks.  Her responsibilities included all bookkeeping, banking, reconciliations, purchasing, accounts receivable, accounts payable, journal entries and inventory management.  She also coordinated trucking and logistics for over 100 customers/wineries on the East Coast.  She is currently responsible for implementing bid paperwork for private and public jobs.  Debbie is a devoted wife, mother of two, and grandmother of five.  In her spare time, she loves to cook, travel, spend time with family and friends and keep up with Boston sports teams.  She looks forward to this next endeavor and is eager to give back to the community for all the blessings in her life.
      </p>

      <hr style={{	borderTop: `2px dashed #8c8b8b`,  opacity:`.35`}} />

      <small style={{fontSize: `11px`}}>
        <strong>BOARD MEMBER</strong>
      </small>
      <h2>Kara Grasso</h2>
      <h4>Sr. Vice President, Clerk</h4>
      <p>
      Kara is the President of Patient Rights Advocate, a 501(c)(3) organization advocating on behalf of patients, their families, and caregivers to receive real-time, free access to their data and real price transparency prior to service.
      </p>
      <p>
      With an extensive background of working on projects within the health care realm, she has a garnered passion for patient advocacy. She was a Sales Representative for TAP Pharmaceuticals, a joint venture between Abbott Laboratories and Takeda Pharmaceutical Company. She also formerly served as a Hematology Oncology Consultant for Celgene Corporation. Kara began her career as patient services representative for ViaCord, Inc and also worked as a physical therapy aide in a major hospital system. Kara holds a BA from Boston College.
      </p>

      <hr style={{	borderTop: `2px dashed #8c8b8b`,  opacity:`.35`}} />

      <Link style={{marginTop: `1rem`, width: `160px`, marginRight: `auto`, marginLeft: `auto`, display: `block`, textDecoration: `none`, textAlign: `center`, color:`black`}} className={`button`} to="/donate">DONATE NOW</Link>
    </div>
    </div>
  </Layout>
)

export default SecondPage
