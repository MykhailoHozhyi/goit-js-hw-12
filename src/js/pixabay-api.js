import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function fetchPictures(userQuery, page) {
  const axiosOptions = {
    params: {
      key: '45541049-685ffcd160f6cd622b440ebf7',
      q: userQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  };

  return axios('', axiosOptions);
}
