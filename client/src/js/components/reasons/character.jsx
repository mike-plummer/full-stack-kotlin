import React from 'react';
import CharacterType from './character.model';
import {Header, Icon, Item, Card} from 'semantic-ui-react';

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
    const { character } = this.props;
    const isGood = character.type === 'GOOD';
    const houseImage = character.house ? sigils[character.house] : sigils['NONE'];

    return (
      <Item>
        <Item.Image size='tiny' floated='left' src={houseImage} />

        <Item.Content>
          <Item.Header as='h1'>{character.name}</Item.Header>
          <Item.Description>{character.description}</Item.Description>
          <Item.Meta>
            <small>{60 - character.episodeId} episodes ago</small>
          </Item.Meta>
          <Item.Extra>
            <Icon color='green' name='thumbs up' />
            <Icon color='red' name='thumbs down' />
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }

  static propTypes = {
    character: CharacterType.isRequired
  };

  static defaultProps = {
  };
}
