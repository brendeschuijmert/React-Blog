import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Post = ({ data: { loading, post } }) => {
  if (!loading) {
    return (
      <article className="wrapper">
        <div className="post">
          <h1>{post.title}</h1>
          <img src={post.image.url} alt="Dogs" />
          <p dangerouslySetInnerHTML={{ __html: post.description }} />
        </div>
      </article>
    );
  }
  return (
    <div className="loading">
      <div className="loading-anim"></div>
    </div>
  )
};

const singlePost = gql`
         query singlePost($slug: String!) {
           post: Post(slug: $slug) {
             id
             slug
             title
             description
             image {
               url
             }
           }
         }
       `;

export default graphql(singlePost, {
  options: ({ match }) => ({
    variables: {
      slug: match.params.slug
    }
  })
})(Post);
