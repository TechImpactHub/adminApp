export const SET_FULL_NAME = 'SET_FULL_NAME';
export const SET_ALTERNATIVE_NUMBER = 'SET_ALTERNATIVE_NUMBER';
export const SET_NAME = 'SET_NAME';
export const SET_UNIT_COST = 'SET_UNIT_COST';
export const SET_UNIT_PRICE = 'SET_UNIT_PRICE';
export const SET_AS_DEFAULT_ADDRESS = 'SET_AS_DEFAULT_ADDRESS';
export const SET_STORE = 'SET_STORE';
export const RESET_ALL = 'RESET_ALL';

export const setFullName = payload => ({
  type: SET_FULL_NAME,
  payload,
});

export const setAlternativeNumber = payload => ({
  type: SET_ALTERNATIVE_NUMBER,
  payload,
});

export const setName = payload => ({
  type: SET_NAME,
  payload,
});

export const setUnitCost = payload => ({
  type: SET_UNIT_COST,
  payload,
});

export const setUnitPrice = payload => ({
  type: SET_UNIT_PRICE,
  payload,
});

export const setStore = payload => ({
  type: SET_STORE,
  payload,
});

export const resetAll = () => ({
  type: RESET_ALL,
});
