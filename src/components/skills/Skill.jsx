import React from 'react';

const styles = {
  container: {
    backgroundColor: '#eee',
    borderRadius: '50px',
    border: '1px solid #333',
    padding: '2px 7px',
    boxShadow: '0 0 2px 1px black',
    margin: '5px 5px',
  }
};

const Skill = props => (
  <div style={styles.container}>
    <h3>
      {props.name}
    </h3>
  </div>
);

export default Skill;
