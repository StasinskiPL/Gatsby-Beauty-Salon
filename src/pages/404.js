import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"


const NotFoundPage = () => {
  return (
      <Layout>
        <section className="error">
          <div className="error-inner">
            <h2>Page not Fount</h2>
            <Link to="/">Back to Home</Link>

          </div>



        </section>
      </Layout>
  )
}

export default NotFoundPage
