import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Landing = ({ data: { loading, allPosts } }) => {
  if (!loading) {
    return (
      <div className="wrapper">
        {allPosts.map(post => (
          <article className="content" key={post.id}>
            <h2>{post.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: post.description }} />
            <Link to={`/post/${post.slug}`}>
              <button className="btn">Read More</button>
            </Link>
          </article>
        ))}
      </div>
    );
  }
  return <h2>Loading Posts...</h2>
};

const allPosts = gql`
  query allPosts {
    allPosts {
      id
      title
      description
      slug
    }
  }
`;
export default graphql(allPosts)(Landing);
