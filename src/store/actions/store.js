export const SET_STORE = 'SET_STORE';
export const SET_STORE_UUID = 'SET_STORE_UUID';

export const setStore = payload => ({
  type: SET_STORE,
  payload,
});



export const setstoreUuid = payload => ({
  type: SET_STORE_UUID,
  payload,
});
