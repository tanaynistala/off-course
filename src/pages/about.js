import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/normalize.css"
import "../style/all.scss"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Off Course is a CAS project to bridge the divide in opportunities provided to children.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Image caption</figcaption>
          </figure>
          <p>
            Off-Course is a CAS project that aims to bridge the divide in opportunities provided to children. 
            Often, the educational opportunities availed by children are limited to purely textbook-oriented content, 
            rather than touching upon valuable real world skills.
          </p>
          <p>
            By creating short-courses designed for children about various skills, 
            we aim to take a step towards resolving this divide. 
          </p>
          <hr />
          <h3 id="usp">What makes this project different?</h3>
          <p>
            <ul>
              <li>The course particularly caters towards the youth, and will be organized by difficulty level.</li>
              <li>Linguistic barriers will be addressed by adding Hindi subtitles.</li>
              <li>Gradual development of skills, rather than one video explaining the whole concept.</li>
              <li>Students will be able to reach out to the course creators via email or through a phone call.</li>
            </ul>
          </p>
          <hr/>
          <h3 id="cas">Incorporating CAS</h3>
          <dl>
            <dt>Creativity</dt>
            <dd>
              <p>
                As we endeavour to create dynamic courses, we will explore our own interests and talents, 
                while learning crucial skills like video editing, teaching, course designing, and website designing.
              </p>
            </dd>
            <dt>Service</dt>
            <dd>
              <p>
                The website we build (this one!) will be provided to {" "}
                <a href="https://www.muktanganedu.org/">
                  Muktangan
            </a>, who will then share it with the children they work with. 
                The children using the course can learn any skills/hobbies they choose and obtain a certificate for participation. 
                We also hope to expand it by tieing up with other NGOs and maybe some BMC schools.
              </p>
            </dd>
          </dl>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
