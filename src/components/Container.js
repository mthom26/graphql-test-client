import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Container = ({ children }) => {
  return (
    <div className={css(styles.container)}>
      {children}
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: '0 auto',
    maxWidth: '960px'
  }
});

export default Container;