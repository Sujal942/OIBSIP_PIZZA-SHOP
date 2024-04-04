import { atom } from 'recoil';

export const masterListState = atom({
  key: 'Master',
  default: [],
});

export const cartListState = atom({
  key: 'Cart',
  default: [],
});

export const orderState = atom({
  key: 'Order',
  default: {},
});
