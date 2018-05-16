import React from 'react';
import { graphql } from 'react-apollo';
import { StyleSheet, css } from 'aphrodite';

import { addTaskMutation } from '../queries/queries';

const defaultState = {
  name: '',
  description: ''
};

class NewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = defaultState;

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addTaskMutation({
      variables: {
        name: this.state.name,
        description: this.state.description
      }
    });
    this.setState({ ...defaultState });
    this.props.changeRoute('/');
  }

  render() {
    const { name, description } = this.state;
    console.log(this.props);
    return (
      <div>
        <form className={css(styles.form)}>
          <input
            className={css(styles.input)}
            name="name"
            type="text"
            placeholder="Task Name"
            value={name}
            onChange={(e) => this.setState({name: e.target.value})}
          />
            <input
            className={css(styles.input)}
            name="description"
            type="text"
            placeholder="Task Description"
            value={description}
            onChange={(e) => this.setState({description: e.target.value})}
          />
          <div className={css(styles.button)} onClick={this.onSubmit}>
            Create Task
          </div>
        </form>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    border: '2px solid #777777',
    display: 'flex',
    flexDirection: 'column',
    width: '450px'
  },
  input: {
    marginTop: '1.5rem',
    padding: '0.5rem'
  },
  button: {
    margin: '1.5rem auto',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    background: '#444444',
    color: '#f8f8f8'
  }
});

export default graphql(addTaskMutation, { name: 'addTaskMutation' })(NewTask);