import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FormsPage: React.FC = () => (
  <Layout>
    <SEO title="Forms" />
    <form name="Contact Us" data-netlify>
      <p>
        <label>
          Name <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Enquiry <textarea name="enquiry" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default FormsPage
