import React from "react"
import About from "../components/About"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => {
  return (
   <Layout>
     <SEO/>
     <Hero/>
     <About/>
     <Gallery/>
     
   </Layout>
  )
}

export default IndexPage
