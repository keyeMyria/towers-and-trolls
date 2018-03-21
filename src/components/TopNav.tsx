import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled, { css } from 'react-emotion';
import Player from '../store/player';
import Tower from '../store/tower';
import Field from '../store/field';

export interface TopNavProps {
  player?: Player;
  tower?: Tower;
  field?: Field;
}

@inject('player', 'tower', 'field')
@observer
class TopNav extends React.Component<TopNavProps, any> {
  render() {
    const { exp } = this.props.player;
    const { level } = this.props.tower;
    return (
      <header className={classes}>
        Exp: {exp} | TLvl: {level} | <span onClick={this.props.field.moveForward}>FLvl</span>:{' '}
        {this.props.field.level}
      </header>
    );
  }
}

const classes = css`
  padding: 5px;
  border-bottom: 1px solid black;
  background-color: black;
  color: white;
`;

export default TopNav;
