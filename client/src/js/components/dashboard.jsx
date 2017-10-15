import React from 'react';
import {Container, Menu} from 'semantic-ui-react';
import CharactersList from './reasons/characters.list';
import './styles.css';

export default class Dashboard extends React.Component {

  render() {
    return (
      <Container>
        <Menu color='grey' inverted fixed='top'>
          <Menu.Item name='Game of Thrones'/>
        </Menu>
        <Container className='got-content'>
          <CharactersList/>
        </Container>
      </Container>
    );
  }
}