import React from 'react';
import PropTypes from 'prop-types';
import CharacterType from './character.model';
import {Button, Card, Header, Icon, Item} from 'semantic-ui-react';

const client = require('client');

const sigils = client.com.objectpartners.plummer.kotlin.domain.House.values()
  .map(item => item.name || item)
  .reduce((prev, item) => {
    prev[item] = require(`../../assets/${item.toLowerCase()}.png`);
    return prev;
  }, {});

export default class Character extends React.Component {

  render() {
    const {character, onEdit} = this.props;
    const isGood = character.type === 'GOOD';
    const isBad = character.type === 'BAD';
    const houseImage = character.house ? sigils[character.house] : sigils['NONE'];

    return (
      <Item>
        <Item.Image size='tiny' floated='left' src={houseImage}/>

        <Item.Content>
          <Item.Header as='h1'>
            {character.name}
            <Button icon='pencil' size='tiny' basic floated='right' onClick={onEdit}/>
          </Item.Header>
          <Item.Description>{character.description}</Item.Description>
          <Item.Meta>
            <small>{60 - character.episodeId} episodes ago</small>
          </Item.Meta>
          <Item.Extra>
            <Icon color='green' name='thumbs up' disabled={isBad}/>
            <Icon color='red' name='thumbs down' disabled={isGood}/>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }

  static propTypes = {
    character: CharacterType.isRequired,
    onEdit: PropTypes.func
  };

  static defaultProps = {
    onEdit: () => {}
  };
}
