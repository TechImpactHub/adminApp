export const SET_BUSINESS_OBJ = 'SET_BUSINESS_OBJ';
export const SET_USER_DATA_FROM_DB = 'SET_USER_DATA';
export const SET_STORE = 'SET_STORE';
export const SET_NAME = 'SET_NAME';
export const SET_BUSINESS_ID = 'SET_BUSINESS_ID';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_ROLE = 'SET_ROLE';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const ON_SIGNOUT = 'ON_SIGNOUT';

export const setAuthUserObj = payload => ({
  type: SET_BUSINESS_OBJ,
  payload,
});

export const setUserDataFromDb = payload => ({
  type: SET_USER_DATA_FROM_DB,
  payload,
});

export const setBusinessID = payload => ({
    type: SET_BUSINESS_ID,
    payload,
  });
  
export const setName = payload => ({
      type: SET_NAME,
      payload,
    });
  
export const setLastName = payload => ({
      type: SET_LAST_NAME,
      payload,
    });
  
export const setPhoneNumber = payload => ({
  type: SET_PHONE_NUMBER,
  payload,
});

export const setRole = payload => ({
    type: SET_ROLE,
    payload,
  });

export const setStore = payload => ({
    type: SET_STORE,
    payload,
  });

export const clearUserDataFromDb = () => ({
  type: ON_SIGNOUT,
});
