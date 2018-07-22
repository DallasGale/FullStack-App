import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


const App = ({ data }) => (
  <div>
    <h1>{data.hi}</h1>
    <ul>
      { resolutions.map(resolution => {
        <li key={ resolution._id }>
          item.name
        </li>;
      })
      }
    </ul>
  </div>
);

const hiQuery = gql`
{
  hi
  resolutions {
    _id
    name
  }
}
`;


export default graphql(hiQuery)(App);