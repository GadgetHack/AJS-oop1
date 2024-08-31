import { httpGet, httpPost } from './js/http';

export async function loadUser(id) {
  try {
    const data = await httpGet(`http://server:8080/users/${id}`);
    return data; 
  } catch (error) {
    console.error('Failed to load user:', error);
    throw error; 
  }
}

export async function saveUser(user) {
  try {
    const response = await httpPost('http://server:8080/users', user);
    return response; 
  } catch (error) {
    console.error('Failed to save user:', error);
    throw error; 
  }
}
