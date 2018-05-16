import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const TaskItem = ({ data }) => {
  return (
    <div className={css(styles.taskitem)}>
      <h3>{data.name}</h3>
      <span>{data.dateCreated}</span>
      <p>{data.description}</p>
    </div>
  );
};

const styles = StyleSheet.create({
  taskitem: {
    border: '2px solid #777777',
    padding: '1rem',
    width: '200px',
    margin: '1rem'
  }
});

export default TaskItem;