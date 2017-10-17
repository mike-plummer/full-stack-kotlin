import React from 'react';
import PropTypes from 'prop-types';
import CharacterType from './character.model';
import {Button, Card, Grid, Header, Icon, Image, Item, Statistic} from 'semantic-ui-react';

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
      <Card>
        <Image centered size='medium' src={houseImage}/>
        <Card.Content>
          <Card.Header>
            {character.name}
            <Button icon='pencil' size='tiny' basic floated='right' onClick={onEdit}/>
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Died {60 - character.episodeId} episodes ago
            </span>
          </Card.Meta>
          <Card.Description>House: {character.house}</Card.Description>
          <Card.Description>Demise: {character.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon color='green' name='thumbs up' size='large' disabled={isBad}/>
          <Icon color='red' name='thumbs down' size='large' disabled={isGood}/>
          <Statistic size='mini' floated='right'>
            <Statistic.Value>
              <Icon name='star' color='yellow' inverted/>
              {character.importance}
            </Statistic.Value>
          </Statistic>
        </Card.Content>
      </Card>
    );
  }

  static propTypes = {
    character: CharacterType.isRequired,
    onEdit: PropTypes.func
  };

  static defaultProps = {
    onEdit: () => {
    }
  };
}
