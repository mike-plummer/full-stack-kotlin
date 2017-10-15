import React from 'react';
import axios from 'axios';
import Reason from './reason';

export default class ReasonsList extends React.Component {

  constructor() {
    super();
    this.state = {
      reasons: []
    };
  }

  componentWillMount() {
    const setState = this.setState.bind(this);
    axios.get('http://localhost:8080/reasons')
      .then(function (response) {
        setState({
          reasons: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {reasons} = this.state;
    return (
      <div>
        {
          reasons.map((reason, index) => (
            <Reason key={index} reason={reason}/>
          ))
        }
      </div>
    );
  }
}