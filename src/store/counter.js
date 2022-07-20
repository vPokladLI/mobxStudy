import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 0;
  constructor() {
    makeAutoObservable(this);
  }
  increment() {
    this.count += 1;
  }
  decrement() {
    this.count -= 1;
    this.count = this.count < 0 ? (this.count = 0) : this.count;
  }
}

export default new CounterStore();
