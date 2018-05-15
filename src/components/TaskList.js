import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getTasksQuery = gql`
  {
    allTasks {
      name
      description
      dateCreated
    }
  }
`;

const TaskList = ({ data }) => {
  
  let taskList;
  if(data.loading) {
    taskList = (
      <p>Loading Tasks...</p>
    );
  } else {
    taskList = data.allTasks.map((task, index) => {
      return (
        <div key={index}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>{task.dateCreated}</p>
        </div>
      );
    })
  }

  return (
    <div>
      {taskList}
    </div>
  );
};

export default graphql(getTasksQuery)(TaskList);