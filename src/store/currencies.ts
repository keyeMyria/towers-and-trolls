import { action, computed, observable } from 'mobx';
import warehouseStore from './warehouse';

export interface CurrenciesData {
  coins: number;
}

export class Currencies {
  @observable coins: number = 0;
  @computed
  get coinsMax(): number {
    return warehouseStore.coinStorage + 500;
  }

  @action.bound
  addCoins(value: number): void {
    this.coins = Math.min(this.coins + value, this.coinsMax);
  }

  @action.bound
  removeCoins(value: number): void {
    this.coins -= value;
  }

  save(): CurrenciesData {
    return {
      coins: this.coins,
    };
  }

  load({ coins }: CurrenciesData) {
    this.addCoins(coins);
  }
}

export default new Currencies();
