import React from "react"
import About from "../components/About"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
   <Layout>
     <Hero/>
     <About/>
     <Gallery/>
     
   </Layout>
  )
}

export default IndexPage
