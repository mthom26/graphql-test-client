import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const NavBar = (props) => {
  return (
    <div className={css(styles.navbar)}>
      <div
        className={css(styles.button)}
        onClick={() => props.changeRoute('/')}
      >
        Home
      </div>
      <div
        className={css(styles.button)}
        onClick={() => props.changeRoute('/newtask')}
      >
        New Task
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  navbar: {
    background: '#444444',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    color: '#f8f8f8',
    cursor: 'pointer',
    padding: '0.75rem 1rem',
    ':hover': {
      background: '#aaaaaa'
    }
  }
});
export default NavBar;