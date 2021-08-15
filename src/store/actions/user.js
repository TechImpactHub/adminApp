export const SET_AUTH_USER_OBJ = 'SET_AUTH_USER_OBJ';
export const SET_USER_DATA_FROM_DB = 'SET_USER_DATA';
export const SET_STORE_UUID = 'SET_STORE_UUID';
export const SET_USER_UUID = 'SET_USER_UUID';
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_NATIONAL_ID = 'SET_NATIONAL_ID';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_ROLE = 'SET_ROLE';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const ON_SIGNOUT = 'ON_SIGNOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_REFRESH_TOKEN = 'SET_REFRESH_TOKEN';

export const setToken = payload => ({
  type: SET_TOKEN,
  payload,
});

export const setRefreshToken = payload => ({
  type: SET_REFRESH_TOKEN,
  payload,
});
export const setAuthUserObj = payload => ({
  type: SET_AUTH_USER_OBJ,
  payload,
});

export const setUserDataFromDb = payload => ({
  type: SET_USER_DATA_FROM_DB,
  payload,
});

export const setNationalID = payload => ({
  type: SET_NATIONAL_ID,
  payload,
});

export const setFirstName = payload => ({
  type: SET_FIRST_NAME,
  payload,
});

export const setLastName = payload => ({
  type: SET_LAST_NAME,
  payload,
});

export const setPhone = payload => ({
  type: SET_PHONE_NUMBER,
  payload,
});

export const setRole = payload => ({
  type: SET_ROLE,
  payload,
});

export const setPartnerUuid = payload => ({
  type: SET_USER_UUID,
  payload,
});

export const setstoreUuid = payload => ({
  type: SET_STORE_UUID,
  payload,
});
export const clearUserDataFromDb = () => ({
  type: ON_SIGNOUT,
});
