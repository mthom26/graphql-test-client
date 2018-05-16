import React, { Component } from 'react';
import { ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

import TaskList from './components/TaskList';
import Container from './components/Container';
import NewTask from './components/NewTask';
import NavBar from './components/NavBar';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: '/'
    };

    this.changeRoute = this.changeRoute.bind(this);
  }

  changeRoute(newRoute) {
    this.setState({route: newRoute});
  }

  render() {
    const { route } = this.state;

    return (
      <ApolloProvider client={client}>
        <div>
          <NavBar changeRoute={this.changeRoute}/>
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
                <NewTask changeRoute={this.changeRoute}/>
              </div>
            }
          </Container>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
