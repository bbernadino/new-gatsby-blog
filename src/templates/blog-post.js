import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPost = styled.div`
  width: 95%;
  border: 3px solid #2D3142;
  border-radius: 10px;
  padding: 15px;
  margin: 15px 0;
  background: #e49273;
`
const PostContent = styled.div`
  a {
    color: #2D3142;
  }

  a:hover {
    color: #ccc;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <BlogPost>
        <h1>{post.frontmatter.title}</h1>
        <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogPost>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`