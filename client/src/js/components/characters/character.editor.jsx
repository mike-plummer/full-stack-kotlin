import React from 'react';
import PropTypes from 'prop-types';
import CharacterType from './character.model';
import {Button, Card, Form, Header, Icon, Item, Modal} from 'semantic-ui-react';
import axios from 'axios';

export default class CharacterEditor extends React.Component {

  constructor(props) {
    super();
    this.state = {
      character: props.character
    };
  }

  save = () => {
    const {isUpdate} = this.props;
    const {character} = this.state;

    let promise;

    if (isUpdate) {
      promise = axios.put(`http://localhost:8080/characters/${character.id}`, character)
    } else {
      promise = axios.post('http://localhost:8080/characters', character)
    }

    promise
      .then(response => {
        this.props.onComplete();
      })
      .catch(error => {
        console.log(error);
      });
  };

  cancel = () => {
    this.props.onComplete();
  };

  onChangeName = event => {
    this.setState({
      character: {
        ...this.state.character,
        name: event.target.value
      }
    });
  };

  onChangeDescription = event => {
    this.setState({
      character: {
        ...this.state.character,
        description: event.target.value
      }
    });
  };

  onChangeEpisode = event => {
    this.setState({
      character: {
        ...this.state.character,
        episodeId: event.target.value
      }
    });
  };

  onChangeId = event => {
    this.setState({
      character: {
        ...this.state.character,
        id: event.target.value
      }
    });
  };

  onChangeType = event => {
    this.setState({
      character: {
        ...this.state.character,
        type: event.currentTarget.firstChild.value
      }
    });
  };

  render() {
    const {isUpdate} = this.props;
    const {character} = this.state;

    return (
      <Modal
        defaultOpen={true}
        size='small'
        closeOnDimmerClick={false}
        closeOnDocumentClick={false}
      >
        <Header content='Character Editor'/>
        <Modal.Content>
          <Form>
            <Form.Input onChange={this.onChangeName} label='Name' value={character.name}/>
            <Form.Input onChange={this.onChangeDescription} label='Description' value={character.description}/>
            <Form.Input onChange={this.onChangeEpisode} label='Episode #' type='number' value={character.episodeId}/>
            <Form.Input onChange={this.onChangeId} label='ID' type='number' value={character.id}/>
            <Form.Group>
              <label>Good or Bad</label>
              <Form.Radio name='type' value='GOOD' label='Good' onChange={this.onChangeType}
                          checked={character.type === 'GOOD'}/>
              <Form.Radio name='type' value='BAD' label='Bad' onChange={this.onChangeType}
                          checked={character.type === 'BAD'}/>
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button secondary basic onClick={this.cancel} inverted>
            Cancel
          </Button>
          <Button primary onClick={this.save} inverted>
            {isUpdate ? 'Update' : 'Create'}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

  static propTypes = {
    character: CharacterType.isRequired,
    isUpdate: PropTypes.bool,
    onComplete: PropTypes.func
  };

  static defaultProps = {
    isUpdate: false,
    onComplete: () => {
    }
  };
}
