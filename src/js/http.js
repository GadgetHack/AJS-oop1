export function httpGet(url) {
  return new Promise((resolve, reject) => {
    if (url.includes('error')) {
      reject(new Error('Network error'));
    } else {
      resolve({ id: 1, name: 'John Doe' }); 
    }
  });
}
export function httpPost(url) {
  return new Promise((resolve, reject) => {
    if (url.includes('error')) {
      reject(new Error('Network error'));
    } else {
      resolve({ success: true }); 
    }
  });
}