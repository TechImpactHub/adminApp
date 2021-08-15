import {
  SET_AUTH_USER_OBJ,
  SET_USER_DATA_FROM_DB,
  ON_SIGNOUT,
  SET_USER_UUID,
  SET_NATIONAL_ID,
  SET_PHONE_NUMBER,
  SET_ROLE,
  RESET_ALL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
} from '../actions/user';

const initialState = {
  authUserObj: null,
  userData: null,
  firstName: null,
  nationalId: null,
  lastName: null,
  role: null,
  phoneNumber: null,
  partnerUuid: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_AUTH_USER_OBJ:
      return {
        ...state,
        authUserObj: payload,
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
  
      case SET_ROLE:
        return {
          ...state,
          role: payload,
        };      

        case SET_PHONE_NUMBER:
            return {
              ...state,
              phoneNumber: payload,
            };   
      case SET_USER_UUID:
        return {
          ...state,
          partnerUuid: payload,
        };

    case SET_USER_DATA_FROM_DB:
      return {
        ...state,
        userData: payload,
      };

    case ON_SIGNOUT:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
