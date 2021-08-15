import {SET_STORE, SET_STORE_UUID, SET_PRODUCTS} from '../actions/store';

const initialState = {
  store: null,
  products: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_STORE:
      return {
        ...state,
        store_products: payload,
      };
    case SET_STORE_UUID:
      return {
        ...state,
        storeUuid: payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};
