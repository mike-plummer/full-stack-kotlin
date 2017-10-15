import React from 'react';
import PropTypes from 'prop-types';
import CharacterType from './character.model';
import {Button, Card, Header, Icon, Item} from 'semantic-ui-react';

const sigils = {
  ARRYN: require('../../assets/arryn.png'),
  BARATHEON: require('../../assets/baratheon.png'),
  BOLTON: require('../../assets/bolton.png'),
  FREY: require('../../assets/frey.png'),
  GREYJOY: require('../../assets/greyjoy.png'),
  LANNISTER: require('../../assets/lannister.png'),
  MARTELL: require('../../assets/martell.png'),
  STARK: require('../../assets/stark.png'),
  TARGARYEN: require('../../assets/targaryen.png'),
  TULLY: require('../../assets/tully.png'),
  TYRELL: require('../../assets/tyrell.png'),
  NONE: require('../../assets/kotlin.png')
};

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
