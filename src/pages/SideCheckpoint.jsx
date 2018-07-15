import React from 'react';
import Checkpoint from 'components/button/checkpoint/Checkpoint';

const navStyle = {
  container: {
    height: '100%',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    left: '3px',
    top: 0,
  },
  item: {
    marginTop: '20px',
  },
};

type SideNavigationProps = {
  goToHeader: Function,
  goToHero: Function,
  goToSkills: Function,
  goToFooter: Function,
};

const SideNavigation = (props: SideNavigationProps) => {
  const { goToFooter, goToHeader, goToHero, goToSkills } = props;

  return (
    <div style={navStyle.container}>
      <div style={navStyle.wrapper}>
        <Checkpoint size={20} style={navStyle.item} onClick={goToHeader} isActive>
          Header
        </Checkpoint>
        <Checkpoint size={20} style={navStyle.item} onClick={goToHero}>
          Hero
        </Checkpoint>
        <Checkpoint size={20} style={navStyle.item} onClick={goToSkills}>
          Skills
        </Checkpoint>
        <Checkpoint size={20} style={navStyle.item} onClick={goToFooter}>
          Footer
        </Checkpoint>
      </div>
    </div>
  );
};

export default SideNavigation;
