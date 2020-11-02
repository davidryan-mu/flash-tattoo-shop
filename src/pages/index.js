import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing/landing"
import "../style/styles.scss"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Landing />
  </Layout>
)

export default IndexPage
