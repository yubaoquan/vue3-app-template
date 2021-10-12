import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol('store');

// Create a new store instance.
export const store = createStore<State>({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: any) {
      state.count += 1;
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
