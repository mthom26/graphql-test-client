import React from 'react';
import { graphql } from 'react-apollo';
import { StyleSheet, css } from 'aphrodite';

import { getTasksQuery } from '../queries/queries';

import TaskItem from './TaskItem';

const TaskList = ({ data }) => {
  
  let taskList;
  if(data.loading) {
    taskList = (
      <p>Loading Tasks...</p>
    );
  } else {
    taskList = data.allTasks.map((task, index) => {
      return <TaskItem key={index} data={task}/>
    })
  }

  return (
    <div className={css(styles.tasklist)}>
      {taskList}
    </div>
  );
};

const styles = StyleSheet.create({
  tasklist: {
    background: '#d4d4d4',
    padding: '2rem',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
});

export default graphql(getTasksQuery)(TaskList);