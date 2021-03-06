import React from 'react';
import styles from './Component.less';

const Component = props => (
  <div className={styles.component}>
    {props.text}
  </div>
);

Component.propTypes = {
  text: React.PropTypes.string
};

export default Component;
