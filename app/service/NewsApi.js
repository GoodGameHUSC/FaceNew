import Axios from "axios"
import NEWS_API from '../config/newapi';

export function topHeadLineNews(category = '') {
  return new Promise((res, rej) => {
    const url = NEWS_API.topHeadLineNew;

    Axios.get(url, {
      params: {
        country: 'us',
        category: category || '',
        apiKey: NEWS_API.api_key
      }
    })
      .then(response => {
        res(response.data || null);
      })
      .catch((e) => {
        rej(e);
      })
  })
}

export function everyThingNews(keyword = 'stars OR technical OR economic', page = 1) {
  return new Promise((res, rej) => {
    const url = NEWS_API.everyThingNew;
    console.log(keyword)
    Axios.get(url, {
      params: {
        q: keyword,
        page: page,
        apiKey: NEWS_API.api_key
      }
    })
      .then(response => {
        res(response.data || null);
      })
      .catch((e) => {
        console.log(e);
        rej(e);
      })
  })
}