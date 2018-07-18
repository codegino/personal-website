import React from 'react';

const styles = {
  container: {
    backgroundColor: '#eee',
    borderRadius: '50px',
    border: '1px solid #333',
    padding: '2px 7px',
    boxShadow: '0 0 2px 1px black',
    margin: '5px 5px',
  },
};

type Props = {
  name: string,
};

const Skill = (props: Props) => {
  const { name } = props;
  return (
    <div style={styles.container}>
      <p>{name}</p>
    </div>
  );
};

export default Skill;