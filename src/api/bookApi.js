const API_URL = 'https://66eabd0c55ad32cda47a3312.mockapi.io';

export const fetchBooks = async () => {
  try {
    const response = await fetch(`${API_URL}/book`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};