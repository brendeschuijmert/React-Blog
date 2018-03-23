import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Landing = ({ data: { loading, allPosts } }) => {
  if (!loading) {
    return (
      <div className="wrapper posts-container">
        {allPosts.map(post => (
          <Link to={`/post/${post.slug}`}>
            <article className="post-wrapper" key={post.id}>
              <img src={post.image.url} alt=""/>

              <div className="post-content">
                <div className="post-title">
                  
                    <h2>{post.title}</h2>
                  
                </div>
                <div className="post-author">
                  <h4>Author</h4>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className="loading">
      <div className="loading-anim"></div>
    </div>
  )
};

const allPosts = gql`
  query allPosts {
    allPosts {
      id
      title
      image {
        url
      }
      slug
      createdAt
    }
  }
`;
export default graphql(allPosts)(Landing);
