import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing/landing"
import Designs from "../components/designs/designs"
import Artists from "../components/artists/artists"

import "../style/styles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Heartbreak Social Club" />
    <div id='landing'><Landing /></div>
    <div id='designs'><Designs /></div>
    <div id='artists'><Artists /></div>
  </Layout>
)

export default IndexPage
