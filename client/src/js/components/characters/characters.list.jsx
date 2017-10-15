import React from 'react';
import axios from 'axios';
import Character from './character';
import CharacterEditor from './character.editor';
import {Button, Container, Dimmer, Grid, Icon, Loader, Menu} from 'semantic-ui-react';
import './styles.css';

export default class ReasonsRotator extends React.Component {

  constructor() {
    super();
    this.state = {
      characters: [],
      index: 0,
      editorActive: false,
      editedCharacter: undefined,
      isUpdate: undefined
    };
  }

  componentWillMount() {
    this.loadCharacters();
  }

  prev = () => this.setState({
    index: (this.state.index === 0) ? this.state.index : this.state.index - 1
  });

  next = () => this.setState({
    index: (this.state.index === this.state.characters.length - 1) ? this.state.index : this.state.index + 1
  });

  onCreateClick = () => {
    this.displayEditor(false);
  };

  onEditClick = () => {
    this.displayEditor(true);
  };

  displayEditor = isUpdate => {
    const {characters, index} = this.state;
    this.setState({
      editorActive: true,
      editedCharacter: isUpdate ? characters[index] : {},
      isUpdate
    });
  };

  onEditComplete = () => {
    this.setState({
      editorActive: false,
      editedCharacter: undefined,
      isUpdate: undefined
    });

    this.loadCharacters();
  };

  loadCharacters = () => {
    axios.get('http://localhost:8080/characters')
      .then(response => {
        this.setState({
          characters: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {index, characters, editorActive, editedCharacter, isUpdate} = this.state;
    return (
      <div>
        <Menu color='grey' inverted fixed='top'>
          <Menu.Item name='Game of Thrones'/>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Icon name='plus' onClick={this.onCreateClick}/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Container className='got-content'>
          <Dimmer inverted page active={characters.length === 0}>
            <Loader inverted>Loading...</Loader>
          </Dimmer>
          <Grid>
            <Grid.Row>
              <Grid.Column verticalAlign='middle'>
                <Button icon='chevron left' onClick={this.prev} basic size='large'/>
              </Grid.Column>
              <Grid.Column width={8} verticalAlign='middle'>
                <Character character={characters[index] || {}} onEdit={this.onEditClick}/>
              </Grid.Column>
              <Grid.Column verticalAlign='middle'>
                <Button icon='chevron right' onClick={this.next} basic size='large'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {
            editorActive &&
            <CharacterEditor
              character={editedCharacter}
              isUpdate={isUpdate}
              onComplete={this.onEditComplete}
            />
          }
        </Container>
      </div>
    );
  }
}