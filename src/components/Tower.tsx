import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled, { css } from 'react-emotion';
import TowerStore from '../store/tower';
import PlayerStore from '../store/player';
import Warehouse from './Warehouse';

export interface TowerProps {
  tower?: TowerStore;
  player?: PlayerStore;
}

@inject('tower', 'player')
@observer
class Tower extends React.Component<TowerProps, undefined> {
  gainLevel = () => {
    const { tower: { nextExp, gainLevel }, player: { exp, spend } } = this.props;
    if (nextExp > exp) return;

    spend(nextExp);
    gainLevel();
  };

  render() {
    return (
      <TowerContainer>
        <pre onClick={this.gainLevel}>
          <span style={{ cursor: 'pointer' }}>
            {`
[][]
            `}
          </span>
          {`
        / \\
       < | >
        [ ]
/---\\   [ ]
|    |[     ]
|    |[     ]
-------
`}
        </pre>
        <Warehouse />
      </TowerContainer>
    );
  }
}

const TowerContainer = styled('pre')``;

export default Tower;
