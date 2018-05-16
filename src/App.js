import React, { Component } from 'react';
import { ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

import TaskList from './components/TaskList';
import Container from './components/Container';
import NewTask from './components/NewTask';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: '/'
    };
  }

  render() {
    const { route } = this.state;

    return (
      <ApolloProvider client={client}>
        <Container>
          {route === '/' &&
            <div>
              <h1>Task List</h1>
              <TaskList />
            </div>
          }
          {route === '/newtask' &&
            <div>
              <h1>New Task</h1>
              <NewTask />
            </div>
          }
        </Container>
      </ApolloProvider>
    );
  }
}

export default App;
