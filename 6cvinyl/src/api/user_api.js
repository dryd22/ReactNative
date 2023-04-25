import ApiManager from './ApiManager';

export const user_login = async data => {
  try {
	  const result = await ApiManager('/users', {
      method: 'POST',
      data: {
        'content-type': 'text/json'
      },
      
    });
    return result;
  } catch (error) {
    
	return error.response.data;
  }
};
