import {
  SET_NATIONAL_ID,
  SET_PHONE_NUMBER,
  SET_CITY,
  SET_LOCALITY,
  SET_ADDRESS,
  SET_AS_DEFAULT_ADDRESS,
  RESET_ALL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_IMAGE,
} from '../actions/address';

const initialState = {
  firstName: null,
  nationalId: null,
  lastName: null,
  fullName: null,
  image: null,
  alternativeNumber: null,
  city: null,
  locality: null,
  address: null,
  isDefault: false,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {

    case SET_IMAGE:
      return {
        ...state,
        image: payload,
      };	  
    case SET_NATIONAL_ID:
      return {
        ...state,
        nationalId: payload,
      };
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: payload,
      };
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: payload,
      };

    case SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: payload,
      };

    case SET_CITY:
      return {
        ...state,
        city: payload,
      };

    case SET_LOCALITY:
      return {
        ...state,
        locality: payload,
      };

    case SET_ADDRESS:
      return {
        ...state,
        address: payload,
      };

    case SET_AS_DEFAULT_ADDRESS:
      return {
        ...state,
        isDefault: payload,
      };

    case RESET_ALL:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
