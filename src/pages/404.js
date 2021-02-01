import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


const NotFoundPage = () => {
  return (
      <Layout>
        <SEO title="404 | Salon Piękności"/>
        <section className="error">
          <div className="error-inner">
            <div>
            <h2>Page not Fount</h2>
            <Link to="/">Back to Home</Link>
            </div>
          </div>
        </section>
      </Layout>
  )
}

export default NotFoundPage
