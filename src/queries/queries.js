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

export {
  getTasksQuery
};