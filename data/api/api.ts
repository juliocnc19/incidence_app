import axios from 'axios';

const api = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data: any = null,
  headers: any = {}
): Promise<T> => {
  try {

    const response = await axios({
      method,
      url,
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data as T;   
  } catch (error) {
    console.error('Error en la petición API:', error);
    throw error;
  }
};

export default api;
