//Dados que vão ser armazenado após o login
export const KEY_TOKEN = '&app-token';
export const USER_ID = '&user-id';

export const setToken = token => { localStorage.setItem(KEY_TOKEN,token); }
export const getToken = () => localStorage.getItem(KEY_TOKEN)
export const logout = () => { localStorage.clear() };

export const setUserId = id => localStorage.setItem(USER_ID,id);
export const getUserId = () => localStorage.getItem(USER_ID);


