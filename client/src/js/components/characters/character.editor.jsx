import React from 'react';
import PropTypes from 'prop-types';
import CharacterType from './character.model';
import {Button, Card, Form, Header, Icon, Item, Modal} from 'semantic-ui-react';
import axios from 'axios';

export default class CharacterEditor extends React.Component {

  copy = {};

  save = () => {
    const { isUpdate } = this.props;
    let promise;

    if (isUpdate) {
      promise = axios.put(`http://localhost:8080/characters/${this.copy.id}`, this.copy)
    } else {
      promise = axios.post('http://localhost:8080/characters', this.copy)
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
    this.copy.name = event.target.value;
  };

  onChangeDescription = event => {
    this.copy.description = event.target.value;
  };

  onChangeEpisode = event => {
    this.copy.episodeId = event.target.value;
  };

  onChangeId = event => {
    this.copy.id = event.target.value;
  };

  onChangeType = event => {
    this.copy.type = event.target.value;
  };

  componentWillUpdate(nextProps) {
    this.copy = {
      ...nextProps.character
    }
  }

  render() {
    const { isUpdate } = this.props;

    return (
      <Modal
        defaultOpen={true}
        size='small'
        closeOnDimmerClick={false}
        closeOnDocumentClick={false}
      >
        <Header content='Character Editor' />
        <Modal.Content>
          <Form>
            <Form.Input onChange={this.onChangeName} label='Name' value={this.copy.name} />
            <Form.Input onChange={this.onChangeDescription} label='Description' value={this.copy.description} />
            <Form.Input onChange={this.onChangeEpisode} label='Episode #' type='number' value={this.copy.episodeId} />
            <Form.Input onChange={this.onChangeId} label='ID' type='number' value={this.copy.id} />
            <Form.Group onChange={this.onChangeType} label='Good/Bad' value={this.copy.type}>
              <Form.Radio name='type' value='GOOD'>Good</Form.Radio>
              <Form.Radio name='type' value='BAD'>Good</Form.Radio>
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button secondary basic onClick={this.cancel} inverted>
            Cancel
          </Button>
          <Button primary onClick={this.save} inverted>
            { isUpdate ? 'Update' : 'Create' }
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
    onComplete: () => {}
  };
}
