import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #2D3142;

  &:hover {
    color: #F0F757;
  }
`

const BlogSnippet = styled.div`
  width: 95%;
  border: 3px solid #2D3142;
  border-radius: 10px;
  padding: 15px;
  margin: 15px 0;
  background: #e49273;
`

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h2>My thoughts, {data.allMarkdownRemark.totalCount} things in mind...</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogSnippet key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
            </BlogTitle>
          </BlogLink>
          <p>{node.excerpt}</p>
        </BlogSnippet>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date(formatString: "MMM DD YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
