import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export function Head() {
  return (
    <>
      <title>Test about page</title>
      <meta name="twitter:image" content="https://images.ctfassets.net/gjyjx7gst9lo/6sfeuOQgcPogLE4FKUfztr/472352cdb1c95aec4472e4a9fdcd0a0f/pic_2.jpg" />
      <meta property="og:image" content="https://images.ctfassets.net/gjyjx7gst9lo/6sfeuOQgcPogLE4FKUfztr/472352cdb1c95aec4472e4a9fdcd0a0f/pic_2.jpg" />
      <meta name="description" content="description about page" />
      <meta property="og:title" content="og:title about page" />
      <meta property="og:description" content="og:description about page about page about page about page" />
      <meta name="twitter:title" content="twitter:title about page about page about page" />
      <meta name="twitter:description" content="twitter:description about page about page about page about page" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}