import React from 'react';
import axios from 'axios';
import Character from './character';
import {Button, Container, Dimmer, Grid, Loader} from 'semantic-ui-react';

export default class ReasonsRotator extends React.Component {

  constructor() {
    super();
    this.state = {
      characters: [],
      index: 0
    };
  }

  componentWillMount() {
    const setState = this.setState.bind(this);
    axios.get('http://localhost:8080/characters')
      .then(function (response) {
        setState({
          characters: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  prev = () => this.setState({
    index: (this.state.index === 0) ? this.state.index : this.state.index - 1
  });

  next = () => this.setState({
    index: (this.state.index === this.state.characters.length - 1) ? this.state.index : this.state.index + 1
  });

  render() {
    const {index, characters} = this.state;
    return (
      <Container>
        <Dimmer inverted page active={characters.length === 0}>
          <Loader inverted>Loading...</Loader>
        </Dimmer>
        <Grid>
          <Grid.Row>
            <Grid.Column verticalAlign='middle'>
              <Button icon='chevron left' onClick={this.prev}/>
            </Grid.Column>
            <Grid.Column width={8} verticalAlign='middle'>
              <Character character={characters[index] || {}}/>
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              <Button icon='chevron right' onClick={this.next}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}