import { gql } from 'apollo-boost';

const getTasksQuery = gql`
  {
    allTasks {
      name
      description
      dateCreated
    }
  }
`;

const addTaskMutation = gql`
  mutation($name: String!, $description: String!) {
    addTask(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export {
  getTasksQuery,
  addTaskMutation
};