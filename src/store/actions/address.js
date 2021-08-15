export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_NATIONAL_ID = 'SET_NATIONAL_ID';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_CITY = 'SET_CITY';
export const SET_LOCALITY = 'SET_LOCALITY';
export const SET_IMAGE = 'SET_IMAGE';
export const SET_ADDRESS = 'SET_ADDRESS';
export const SET_AS_DEFAULT_ADDRESS = 'SET_AS_DEFAULT_ADDRESS';
export const RESET_ALL = 'RESET_ALL';

export const setNationalID = (payload) => ({
  type: SET_NATIONAL_ID,
  payload,
});
export const setImage = (payload) => ({
    type: SET_IMAGE,
    payload,
  });
export const setFirstName = (payload) => ({
    type: SET_FIRST_NAME,
    payload,
  });

export const setLastName = (payload) => ({
    type: SET_LAST_NAME,
    payload,
  });

export const setPhoneNumber = (payload) => ({
  type: SET_PHONE_NUMBER,
  payload,
});

export const setCity = (payload) => ({
  type: SET_CITY,
  payload,
});

export const setLocality = (payload) => ({
  type: SET_LOCALITY,
  payload,
});

export const setAddress = (payload) => ({
  type: SET_ADDRESS,
  payload,
});

export const setAsDefaultAddress = (payload) => ({
  type: SET_AS_DEFAULT_ADDRESS,
  payload,
});

export const resetAll = () => ({
  type: RESET_ALL,
});
