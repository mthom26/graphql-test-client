import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class NewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { name, description } = this.state;

    return (
      <div>
        <form>
          <input
            name="name"
            type="text"
            placeholder="Task Name"
            value={name}
            onChange={(e) => this.setState({name: e.target.value})}
          />
            <input
            name="description"
            type="text"
            placeholder="Task Description"
            value={description}
            onChange={(e) => this.setState({description: e.target.value})}
          />
          <div onClick={this.onSubmit}>
            Create Task
          </div>
        </form>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    border: '2px solid #777777'
  },
  input: {
    margin: '0.5rem'
  }
});

export default NewTask;