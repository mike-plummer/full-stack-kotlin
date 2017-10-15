import React from 'react';
import ReasonType from './reason.model';

export default class Reason extends React.Component {

  render() {
    const { reason } = this.props;
    return (
      <div>
        <p>{reason.text}</p>
        <p>{reason.level}</p>
      </div>
    );
  }

  static propTypes = {
    reason: ReasonType.isRequired
  };

  static defaultProps = {
  };
}
