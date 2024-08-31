
import { loadUser, saveUser } from '../user';
import { httpGet, httpPost } from '../http';

jest.mock('../http', () => ({
  httpGet: jest.fn(),
  httpPost: jest.fn(),
}));

describe('User module', () => {
  beforeEach(() => {
    jest.resetAllMocks(); 
  });

  test('should call loadUser once and return user data', async () => {
    const mockData = { id: 1, name: 'John Doe' };
    httpGet.mockResolvedValue(mockData); 

    const user = await loadUser(1);
    expect(user).toEqual(mockData);
    expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
    expect(httpGet).toHaveBeenCalledTimes(1);
  });

  test('should throw an error if httpGet fails in loadUser', async () => {
    httpGet.mockRejectedValue(new Error('Network error'));

    await expect(loadUser(1)).rejects.toThrow('Network error');
  });

  test('should call saveUser and return response', async () => {
    const mockResponse = { success: true };
    const user = { id: 1, name: 'John Doe' };
    httpPost.mockResolvedValue(mockResponse);

    const response = await saveUser(user);
    expect(response).toEqual(mockResponse);
    expect(httpPost).toHaveBeenCalledWith('http://server:8080/users', user);
    expect(httpPost).toHaveBeenCalledTimes(1);
  });

  test('should throw an error if httpPost fails in saveUser', async () => {
    httpPost.mockRejectedValue(new Error('Network error'));

    await expect(saveUser({ id: 1, name: 'John Doe' })).rejects.toThrow('Network error');
  });
});
