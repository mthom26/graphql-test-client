import React, { Component } from 'react';
import { ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

import TaskList from './components/TaskList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>Apollo Client Test</h1>
          <TaskList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
