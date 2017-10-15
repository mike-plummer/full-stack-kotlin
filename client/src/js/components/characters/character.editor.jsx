import React from 'react';
import PropTypes from 'prop-types';
import CharacterType, {HOUSES} from './character.model';
import {Button, Card, Form, Header, Icon, Item, Message, Modal} from 'semantic-ui-react';
import axios from 'axios';

const client = require('client');

const houseOptions = HOUSES.map(house => ({
  text: house,
  value: house
}));

export default class CharacterEditor extends React.Component {

  constructor(props) {
    super();
    this.state = {
      character: props.character,
      error: undefined
    };
  }

  save = () => {
    const {isUpdate} = this.props;
    const {character} = this.state;

    const validator = new client.com.objectpartners.plummer.kotlin.validation.CharacterValidator(character);
    try {
      validator.validate()
    } catch (error) {
      this.setState({
        error: error.message
      });
      return;
    }

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

  onChange = (field, event, data) => {
    this.setState({
      character: {
        ...this.state.character,
        [field]: data.value
      }
    });
  };

  render() {
    const {isUpdate} = this.props;
    const {character, error} = this.state;

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
            <Form.Input onChange={this.onChange.bind(this, 'name')} label='Name' value={character.name}/>
            <Form.Input onChange={this.onChange.bind(this, 'description')} label='Description'
                        value={character.description}/>
            <Form.Group inline>
              <Form.Input onChange={this.onChange.bind(this, 'episodeId')} label='Episode #' type='number'
                          value={character.episodeId}/>
              <Form.Input onChange={this.onChange.bind(this, 'id')} label='ID' type='number' value={character.id}/>
              <Form.Select onChange={this.onChange.bind(this, 'house')} label='House' value={character.house}
                           options={houseOptions}/>
            </Form.Group>
            <Form.Group>
              <Form.Input onChange={this.onChange.bind(this, 'importance')} label='Importance' type='number'
                          value={character.importance}/>
              <Form.Group grouped>
                <Form.Radio name='type' value='GOOD' label='Good' onChange={this.onChange.bind(this, 'type')}
                            checked={character.type === 'GOOD'}/>
                <Form.Radio name='type' value='BAD' label='Bad' onChange={this.onChange.bind(this, 'type')}
                            checked={character.type === 'BAD'}/>
              </Form.Group>
            </Form.Group>
          </Form>
          {
            !!error &&
            <Message warning visible={true}>
              {error}
            </Message>
          }
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
