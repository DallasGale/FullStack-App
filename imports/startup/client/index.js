import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from '../../ui/app';

const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl('graphql')
});

const myCache = new InMemoryCache();

const myClient = new ApolloClient({
  link: httpLink,
  cache: myCache
});

const ApolloApp = () => (
  <ApolloProvider client={ myClient }>
    <App />
  </ApolloProvider>
)

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById('app'));
});

